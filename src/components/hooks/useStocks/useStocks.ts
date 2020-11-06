import { useEffect, useReducer } from 'react';
import { StockScheme } from '../../types/StockScheme';
import { modelReducer } from './reducer/reducer';
import { getInitialState } from '../utils/getInitialState';
import { fetchStocks } from '../../api/stock/fetchStocks'
import { fetchUsers } from '../../api/stock/fetchUsers'
import { SET_CURRENT_PAGE } from '../../utils/constants';

const initialState = getInitialState();
export function useStocks(): StockScheme {
    const [state, dispatch] = useReducer(modelReducer, initialState);
    return {
        ...state,
        fetchStocks(user_id: number) {
            fetchStocks(user_id, dispatch);
        },
        fetchUsers(user_id: number) {
            fetchUsers(user_id, dispatch);
        },
        setCurrentPage(page: string) {
            dispatch({ type: SET_CURRENT_PAGE, currentPage: page })
        },

    }
}