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
            flex-col justify-start items-center text-white w-[300px] min-h-[500px] max-h-[500px] overflow-y-auto pb-6 px-2"
            ref={divRef}
        >
            {messages.map((message, index) => {
                const isMe = socket.id === message.id;
                return (
                    <div
                        key={index}
                        className={`w-full
                        
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
                                    rounded-lg`
                                    : `bg-purple-900 p-2 m-2 
                                    w-max
                                    rounded-lg`
                            }
                        >
                            {message.msg}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default chatMessages;
