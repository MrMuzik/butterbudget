export const prerender = false;
export const ssr = true;

// Fetch the API base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function load({ fetch }: { fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response> }) {
  console.log('API_BASE_URL:', API_BASE_URL);
  // try {
  //   const res = await fetch(`${API_BASE_URL}/api/budgets`);

  //   // Check if the response is OK (status 200–299)
  //   if (!res.ok) {
  //     console.error(`Failed to fetch budgets. Status: ${res.status}`);
  //     return { budgets: [] };  // Return an empty array in case of error
  //   }

  //   const budgets = await res.json();
  //   return { budgets };

  // } catch (error) {
  //   console.error('Error fetching budgets:', error);
  //   return { budgets: [] };  // Return an empty array in case of error
  // }
}

