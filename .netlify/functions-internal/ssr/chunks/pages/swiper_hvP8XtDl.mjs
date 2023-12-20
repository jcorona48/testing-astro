/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_ZuKDDhOm.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
/* empty css                           */
import { $ as $$Layout } from './_id__rUzlz9en.mjs';

const SwiperDiv = ({ children }) => {
  return /* @__PURE__ */ jsx("div", { className: "w-full flex items-center justify-center flex-col p-12 text-white", children });
};
function App() {
  return /* @__PURE__ */ jsxs(
    Swiper,
    {
      modules: [Navigation, Pagination, A11y],
      slidesPerView: 1,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: { draggable: true },
      className: "mySwiper",
      children: [
        /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs(SwiperDiv, { children: [
          /* @__PURE__ */ jsx("img", { src: "https://via.placeholder.com/150", alt: "Slide 1" }),
          /* @__PURE__ */ jsx("p", { children: "Slide 1" })
        ] }) }),
        /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs(SwiperDiv, { children: [
          /* @__PURE__ */ jsx("img", { src: "https://via.placeholder.com/150", alt: "Slide 2" }),
          /* @__PURE__ */ jsx("p", { children: "Slide 2" })
        ] }) }),
        /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs(SwiperDiv, { children: [
          /* @__PURE__ */ jsx("img", { src: "https://via.placeholder.com/150", alt: "Slide 3" }),
          /* @__PURE__ */ jsx("p", { children: "Slide 3" })
        ] }) }),
        /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs(SwiperDiv, { children: [
          /* @__PURE__ */ jsx("img", { src: "https://via.placeholder.com/150", alt: "Slide 4" }),
          /* @__PURE__ */ jsx("p", { children: "Slide 4" })
        ] }) })
      ]
    }
  );
}

const $$Astro = createAstro();
const $$Swiper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Swiper;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Swiper", "page": "Swiper" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full flex-1 dark:bg-slate-900 flex justify-center items-center"> <div class="w-96"> ${renderComponent($$result2, "SwiperRealize", App, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Swiper", "client:component-export": "default" })} </div> </div> ` })}`;
}, "/home/jcorona48/projects/testing-astro/src/pages/swiper.astro", void 0);

const $$file = "/home/jcorona48/projects/testing-astro/src/pages/swiper.astro";
const $$url = "/swiper";

export { $$Swiper as default, $$file as file, $$url as url };
