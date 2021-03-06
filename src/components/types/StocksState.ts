import { Stocks } from "./Stocks";

export interface StocksState extends Stocks {
    isLoading: boolean;
    error: Error | null;
    inputErrorMessage: string;
    currentPage: string
}