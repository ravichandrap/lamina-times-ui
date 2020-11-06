import React, {FC, useContext} from 'react';
import { LaminaContext } from '../hooks/context/LaminaProvider';
import { StocksList } from './StocksDetails/StocksList';
import {USERS_LIST, STOCKS_LIST} from './../utils/constants'
import { UsersList } from './UserDetails/UsersList';
import { LaminaDashboard } from './Dashboard/LaminaDashboard';


export const LaminaInfo:FC = () => {  
    const { currentPage } = useContext(LaminaContext);
    return  getCurrentPage(currentPage)
} 

const getCurrentPage = (name: string) => {
    console.log("get current page:", name)
    switch (name) {
        case USERS_LIST :
            return <UsersList/>
        case STOCKS_LIST:
            return <StocksList/> 
        default: 
            return <LaminaDashboard />
    }
};