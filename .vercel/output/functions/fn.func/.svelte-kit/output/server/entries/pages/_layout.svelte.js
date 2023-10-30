import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav data-svelte-h="svelte-1r0om5q"><a href="/">Home</a> <a href="/about">About</a> <a href="/settings">Settings</a></nav> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
