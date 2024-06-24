import {create} from "zustand";
import React from "react";

// The create function, passes a set function to the callback function.
// This set function is a function used to manipulate the state in the store.
// We have two states in our store: counter, and incrCounter.
// The useCounter is a custom hook,
// We can use this hook in our components and we will be able to get the latest state in them.
const useCounter = create((set) => {
    return {
        counter: 0,
        incrCounter: () => set((state) => ({counter: state.counter + 1})),
        resetCounter: () => set((state) => ({counter: 0})),
        // incrCounter: async () => {
        //     const { data } = await axios.get("/counter");
        //     set({
        //         counter: data.counter,
        //     });
        // }
    };
});

// See that we called the useCounter hook and passed a callback function to it.
// Then, we expect a state from the hook and then return the counter part of the state.
const DisplayCounter = () => {
    const counter = useCounter((state) => state.counter);
    return <div className="ms-4 mt-5 mb-5">Counter: {counter}</div>;
};

// We want to create a component where we can increase the value of the counter state
const CounterControl = () => {
    const incrCounter = useCounter((state) => state.incrCounter);
    const resetCounter = useCounter((state) => state.resetCounter);

    return (
        <div className="inline-flex rounded-md ml-5" role="group">
            <button type="button" onClick={incrCounter}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Incr. Counter
            </button>
            <button type="button" onClick={resetCounter}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Reset Counter
            </button>
        </div>
    );
};

function ZustandExample() {
    return (
        <>
            <DisplayCounter/>
            <CounterControl/>
        </>
    );
};

export default ZustandExample;