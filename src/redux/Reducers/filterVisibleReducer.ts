import { IAction } from "../../types/interfaces";

const defaultState: {isVisible: boolean} = {
    isVisible: false
}

export const filterVisibleReducer = (state = defaultState, action: IAction): {isVisible: boolean}  => {
    switch(action.type) {
        case 'OPEN_FILTER':
            return {...state, isVisible: true};
        case 'CLOSE_FILTER':
            return {...state, isVisible: false};
        default:
            return state;
    }
};