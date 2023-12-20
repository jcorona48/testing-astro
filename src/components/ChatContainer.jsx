// ChatContainer.jsx
import React, { useEffect, useState } from "react";
import ChatForm from "@/components/chatForm";
import ChatMessage from "@/components/chatMessages";
import { useSocket } from "@/hooks/useSocket";
import { PUBLIC_BACKEND_URL } from "@/config";

const ChatContainer = () => {
    const { socket, online } = useSocket(PUBLIC_BACKEND_URL);

    const [name, setName] = useState(null);

    useEffect(() => {
        const name = prompt("What is your name?");
        setName(name);
    }, []);

    return (
        <>
            {name ? (
                <>
                    <h1>Chat - {name}</h1>{" "}
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
