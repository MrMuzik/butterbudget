export const prerender = false;
export const ssr = true;

// Fetch the API base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function load({ fetch, url }: { fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>, url: URL }) {
  // Check if we're running on the server or client
  const isServer = typeof window === 'undefined';

  try {
    let res;
    if (isServer) {
      // Use a relative URL when running server-side to avoid network issues
      res = await fetch(`${API_BASE_URL}/api/budgets`);
    } else {
      // Use absolute URL for the client-side fetch
      res = await fetch(`/api/budgets`);
    }

    if (!res.ok) {
      console.error(`Error-1 fetching budgets: ${res.status} ${res.statusText}`);
      return { budgets: [] };
    }

    const budgets = await res.text();
    return { budgets };

  } catch (error) {
    console.error(`Error-2 fetching budgets: ${error}`);
    return { budgets: [] };
  }
}

