/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, g as addAttribute, l as renderTransition, j as renderSlot } from '../astro_ZuKDDhOm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, p as products } from './_id__rUzlz9en.mjs';
import { C as Counter } from './about_bjqs8fOh.mjs';
/* empty css                          */
import 'clsx';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "page": "home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-j7pv25f6${addAttribute(renderTransition($$result2, "wwdvwa7n", "", "title"), "data-astro-transition-scope")}>Hola mundo</h1> ${renderComponent($$result2, "Counter", Counter, { "client:load": true, "data-astro-transition-persist": "counter", "client:component-hydration": "load", "client:component-path": "@/components/Counter", "client:component-export": "default", "data-astro-cid-j7pv25f6": true, "data-astro-transition-scope": renderTransition($$result2, "t3mnxhwi", "", "counter") })} ` })} `;
}, "/home/jcorona48/projects/testing-astro/src/pages/index.astro", "self");

const $$file$1 = "/home/jcorona48/projects/testing-astro/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5> ${renderSlot($$result, $$slots["default"])} </li> `;
}, "/home/jcorona48/projects/testing-astro/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Product-List", "page": "Products", "data-astro-cid-ttgomkr6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-ttgomkr6${addAttribute(renderTransition($$result2, "awxljez2", "", "title"), "data-astro-transition-scope")}>Hola mundo</h1> <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-ttgomkr6> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-astro-cid-ttgomkr6> ${products.map((product) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "data-astro-cid-ttgomkr6": true }, { "default": ($$result3) => renderTemplate` <a${addAttribute(`/products/${product.id}`, "href")} data-astro-cid-ttgomkr6> <span data-astro-cid-ttgomkr6${addAttribute(renderTransition($$result3, "narytq6h", "", `product-id ${product.id}`), "data-astro-transition-scope")}>${product.id}</span> -
<span data-astro-cid-ttgomkr6${addAttribute(renderTransition($$result3, "ddjssypd", "", `product-name ${product.id}`), "data-astro-transition-scope")}>${product.name}</span> -
<span data-astro-cid-ttgomkr6${addAttribute(renderTransition($$result3, "fuwcj3by", "", `product-price ${product.id}`), "data-astro-transition-scope")}>${product.price}</span> </a> ` })}`)} </div> </div> ` })} `;
}, "/home/jcorona48/projects/testing-astro/src/pages/products/index.astro", "self");

const $$file = "/home/jcorona48/projects/testing-astro/src/pages/products/index.astro";
const $$url = "/products";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
