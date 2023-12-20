// ChatContainer.jsx
import React, { useEffect, useState } from "react";
import ChatForm from "@/components/chatForm";
import ChatMessage from "@/components/chatMessages";
import { useSocket } from "@/hooks/useSocket";
import { PUBLIC_BACKEND_URL } from "@/config";

const ChatContainer = () => {
    const { socket, online, users } = useSocket(PUBLIC_BACKEND_URL);

    const [name, setName] = useState(null);

    useEffect(() => {
        const name = prompt("What is your name?");
        socket.emit("join", { name });
        setName(name);
    }, []);

    return (
        <>
            {name ? (
                <>
                    <h1>Chat - {name}</h1>{" "}
                    <ul className="absolute top-1/2 left-0 m-4 text-white flex flex-col">
                        {users
                            .filter((user) => user.name !== name)
                            .map((user) => {
                                const isMe = user.name === name;
                                return (
                                    <li
                                        key={user.id}
                                        className={`${
                                            isMe
                                                ? "text-green-500"
                                                : "text-blue-500"
                                        }`}
                                    >
                                        {user.name}
                                    </li>
                                );
                            })}
                    </ul>
                    <ChatMessage client={{ socket, online }} />{" "}
                    <ChatForm client={{ socket, online }} name={name} />{" "}
                </>
            ) : (
                <>
                    <h1>
                        Please enter your name to start chatting
                        <span role="img" aria-label="emoji">
                            💬
                        </span>
                    </h1>
                    <h1>if cant see the chat, please refresh the page</h1>
                </>
            )}
        </>
    );
};

export default ChatContainer;
