import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("Layout component is loading...");
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
//# sourceMappingURL=_layout.svelte.js.map
