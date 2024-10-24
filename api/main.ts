import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { Application, Router } from "https://deno.land/x/oak@v12.0.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.0.0";

// Determine the environment (local, staging, production) from DENO_ENV
const env = Deno.env.get("ENV") || "local"; // Default to 'local' if not set
let envFile = ".env";  // Fallback to a generic .env

// Choose the appropriate .env file based on the environment
if (env === "local") {
  envFile = "../.env.local"; // Correct relative path from /butterbudget/api to /butterbudget
}

// Load the selected .env file based on the environment
const envVars = config({ path: envFile });

// Supabase credentials
const supabaseUrl = envVars.SUPABASE_URL || Deno.env.get("SUPABASE_URL");
const supabaseKey = envVars.SUPABASE_KEY || Deno.env.get("SUPABASE_KEY");

// Ensure Supabase URL is loaded
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or Key is missing. Please check your .env file.");
}

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Get frontend URL for CORS from the environment variables
const frontendUrl = envVars.FRONTEND_URL || Deno.env.get("FRONTEND_URL");

if (!frontendUrl) {
  throw new Error("Frontend URL is missing. Please check your .env file.");
}

// Create a map to store request counts by IP address for rate limiting
const rateLimitMap = new Map<string, { count: number, lastRequest: number }>();

// Custom rate-limiting middleware
function rateLimiter(limit: number, windowMs: number) {
  return async (ctx: any, next: () => Promise<void>) => {
    const ip = ctx.request.ip || "unknown"; // Get the client's IP address
    const now = Date.now();

    // Check if the IP exists in the map
    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, { count: 1, lastRequest: now });
    } else {
      const userData = rateLimitMap.get(ip)!;
      const timeDifference = now - userData.lastRequest;

      // Reset the count if the window has passed
      if (timeDifference > windowMs) {
        rateLimitMap.set(ip, { count: 1, lastRequest: now });
      } else {
        userData.count += 1;

        // If the request count exceeds the limit, return a rate-limiting message
        if (userData.count > limit) {
          ctx.response.status = 429; // Too many requests
          ctx.response.body = "Too many requests, please try again later.";
          return;
        }
      }
    }

    // Proceed to the next middleware/route handler
    await next();
  };
}

// Create a new Oak application
const app = new Application();
const router = new Router();

// Apply CORS middleware using the frontend URL from environment variables
app.use(oakCors({ origin: frontendUrl }));  // Allow requests from FRONTEND_URL

// Apply custom rate-limiting middleware: max 100 requests per IP per minute
app.use(rateLimiter(100, 60 * 1000)); // 100 requests per 60,000 ms (1 minute)

// GET all budget items
router.get("/api/budgets", async (ctx) => {
  const { data, error } = await supabase.from("budgets").select("*");
  if (error) {
    ctx.response.status = 500;
    ctx.response.body = { error: error.message };
  } else {
    ctx.response.body = data;
  }
});

// POST a new budget item
router.post("/api/budgets", async (ctx) => {
  const { description, amount } = await ctx.request.body().value;
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

// DELETE a budget item by ID
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

// Show a simple message - testing only
// app.use((ctx) => {
//   ctx.response.body = "Hello, Deno with custom rate limiting! " + env + " environment " + frontendUrl;
// });

// Start the server and display environment
await app.listen({ port: 8000 });
