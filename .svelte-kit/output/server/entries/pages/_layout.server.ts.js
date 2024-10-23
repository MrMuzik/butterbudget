const prerender = false;
const ssr = true;
const API_BASE_URL = "https://butterbudget.deno.dev/";
async function load({ fetch }) {
  console.log("Fetching budgets from server...");
  const res = await fetch(`${API_BASE_URL}/api/budgets`);
  const budgets = await res.json();
  console.log("Budgets loaded from server:", budgets);
  return { budgets };
}
export {
  load,
  prerender,
  ssr
};
//# sourceMappingURL=_layout.server.ts.js.map
