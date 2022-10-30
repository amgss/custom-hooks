import { useState } from "react";

export const useCounter = (initialValue = 10) => {
    
    const [counter, setCounter] = useState(initialValue);
    const increment = (valueToAdd = 1) => {
        // De esta forma siempre coge el valor más actual del counter
        setCounter((currentCounter) => currentCounter + valueToAdd);
    }
    const decrement = (valueToAdd = 1) => {
        setCounter(counter - valueToAdd);
    }
    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
