

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/budgets/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BlcyyJEk.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DGhVwavX.js"];
export const stylesheets = [];
export const fonts = [];
