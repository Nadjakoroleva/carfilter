import { IAction, IFilterState } from "../../types/interfaces";

const defaultState: IFilterState = {
    brandFilter: '',
    modelFilter: '',
    year: '',
    fuel: '',
    bodyType: '',
    minPrice: '',
    maxPrice: ''
}

export const filterReducer = (state = defaultState, action: IAction): IFilterState => {
    switch(action.type) {
        case 'FILTER_BRAND':
            return {...state, brandFilter: action.payload};
        case 'FILTER_MODEL':
            return {...state, modelFilter: action.payload};
        case 'FILTER_YEAR':
            return {...state, year: action.payload};
        case 'FILTER_FUEL':
            return {...state, fuel: action.payload};
        case 'FILTER_BODYTYPE':
            return {...state, bodyType: action.payload};
        case 'FILTER_MINPRICE':
            return {...state, minPrice: action.payload};
        case 'FILTER_MAXPRICE':
            return {...state, maxPrice: action.payload};
        case 'CLEAR_FILTER':
            return {...state, 
                brandFilter: '',
                modelFilter: '',
                year: '',
                fuel: '',
                bodyType: '',
                minPrice: '',
                maxPrice: ''
            };
        default:
            return state;
    }
};