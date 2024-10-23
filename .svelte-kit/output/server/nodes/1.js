

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.B6J_nEKL.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DGhVwavX.js","_app/immutable/chunks/entry.BUWATw7Z.js"];
export const stylesheets = [];
export const fonts = [];
