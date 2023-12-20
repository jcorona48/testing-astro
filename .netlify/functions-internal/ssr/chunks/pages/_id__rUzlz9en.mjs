/* empty css                          */
import 'html-escaper';
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderComponent, i as renderHead, j as renderSlot, k as createTransitionScope, l as renderTransition } from '../astro_ZuKDDhOm.mjs';
import 'kleur/colors';
import { ToastContainer } from 'react-toastify';
import 'clsx';
/* empty css                         */

const narbarOptions = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Products",
        href: "/products",
    },
    {
        label: "Swiper",
        href: "/swiper",
    },
    {
        label: "Chat",
        href: "/chat",
    },
];

const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
    },

    {
        id: 2,
        name: "Product 2",
        price: 200,
    },

    {
        id: 3,
        name: "Product 3",
        price: 300,
    },

    {
        id: 4,
        name: "Product 4",
        price: 400,
    },

    {
        id: 5,
        name: "Product 5",
        price: 500,
    },

    {
        id: 6,
        name: "Product 6",
        price: 600,
    },

    {
        id: 7,
        name: "Product 7",
        price: 700,
    },

    {
        id: 8,
        name: "Product 8",
        price: 800,
    },

    {
        id: 9,
        name: "Product 9",
        price: 900,
    },

    {
        id: 10,
        name: "Product 10",
        price: 1000,
    },
];

const $$Astro$3 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-5blmo7yk> <ul data-astro-cid-5blmo7yk> ${narbarOptions.map((option) => {
    return renderTemplate`<li data-astro-cid-5blmo7yk> <a${addAttribute(option.href, "href")} data-astro-cid-5blmo7yk>${option.label}</a> </li>`;
  })} </ul> </nav> `;
}, "/home/jcorona48/projects/testing-astro/src/components/Navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/jcorona48/projects/testing-astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, page } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none" })}${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main> <h1> ${title} - ${page} </h1> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "ToastContainer", ToastContainer, { "position": "bottom-right", "autoClose": 3e3, "hideProgressBar": false, "newestOnTop": false, "closeOnClick": true, "rtl": false, "pauseOnFocusLoss": true, "draggable": true, "pauseOnHover": true, "theme": "dark", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-toastify", "client:component-export": "ToastContainer", "data-astro-transition-persist": createTransitionScope($$result, "doctkgqq") })} </body></html>`;
}, "/home/jcorona48/projects/testing-astro/src/layouts/Layout.astro", "self");

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const product = products.find((product2) => product2.id === Number(id));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": `page`, "title": "ProductPage", "data-astro-cid-y5jmkon6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-y5jmkon6>Product <span data-astro-cid-y5jmkon6${addAttribute(renderTransition($$result2, "hc2vyp6m", "", `product-id ${product.id}`), "data-astro-transition-scope")}>${id}</span></h1> <span data-astro-cid-y5jmkon6${addAttribute(renderTransition($$result2, "wwrxkulv", "", `product-name ${product.id}`), "data-astro-transition-scope")}> ${product.name} </span> <span data-astro-cid-y5jmkon6${addAttribute(renderTransition($$result2, "w2mymo3t", "", `product-price ${product.id}`), "data-astro-transition-scope")}> ${product.price.toFixed(2)} </span> ` })} `;
}, "/home/jcorona48/projects/testing-astro/src/pages/products/[id].astro", "self");

const $$file = "/home/jcorona48/projects/testing-astro/src/pages/products/[id].astro";
const $$url = "/products/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _, products as p };
