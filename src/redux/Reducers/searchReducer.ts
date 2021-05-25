import { IAction, ISearchState } from "../../types/interfaces";

const defaultState: ISearchState = {
    model: '',
    brand: ''
}

export const searchReducer = (state = defaultState, action: IAction): ISearchState => {
    switch(action.type) {
        case 'ADD_MODEL':
            return {...state, model: action.payload};
        case 'ADD_BRAND':
            return {...state, brand: action.payload};
        case 'CLEAR_MODEL':
            return {...state, model: ''};
        case 'CLEAR_BRAND':
            return {...state, brand: ''};
        default:
            return state;
    }
};