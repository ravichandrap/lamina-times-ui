import {Stock} from './Stock'
import {User} from './User'
import {SET_STOCKS, 
    IS_LOADING, 
    REQUEST_ERROR,
    SET_USERS,
SET_CURRENT_PAGE,
PAGE_HOME
} from '../utils/constants'

interface SetSharesAction {
    type: typeof SET_STOCKS;
    stocks: Stock[]
}

interface SetUsersAction {
    type: typeof SET_USERS;
    users: User[]
}

interface SetErrorAction {
    type: typeof REQUEST_ERROR;
    error: string
}

interface IsLoading {
    type: typeof IS_LOADING;
  }

interface SetCurrentPage {
    type: typeof SET_CURRENT_PAGE;
    currentPage: string;
}

export type StocksAction = 
            SetSharesAction |
            SetErrorAction |
            IsLoading |
            SetUsersAction |
            SetCurrentPage

