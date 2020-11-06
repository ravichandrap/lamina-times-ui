
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
    dayPl:number,
    dayPlPercentage:number,
    overallPl:number,
    overallPlPercentage:number,
    investment:number,
    links: Links[]
}

interface Links {
    rel:string;
    href:string
}