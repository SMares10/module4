import { useState, useEffect } from "react";

export default function Counter() {
    // Initialize state from localStorage before rendering
    const [count, setCount] = useState(() => {
        const storedCount = localStorage.getItem("count");
        return storedCount !== null ? parseInt(storedCount, 10) : 0;
    });

    const incrementCount = () => {
        setCount(count + 1);
    };

    // Save to localStorage when count changes
    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={incrementCount}>Add 1</button>
        </div>
    );
}