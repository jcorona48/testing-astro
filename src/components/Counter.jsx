import { useState } from "react";

import { toast } from "react-toastify";
const Counter = () => {
    const [count, setCount] = useState(0);

    const [isClicked, setIsClicked] = useState(false);

    const handleCount = () => {
        setCount(count + 1);
        toast.success("Counter is clicked");
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 300);
    };

    return (
        <button
            className={`p-2 bg-blue-500 text-white rounded w-32 hover:bg-blue-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:ring-2 active:ring-blue-400 active:ring-opacity-50 ${
                isClicked ? "animate-jump" : ""
            }  animate-duration-300`}
            onClick={handleCount}
        >
            {count}
        </button>
    );
};

export default Counter;
