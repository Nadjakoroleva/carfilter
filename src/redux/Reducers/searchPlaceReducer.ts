import { IAction, ISearchPlace } from "../../types/interfaces";

const defaultState: ISearchPlace  = {
    inFilter: false
}

export const searchPlaceReducer = (state = defaultState, action: IAction): ISearchPlace  => {
    switch(action.type) {
        case 'IN_FILTER':
            return {...state, inFilter: true};
        case 'IN_HEADER':
            return {...state, inFilter: false};
        default:
            return state;
    }
};