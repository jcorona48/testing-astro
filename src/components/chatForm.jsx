import React from "react";
import { useSocket } from "@/hooks/useSocket";
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
    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="text"
                name="message"
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
            >
                Send
            </button>
        </form>
    );
};

export default chatForm;
