import {Stock} from './Stock'
import {SET_STOCKS, IS_LOADING, REQUEST_ERROR} from '../hooks/utils/constants'

interface SetSharesAction {
    type: typeof SET_STOCKS;
    stocks: Stock[]
}

interface SetErrorAction {
    type: typeof REQUEST_ERROR;
    error: string
}

interface IsLoading {
    type: typeof IS_LOADING;
  }

export type StocksAction = 
            SetSharesAction |
            SetErrorAction |
            IsLoading 

