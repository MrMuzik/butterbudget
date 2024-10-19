import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let budgets = [];
  let description = "";
  let amount = "";
  return `<h1 data-svelte-h="svelte-j6orl1">Budget Tracker</h1> <input type="text" placeholder="Description"${add_attribute("value", description)}> <input type="number" placeholder="Amount"${add_attribute("value", amount)}> <button data-svelte-h="svelte-dns8g">Add Budget</button> <ul>${each(budgets, (budget) => {
    return `<li>${escape(budget.description)} - $${escape(budget.amount)} <button data-svelte-h="svelte-12caasq">Delete</button> </li>`;
  })}</ul>`;
});
export {
  Page as default
};
