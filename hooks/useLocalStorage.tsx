"use client"
import { useEffect, useState } from "react";

function useLocalStorage(key: string, initialValue: string) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            const ValueToStore = typeof storedValue === "function" ? storedValue(storedValue) : storedValue;
            window.localStorage.setItem(key, JSON.stringify(ValueToStore));
        } catch(error) {
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

export default useLocalStorage;