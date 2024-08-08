"use client"
import { useSelector } from "react-redux";
const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    console.log(count)
    return (
        <div>
            <p className="bg-red-800"> counter : {count}</p>
        </div>
    );
};

export default Counter;