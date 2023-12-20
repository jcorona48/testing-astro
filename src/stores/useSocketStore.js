import { create } from "zustand";
import io from "socket.io-client";

export const useSocketStore = create((set, get) => ({
    socket: null,
    online: false,
    createSocket: (url) => {
        if (get().socket) {
            get().socket.close();
        }

        const socket = io.connect(url, {
            transports: ["websocket"],
        });

        socket.on("connect", () => set({ online: true }));
        socket.on("disconnect", () => set({ online: false }));

        set({ socket });
    },
}));
