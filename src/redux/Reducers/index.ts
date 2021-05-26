import {combineReducers} from 'redux';
import { currentCarListReducer } from './currentCarListReducer';
import { sortReducer } from './sortReducer';
import { searchReducer } from './searchReducer';
import { searchPlaceReducer } from './searchPlaceReducer';
import { filterReducer } from './filterReducer';
import { filterVisibleReducer } from './filterVisibleReducer';

export const rootReducer = combineReducers({
    soredCarList: sortReducer,
    currentCarList: currentCarListReducer,
    searchInfo: searchReducer,
    searchPlace: searchPlaceReducer,
    filterState: filterReducer,
    filterVisible: filterVisibleReducer
});

export type RootState = ReturnType<typeof rootReducer>;