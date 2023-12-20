import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_EHeRin4_.mjs';

const _page0  = () => import('./chunks/generic_3Jn9lvGY.mjs');
const _page1  = () => import('./chunks/index_s4WcjJqq.mjs');
const _page2  = () => import('./chunks/index_QDU4iQj_.mjs');
const _page3  = () => import('./chunks/_id__mD5w6e_z.mjs');
const _page4  = () => import('./chunks/swiper_ymqe16Ff.mjs');
const _page5  = () => import('./chunks/about_Pz8zcyGa.mjs');
const _page6  = () => import('./chunks/chat_vH-9aoo5.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/products/index.astro", _page2],["src/pages/products/[id].astro", _page3],["src/pages/swiper.astro", _page4],["src/pages/about.astro", _page5],["src/pages/chat.astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
