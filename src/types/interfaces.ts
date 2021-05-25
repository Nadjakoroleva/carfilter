export interface CarInfo {
    logo: string,
    brand: string,   
    model: string, 
    year: number,   
    fuel: string,   
    bodyType: string,
    price: number
}

export interface IAction {
    type: string,
    payload: any
}

export interface IState {
    sortedCarList?: Array<CarInfo>,
    currentCarList?: Array<CarInfo>
}

export interface ISearchState {
    model: string,
    brand: string
}

export interface ISearchPlace {
    inFilter: boolean
}