export const prerender = false;
export const ssr = true;

// Fetch the API base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function load({ fetch }: { fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response> }) {
  const res = await fetch(`${API_BASE_URL}/api/budgets`);
  const budgets = await res.json();
  return { budgets };
}
