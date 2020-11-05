import { useEffect, useReducer } from 'react';
import {StockScheme } from '../../types/StockScheme';
import { modelReducer } from './reducer/reducer';
import {getInitialState } from '../utils/getInitialState';
import {fetchStocks} from '../../api/stock/fetchStocks'

const initialState = getInitialState();
export function useStocks():  StockScheme {
    const [state, dispatch] = useReducer(modelReducer, initialState);

    return {
        ...state,
        fetchStocks(user_id: number) {
            fetchStocks(user_id, dispatch); 
        }
    }
}