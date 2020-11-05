import { format } from "path";
import {createContext, useContext} from 'react'
import { getInitialState } from "../hooks/utils/getInitialState";
import {StocksState}  from "../types/StocksState";
const initialState = getInitialState();

export const LaminaContext = createContext<StocksState>(initialState);
