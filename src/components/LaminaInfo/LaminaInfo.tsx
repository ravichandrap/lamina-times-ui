import React, {FC} from 'react';
import { StockScheme } from '../types/StockScheme';
import { StocksList } from './StocksDetails/StocksList';

export const LaminaInfo:FC<{stockScheme:StockScheme}> = ({stockScheme}) => {
    const {isLoading, stocks} = stockScheme;
    console.log(isLoading);
    
    return <div>
         <StocksList stock={stocks}/>
    </div>
}