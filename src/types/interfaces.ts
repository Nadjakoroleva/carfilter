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
    currentCarList?: Array<CarInfo>,
    selectState?: string
}

export interface ISearchState {
    model: string,
    brand: string
}

export interface ISearchPlace {
    inFilter: boolean
}

export interface IFilterState {
    brandFilter: string,
    modelFilter: string,
    year: string,
    fuel: string,
    bodyType: string,
    minPrice: string,
    maxPrice: string
}