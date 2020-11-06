import React, { createContext, FC } from 'react';
import { useStocks } from './../useStocks/useStocks'
import { StockScheme } from "../../types/StockScheme";

export const LaminaContext = createContext({} as StockScheme);

export const LaminaProvider: FC = ({ children }) => {
    const state = useStocks();
    return (<LaminaContext.Provider value={state}>
        {children}
    </LaminaContext.Provider>)
}
