import * as universal from '../entries/pages/joe/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/joe/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/joe/+page.js";
export const imports = ["_app/immutable/nodes/3.ea2a53ca.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.4d21fe7b.js"];
export const stylesheets = [];
export const fonts = [];
