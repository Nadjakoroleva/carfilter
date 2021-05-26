import { carsList } from "../../Cars/carsList";
import { CarInfo, IAction, IState } from "../../types/interfaces";

const defaultState: IState = {
    currentCarList: [],
    selectState: 'SORT_BY_REDUCE_YEAR'
}

const myFilter = (arr: Array<CarInfo>, action: any) => {
    return (
        arr.filter(car => 
            { 
                return (
                    (action.payload.brandFilter ? car.brand.toUpperCase().includes(action.payload.brandFilter.toUpperCase()) : true) && 
                    (action.payload.modelFilter ? car.model.toUpperCase().includes(action.payload.modelFilter.toUpperCase()) : true) && 
                    (action.payload.year ? car.year === +action.payload.year : true) && 
                    (action.payload.fuel ? car.fuel.toUpperCase().includes(action.payload.fuel.toUpperCase()) : true) && 
                    (action.payload.bodyType ? car.bodyType.toUpperCase().includes(action.payload.bodyType.toUpperCase()) : true) && 
                    (action.payload.minPrice && action.payload.maxPrice ? (car.price >= +action.payload.minPrice) && (car.price <= +action.payload.maxPrice) 
                        : action.payload.minPrice ? car.price >= +action.payload.minPrice 
                            : action.payload.maxPrice ? car.price <= +action.payload.maxPrice 
                                : true)
                );
            })
    )
}


export const currentCarListReducer = (state = defaultState, action: IAction): IState => {
    switch(action.type) {
        case 'ADD_CURRENT_CAR_LIST':
            return {...state, currentCarList: action.payload};
        case 'FILTER_CAR_LIST':
            return {...state, currentCarList: ((!action.payload.searchModel && !action.payload.searchBrand ) || state.currentCarList!.length === 0) ? myFilter(carsList, action) : myFilter(state.currentCarList!, action)};
        case 'FILTER_BY_MODEL':
            return {...state, currentCarList: 
                action.payload.brand ? state.currentCarList!.filter(car => car.model.toUpperCase().includes(action.payload.model.toUpperCase())) 
                                     : carsList.filter(car => car.model.toUpperCase().includes(action.payload.model.toUpperCase()))
            };
        case 'FILTER_BY_BRAND':
            return {...state, currentCarList: 
                action.payload.model ? state.currentCarList!.filter(car => car.brand.toUpperCase().includes(action.payload.brand.toUpperCase())) 
                                     : carsList.filter(car => car.brand.toUpperCase().includes(action.payload.brand.toUpperCase()))
            };
        case 'CHANGE_SELECT_STATE':
            return {...state, selectState: action.payload};
        default:
            return state;
    }
}