import { CarInfo, IAction, IState } from "../../types/interfaces";

const defaultState: IState = {
    sortedCarList: []
}

export const sortReducer = (state = defaultState, action: IAction): IState => {
    switch(action.type) {
        case 'ADD_CAR_LIST':
            return {...state, sortedCarList: action.payload};
        case 'SORT_BY_INCREASE_PRICE':
            return {...state, sortedCarList: action.payload.sort((carPrice1: CarInfo, carPrice2: CarInfo) => carPrice1.price > carPrice2.price ? 1 : -1)};
        case 'SORT_BY_REDUCE_PRICE':
            return {...state, sortedCarList: action.payload.sort((carPrice1: CarInfo, carPrice2: CarInfo) => carPrice2.price > carPrice1.price ? 1 : -1)};
        case 'SORT_BY_INCREASE_YEAR':
            return {...state, sortedCarList: action.payload.sort((carYear1: CarInfo, carYear2: CarInfo) => carYear1.year > carYear2.year ? 1 : -1)};
        case 'SORT_BY_REDUCE_YEAR':
            return {...state, sortedCarList: action.payload.sort((carYear1: CarInfo, carYear2: CarInfo) => carYear2.year > carYear1.year ? 1 : -1)};
        default:
            return state;
    }
}