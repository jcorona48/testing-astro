import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_ZuKDDhOm.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.rfglzoOR.js"}],"styles":[{"type":"external","src":"/_astro/about.1IfE1FJs.css"},{"type":"inline","content":"h1[data-astro-cid-j7pv25f6]{color:red;font-size:150px}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.rfglzoOR.js"}],"styles":[{"type":"external","src":"/_astro/about.1IfE1FJs.css"},{"type":"inline","content":".link-card[data-astro-cid-dohjnao5]{list-style:none;display:flex;padding:1px;background-color:#23262d;background-image:none;background-size:400%;border-radius:7px;background-position:100%;transition:background-position .6s cubic-bezier(.22,1,.36,1);box-shadow:inset 0 0 0 1px #ffffff1a;cursor:pointer}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within){background-position:0;background-image:var(--accent-gradient)}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within) h2[data-astro-cid-dohjnao5]{color:rgb(var(--accent-light))}a[data-astro-cid-ttgomkr6]{width:100%;text-decoration:none;line-height:1.4;padding:calc(1.5rem - 1px);border-radius:8px;color:#fff;background-color:#23262d;opacity:.8}\n"}],"routeData":{"route":"/products","type":"page","pattern":"^\\/products\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products/index.astro","pathname":"/products","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.rfglzoOR.js"}],"styles":[{"type":"external","src":"/_astro/about.1IfE1FJs.css"},{"type":"inline","content":"h1[data-astro-cid-y5jmkon6],h1[data-astro-cid-y5jmkon6] span[data-astro-cid-y5jmkon6]{color:red}span[data-astro-cid-y5jmkon6]{color:#fff}\n"}],"routeData":{"route":"/products/[id]","type":"page","pattern":"^\\/products\\/([^/]+?)\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/products/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.rfglzoOR.js"}],"styles":[{"type":"external","src":"/_astro/about.1IfE1FJs.css"},{"type":"external","src":"/_astro/swiper.mnVxPep1.css"}],"routeData":{"route":"/swiper","type":"page","pattern":"^\\/swiper\\/?$","segments":[[{"content":"swiper","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/swiper.astro","pathname":"/swiper","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.rfglzoOR.js"}],"styles":[{"type":"external","src":"/_astro/about.1IfE1FJs.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.rfglzoOR.js"}],"styles":[{"type":"external","src":"/_astro/about.1IfE1FJs.css"},{"type":"inline","content":"div[data-astro-cid-wfrjesbw]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem}\n"}],"routeData":{"route":"/chat","type":"page","pattern":"^\\/chat\\/?$","segments":[[{"content":"chat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chat.astro","pathname":"/chat","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/jcorona48/projects/testing-astro/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["/home/jcorona48/projects/testing-astro/src/pages/chat.astro",{"propagation":"in-tree","containsHead":true}],["/home/jcorona48/projects/testing-astro/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/jcorona48/projects/testing-astro/src/pages/products/[id].astro",{"propagation":"in-tree","containsHead":true}],["/home/jcorona48/projects/testing-astro/src/pages/products/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/jcorona48/projects/testing-astro/src/pages/swiper.astro",{"propagation":"in-tree","containsHead":true}],["/home/jcorona48/projects/testing-astro/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/chat@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/products/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/products/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/swiper@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/chat.astro":"chunks/pages/chat_qx1w9CAp.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_eiv2v0SR.mjs","/src/pages/swiper.astro":"chunks/pages/swiper_hvP8XtDl.mjs","\u0000@astrojs-manifest":"manifest_EHeRin4_.mjs","/home/jcorona48/projects/testing-astro/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_3Jn9lvGY.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_s4WcjJqq.mjs","\u0000@astro-page:src/pages/products/index@_@astro":"chunks/index_QDU4iQj_.mjs","\u0000@astro-page:src/pages/products/[id]@_@astro":"chunks/_id__mD5w6e_z.mjs","\u0000@astro-page:src/pages/swiper@_@astro":"chunks/swiper_ymqe16Ff.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_Pz8zcyGa.mjs","\u0000@astro-page:src/pages/chat@_@astro":"chunks/chat_vH-9aoo5.mjs","@/components/Counter":"_astro/Counter.h6Pos7Gr.js","react-toastify":"_astro/_astro-entry_react-toastify.GDm5-HSS.js","/astro/hoisted.js?q=0":"_astro/hoisted.rfglzoOR.js","@/components/ChatContainer":"_astro/ChatContainer.ISL5u8lc.js","@/components/Swiper":"_astro/Swiper.8aMsLUMO.js","@astrojs/react/client.js":"_astro/client.2wOxL1Aq.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.1IfE1FJs.css","/_astro/swiper.mnVxPep1.css","/favicon.svg","/_astro/ChatContainer.ISL5u8lc.js","/_astro/index.UCAuQZPX.js","/_astro/client.2wOxL1Aq.js","/_astro/_astro-entry_react-toastify.IIcmjl7j.js","/_astro/jsx-runtime.G4i-1Giy.js","/_astro/_astro-entry_react-toastify.GDm5-HSS.js","/_astro/hoisted.rfglzoOR.js","/_astro/Swiper.8aMsLUMO.js","/_astro/Counter.h6Pos7Gr.js"]});

export { manifest };
