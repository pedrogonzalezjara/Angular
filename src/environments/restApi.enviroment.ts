import * as data from '../assets/restApi.json';

let config: any;
config = {
    production: true
};

let dataFinal: any;

if (config.production) {
    dataFinal = (<any>window['restApi']);
} else {
    dataFinal = (<any>data);
}

export const restApi = dataFinal;
