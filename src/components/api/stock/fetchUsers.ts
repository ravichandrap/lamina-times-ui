import { Dispatch } from "react";
import { StocksAction } from "../../types/StocksAction";
import { REQUEST_ERROR, IS_LOADING, SET_USERS } from '../../utils/constants'
import { getEnvironmentVariables } from '../../utils/getEnvironmentVariables'
import axios, { AxiosResponse } from 'axios';
import { User } from "../../types/User";

const { BASE_URL } = getEnvironmentVariables();

function getURL(user_id: number): string {
    // return `${BASE_URL}/api/v1/stock/${user_id}`;
    return `http://localhost:8123/api/v1/user`;
}

export async function fetchUsers(
    user_id: number,
    dispatch: Dispatch<StocksAction>
) {
    try {
        dispatch({ type: IS_LOADING })
        const url = getURL(user_id);
        const { data }: AxiosResponse<User[]> = await axios.get(url);
        console.log("axios: data: ", data);

        dispatch({ type: SET_USERS, users: data })
    } catch (console) {
        dispatch({ type: REQUEST_ERROR, error: console.message })
    }
}