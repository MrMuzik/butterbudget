import { serve } from "https://deno.land/std@0.200.0/http/server.ts";

async function handler(req: Request): Promise<Response> {
  return new Response("Hello, Deno!");
}

console.log("Server running on http://localhost:8000");
serve(handler, { port: 8000 });
