import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { Application, Router } from "https://deno.land/x/oak@v12.0.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.0.0";

// Determine the environment (local, staging, production) from DENO_ENV
const env = Deno.env.get("DENO_ENV") || "local"; // Default to 'local' if not set
let envFile = ".env";

// Load environment variables only for local development
if (env === "local") {
  envFile = "../.env.local";
}
const envVars = config({ path: envFile });

// Supabase credentials
const supabaseUrl = envVars.SUPABASE_URL || Deno.env.get("SUPABASE_URL")!;
const supabaseKey = envVars.SUPABASE_KEY || Deno.env.get("SUPABASE_KEY")!;

// Ensure Supabase URL and Key are loaded
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or Key is missing. Please check your environment variables.");
}

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// CORS configuration
const frontendUrl = Deno.env.get("FRONTEND_URL")!;

// Allow specific frontend URLs in production, while allowing * in local dev for flexibility
const corsOptions = {
  origin: env === "local" ? "*" : frontendUrl,  // Allow all in dev, restrict in production
  methods: ["GET", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Create a new Oak application
const app = new Application();
const router = new Router();

// Apply CORS middleware using the frontend URL
app.use(oakCors(corsOptions));

// Custom rate-limiting middleware
const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();
function rateLimiter(limit: number, windowMs: number) {
  return async (ctx: any, next: () => Promise<void>) => {
    const ip = ctx.request.ip || "unknown";
    const now = Date.now();

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, { count: 1, lastRequest: now });
    } else {
      const userData = rateLimitMap.get(ip)!;
      const timeDifference = now - userData.lastRequest;

      if (timeDifference > windowMs) {
        rateLimitMap.set(ip, { count: 1, lastRequest: now });
      } else {
        userData.count += 1;
        if (userData.count > limit) {
          ctx.response.status = 429;
          ctx.response.body = "Too many requests, please try again later.";
          return;
        }
      }
    }
    await next();
  };
}

// Apply rate-limiting: max 100 requests per IP per minute
app.use(rateLimiter(100, 60 * 1000));

// Define API routes
router.get("/api/budgets", async (ctx) => {
  const { data, error } = await supabase.from("budgets").select("*");
  if (error) {
    ctx.response.status = 500;
    ctx.response.body = { error: error.message };
  } else {
    ctx.response.body = data;
  }
});

// POST route to create a new budget item
router.post("/api/budgets", async (ctx) => {
  const body = ctx.request.body({ type: "json" });
  const { description, amount } = await body.value;
  
  const { data, error } = await supabase
    .from("budgets")
    .insert([{ description, amount }]);
  
  if (error) {
    ctx.response.status = 500;
    ctx.response.body = { error: error.message };
  } else {
    ctx.response.status = 201;
    ctx.response.body = data;
  }
});

// DELETE route to remove a budget item
router.delete("/api/budgets/:id", async (ctx) => {
  const id = ctx.params.id;
  const { data, error } = await supabase.from("budgets").delete().eq("id", id);
  
  if (error) {
    ctx.response.status = 500;
    ctx.response.body = { error: error.message };
  } else {
    ctx.response.body = data;
  }
});

// Apply the routes to the application
app.use(router.routes());
app.use(router.allowedMethods());

// Route handler
app.use((ctx) => {
  ctx.response.body = "Hello, Deno with custom rate limiting!";
});

// Start the server
await app.listen({ port: 8000 });
