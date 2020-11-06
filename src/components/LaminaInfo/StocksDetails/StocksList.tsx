import React, {FC} from 'react';
import { Stock } from '../../types/Stock';
import { StocksRow } from './StocksRow';

export const StocksList:FC<{stock:Stock[]}> = ({stock}) => {
     
    const loadStocks = stock.map(s=><StocksRow stock={s}/>)
    return <table width="100%">
            <tr>
            <td>ID</td>
            <td>Name</td>
            <td>symbol</td>
            <td>date</td>
            <td>Net Qty</td>
            <td>Current Price</td>
            <td>Avg Price</td>
            <td>dayPl</td>
            <td>dayPlPercentage</td>
            <td>overallPl</td>
            <td>overallPlPercentage</td>
            <td>investment</td>
            </tr>
        {loadStocks}
    </table>
}