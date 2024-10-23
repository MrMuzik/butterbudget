import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("Page component is loading...");
  console.log("apiURL", "https://butterbudget.deno.dev/");
  return `<h1 data-svelte-h="svelte-yyjjjs">Welcome to SvelteKit</h1> <p data-svelte-h="svelte-jl9sbz">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte.js.map
