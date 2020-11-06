import {StocksState} from '../../../types/StocksState';
import {StocksAction} from '../../../types/StocksAction';
import { SET_STOCKS, 
    SET_USERS, 
    SET_CURRENT_PAGE 
} from '../../utils/constants';

export function modelReducer(
    state: StocksState,
    action: StocksAction
): StocksState {

    switch(action.type) {
        case SET_STOCKS: 
        return {
            ...state,
            stocks: action.stocks
        }
        case SET_USERS: 
        return {
            ...state,
            users: action.users
        }
        // case SET_CURRENT_PAGE: 
        // return {
        //     ...state,
        //     users: action.users
        // }
        
        default: return {...state}
    }
}