import { useState, useEffect, useMemo } from "react";
import io from "socket.io-client";

export const useSocket = (serverPath) => {
    const socket = useMemo(
        () =>
            io.connect(serverPath, {
                transports: ["websocket"],
            }),
        [serverPath]
    );

    const [online, setOnline] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setOnline(socket.connected);
        socket.on("join", (data) => {
            setUsers(data);
        });
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
        users,
    };
};
