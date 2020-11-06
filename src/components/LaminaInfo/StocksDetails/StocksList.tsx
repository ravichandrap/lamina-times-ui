import React, { FC, useContext } from 'react';
import { LaminaContext } from '../../hooks/context/LaminaProvider';
import { Stock } from '../../types/Stock';
import { StocksRow } from './StocksRow';

export const StocksList: FC = () => {
    const {stocks} = useContext(LaminaContext);
    const loadStocks = stocks.map(s => <StocksRow stock={s} />)
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