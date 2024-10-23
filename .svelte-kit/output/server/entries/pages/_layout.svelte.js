import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  let { status } = $$props;
  console.log("Error during rendering:", error);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
  return `${error ? `<h1>An error occurred: ${escape(status)}</h1> <p>${escape(error.message)}</p>` : ``} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
//# sourceMappingURL=_layout.svelte.js.map
