/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, k as createTransitionScope } from '../astro_ZuKDDhOm.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './_id__rUzlz9en.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useMemo, useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
/* empty css                         */

const useSocket = (serverPath) => {
    const socket = useMemo(
        () =>
            io.connect(serverPath, {
                transports: ["websocket"],
            }),
        [serverPath]
    );

    const [online, setOnline] = useState(false);

    useEffect(() => {
        setOnline(socket.connected);
    }, [socket]);

    useEffect(() => {
        socket.on("connect", () => {
            setOnline(true);
        });
    }, [socket]);

    useEffect(() => {
        socket.on("disconnect", () => {
            setOnline(false);
        });
    }, [socket]);

    return {
        socket,
        online,
    };
};

const chatForm = ({ client, name }) => {
  const { socket, online } = client;
  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    const { message } = data;
    socket.emit("message", { message, name });
    e.target.reset();
  };
  return /* @__PURE__ */ jsxs("form", { className: "flex", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        className: "border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none",
        type: "text",
        name: "message"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        type: "submit",
        children: "Send"
      }
    )
  ] });
};

const chatMessages = ({ client }) => {
  const [messages, setMessages] = useState([]);
  const divRef = useRef(null);
  const { socket, online } = client;
  socket.on("message", (message) => {
    setMessages([...messages, message]);
  });
  useEffect(() => {
    if (divRef.current?.scrollHeight) {
      divRef.current?.scrollTo(0, divRef.current?.scrollHeight);
    }
  }, [messages]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "flex border-2 border-gray-800 rounded-lg\n            flex-col justify-start items-center text-white w-[300px] min-h-[500px] max-h-[500px] overflow-y-auto pb-6 px-2",
      ref: divRef,
      children: messages.map((message, index) => {
        const isMe = socket.id === message.id;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: `w-full
                        
                        flex flex-col ${isMe ? "items-end" : "items-start"} `,
            children: [
              !isMe && /* @__PURE__ */ jsx("span", { className: "text-xs font-bold mx-2", children: message.name }),
              " ",
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: isMe ? `bg-gray-500 p-2 m-2 
                                    w-max
                                    rounded-lg` : `bg-purple-900 p-2 m-2 
                                    w-max
                                    rounded-lg`,
                  children: message.msg
                }
              )
            ]
          },
          index
        );
      })
    }
  );
};

const ChatContainer = () => {
  const { socket, online } = useSocket("http://localhost:3000");
  const [name, setName] = useState(null);
  useEffect(() => {
    const name2 = prompt("What is your name?");
    setName(name2);
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: name ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("h1", { children: [
      "Chat - ",
      name
    ] }),
    " ",
    /* @__PURE__ */ jsx(chatMessages, { client: { socket, online } }),
    " ",
    /* @__PURE__ */ jsx(chatForm, { client: { socket, online }, name }),
    " "
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("h1", { children: [
      "Please enter your name to start chatting",
      /* @__PURE__ */ jsx("span", { role: "img", "aria-label": "emoji", children: "💬" })
    ] }),
    /* @__PURE__ */ jsx("h1", { children: "if cant see the chat, please refresh the page" })
  ] }) });
};

const $$Astro = createAstro();
const $$Chat = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Chat;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Chat-Page", "title": "Chat-Page", "data-astro-cid-wfrjesbw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div data-astro-cid-wfrjesbw> ${renderComponent($$result2, "ChatContainer", ChatContainer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ChatContainer", "client:component-export": "default", "data-astro-cid-wfrjesbw": true, "data-astro-transition-persist": createTransitionScope($$result2, "q3a54jye") })} </div> ` })} `;
}, "/home/jcorona48/projects/testing-astro/src/pages/chat.astro", "self");

const $$file = "/home/jcorona48/projects/testing-astro/src/pages/chat.astro";
const $$url = "/chat";

export { $$Chat as default, $$file as file, $$url as url };
