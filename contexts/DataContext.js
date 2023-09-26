"use client"
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }) => {

    const [emails, setEmail] = useState(["shivang", "raghav"]);
    const [inputValue, setInputValue] = useState("");
    const [msg, setMsg] = useState("");
    return (
        <DataContext.Provider >
            {children}
        </DataContext.Provider>
    );
};
