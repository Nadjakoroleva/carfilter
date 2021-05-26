import {combineReducers} from 'redux';
import { currentCarListReducer } from './currentCarListReducer';
import { sortReducer } from './sortReducer';
import { searchReducer } from './searchReducer';
import { searchPlaceReducer } from './searchPlaceReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
    soredCarList: sortReducer,
    currentCarList: currentCarListReducer,
    searchInfo: searchReducer,
    searchPlace: searchPlaceReducer,
    filterState: filterReducer
});

export type RootState = ReturnType<typeof rootReducer>;