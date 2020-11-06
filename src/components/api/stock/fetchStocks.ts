import { Dispatch } from "react";
import { StocksAction } from "../../types/StocksAction";
import { REQUEST_ERROR, IS_LOADING, SET_STOCKS } from '../../utils/constants'
import { getEnvironmentVariables } from '../../utils/getEnvironmentVariables'
import { Stock } from "../../types/Stock";
import { Stocks } from "../../types/Stocks";
import axios, { AxiosResponse } from 'axios';

const { BASE_URL } = getEnvironmentVariables();

function getURL(user_id: number): string {
    // return `${BASE_URL}/api/v1/stock/${user_id}`;
    return `${BASE_URL}/api/v1/stock`;
}

export async function fetchStocks(
    user_id: number,
    dispatch: Dispatch<StocksAction>
) {
    try {
        dispatch({ type: IS_LOADING })
        const url = getURL(user_id);
        const { data }: AxiosResponse<Stock[]> = await axios.get(url);
        console.log("axios: data: ", data);

        dispatch({ type: SET_STOCKS, stocks: data })
    } catch (console) {
        dispatch({ type: REQUEST_ERROR, error: console.message })
    }
}
