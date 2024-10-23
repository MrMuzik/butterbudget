

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.8fNc_CAl.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DGhVwavX.js"];
export const stylesheets = [];
export const fonts = [];
