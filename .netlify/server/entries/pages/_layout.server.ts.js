const prerender = false;
const ssr = true;
const API_BASE_URL = "https://butterbudget.deno.dev/";
async function load({ fetch }) {
  const res = await fetch(`${API_BASE_URL}/api/budgets`);
  const budgets = await res.json();
  return { budgets };
}
export {
  load,
  prerender,
  ssr
};
