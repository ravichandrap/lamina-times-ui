
export interface Stock {
    id: number;
    userId: number;
    active: number;
    name: string;
    symbol: string;
    date: Date;
    netQty: number;
    avgPrice: number;
    ltp: number;
    currentPrice: number;
}