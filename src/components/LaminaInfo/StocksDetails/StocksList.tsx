import React, {FC} from 'react';
import { Stock } from '../../types/Stock';

export const StocksList:FC<{stock:Stock[]}> = ({stock}) => {
     
    const loadStocks = stock.map(s=>{
        return <div key={s.id}>{s.name}</div>
    })
    
    return <div>
        {loadStocks}
    </div>
}