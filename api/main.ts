import { Application } from "https://deno.land/x/oak@v12.0.1/mod.ts";

// Create a map to store request counts by IP address
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

// Apply custom rate-limiting middleware: max 100 requests per IP per minute
app.use(rateLimiter(100, 60 * 1000)); // 100 requests per 60,000 ms (1 minute)

// Route handler
app.use((ctx) => {
  ctx.response.body = "Hello, Deno with custom rate limiting!";
});

// Start the server
console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });
