import {StocksState} from '../../types/StocksState';

export function getInitialState(): StocksState {

    return {
        users: [],
        stocks: [],
        inputErrorMessage: '',
        isLoading: false,
        error: null,
        currentPage:"home"
    };
}