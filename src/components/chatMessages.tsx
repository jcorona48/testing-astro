import React, { useState, useRef, useEffect } from "react";
import { useSocket } from "@/hooks/useSocket";

type Message = {
    msg: string;
    id: string;
    name: string;
};
const chatMessages = ({ client }) => {
    const [messages, setMessages] = useState<Message[]>([]);

    const divRef = useRef<HTMLDivElement>(null);
    const { socket, online } = client;

    socket.on("message", (message) => {
        setMessages([...messages, message]);
    });

    useEffect(() => {
        if (divRef.current?.scrollHeight) {
            divRef.current?.scrollTo(0, divRef.current?.scrollHeight);
        }
    }, [messages]);

    return (
        <div
            className="flex border-2 border-gray-800 rounded-lg
            flex-col justify-start items-center text-white max-lg:w-[600px] max-xl:w-[600px] max-sm:w-[300px] max-2xl:w-[900px] w-[1200px] min-h-[500px] max-h-[500px] overflow-y-auto 
            overflow-x-hidden break-words
            pb-6 px-2"
            ref={divRef}
        >
            {messages.map((message, index) => {
                const isMe = socket.id === message.id;
                return (
                    <div
                        key={index}
                        className={`w-full
                            flex-wrap
                        flex flex-col ${isMe ? "items-end" : "items-start"} `}
                    >
                        {!isMe && (
                            <span className="text-xs font-bold mx-2">
                                {message.name}
                            </span>
                        )}{" "}
                        <div
                            className={
                                isMe
                                    ? `bg-gray-500 p-2 m-2 
                                    w-max
                                    max-w-[400px]
                                    rounded-lg`
                                    : `bg-purple-900 p-2 m-2 
                                    rounded-lg
                                    flex-wrap
                                    max-w-[400px]
                                    break-words
                                    `
                            }
                        >
                            <span className=" break-words">{message.msg}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default chatMessages;
