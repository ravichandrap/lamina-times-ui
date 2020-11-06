import React, { FC } from 'react';
import { Stock } from '../../types/Stock';

export const StocksRow: FC<{ stock: Stock }> = ({ stock }) => {
    return <tr key={stock.id} >
        <td>{stock.id}</td>
        <td >{stock.name}</td>
        <td >{stock.symbol}</td>
        <td >{stock.date}</td>
        <td >{stock.netQty}</td>
        <td> {stock.currentPrice}</td>
        <td >{stock.avgPrice}</td>
        <td >{stock.dayPl}</td>
        <td >{stock.dayPlPercentage}</td>
        <td >{stock.overallPl}</td>
        <td >{stock.overallPlPercentage}</td>
        <td >{stock.investment}</td>
    </tr>
}
