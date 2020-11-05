import React, {FC, useEffect} from 'react';
import { LaminaInfo } from './LaminaInfo/LaminaInfo';
import {useStocks} from './hooks/useStocks/useStocks'
export const LaminaHome:FC = () => {
    const stockScheme = useStocks();
  
    useEffect(()=>{
        stockScheme.fetchStocks(10);
    },[])
    
    return <div>
        <h1>Lamina Home</h1>
        <LaminaInfo stockScheme={stockScheme}/>
    </div>
}