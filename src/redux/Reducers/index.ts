import {combineReducers} from 'redux';
import { currentCarListReducer } from './currentCarListReducer';
import { sortReducer } from './sortReducer';
import { searchReducer } from './searchReducer';
import { searchPlaceReducer } from './searchPlaceReducer';

export const rootReducer = combineReducers({
    soredCarList: sortReducer,
    currentCarList: currentCarListReducer,
    searchInfo: searchReducer,
    searchPlace: searchPlaceReducer
});

export type RootState = ReturnType<typeof rootReducer>;