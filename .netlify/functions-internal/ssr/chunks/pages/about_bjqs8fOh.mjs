/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, g as addAttribute, l as renderTransition } from '../astro_ZuKDDhOm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './_id__rUzlz9en.mjs';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const handleCount = () => {
    setCount(count + 1);
    toast.promise(
      () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            reject("Counter increased");
          }, 1e3);
        });
      },
      {
        pending: "Increasing counter",
        success: "Counter increased",
        error: "Cannot increase counter"
      }
    );
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `p-2 bg-blue-500 text-white rounded w-32 hover:bg-blue-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:ring-2 active:ring-blue-400 active:ring-opacity-50 ${isClicked ? "animate-jump" : ""}  animate-duration-300`,
      onClick: handleCount,
      children: count
    }
  );
};

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "about", "title": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1${addAttribute(renderTransition($$result2, "5cn4itco", "", "title"), "data-astro-transition-scope")}>Hola mundo</h1> ${renderComponent($$result2, "Counter", Counter, { "client:load": true, "data-astro-transition-persist": "counter", "client:component-hydration": "load", "client:component-path": "@/components/Counter", "client:component-export": "default", "data-astro-transition-scope": renderTransition($$result2, "yzqgxa65", "", "counter") })} ` })} `;
}, "/home/jcorona48/projects/testing-astro/src/pages/about.astro", "self");

const $$file = "/home/jcorona48/projects/testing-astro/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Counter as C, about as a };
