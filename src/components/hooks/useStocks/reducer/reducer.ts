import {StocksState} from '../../../types/StocksState';
import {StocksAction} from '../../../types/StocksAction';
import { SET_STOCKS, 
    SET_USERS, 
    SET_CURRENT_PAGE,
    USERS_LIST,
    STOCKS_LIST
} from '../../../utils/constants';

export function modelReducer(
    state: StocksState,
    action: StocksAction
): StocksState {

    switch(action.type) {
        case SET_STOCKS: 
        return {
            ...state,
            stocks: action.stocks,
            currentPage: STOCKS_LIST
        }
        case SET_USERS: 
        return {
            ...state,
            users: action.users,
            currentPage: USERS_LIST
        }
        case SET_CURRENT_PAGE: 
        return {
            ...state,
            currentPage: action.currentPage
        }
        
        default: return {...state}
    }
}