import axios from 'axios';
import { AxiosPromise, AxiosError } from 'axios';

export enum HttpResponseTypes {
    OK = 1,
    Error =  2
}

export interface IHttpResponseItem<T> {
    type: HttpResponseTypes;
    payload?: T[] ;
    Error?: AxiosError;
}

export function GetStockPrice<T>(ticket: string) : Promise<IHttpResponseItem<T>> {
    let key = 'AIzaSyABDmm3x6LCQohwMZ7rp4FlyCuXHUIZ4gY';
    let url = `https://www.google.com/finance/info?q=NASDAQ:${ticket}&key=${key}`;

    return new Promise((resolve, reject) => {
        axios.get(url).then((response) => {
            resolve(<IHttpResponseItem<T>>{ type: HttpResponseTypes.OK, payload: JSON.parse((response.data as string).substr(3)) });
        }).catch((error) => {
            resolve(<IHttpResponseItem<T>>{ type: HttpResponseTypes.OK, Error: error });
            });

    });

   

}