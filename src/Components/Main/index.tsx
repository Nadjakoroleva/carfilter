import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { carsList } from '../../Cars/carsList';
import { FilterAside, StyledMain} from '../../styles/mainStyles';
import Filter from './Filter';
import MainContent from './MainContent';
import Search from './Search';

const Main: React.FC = () => {
    
    const dispatch = useDispatch();
    const sortedCarList = useTypedSelector(state => state.soredCarList);
    const currentCarList = useTypedSelector(state => state.currentCarList).currentCarList;
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

    function handleResizeWindow() {
        setWindowSize(window.innerWidth);
    }

    useEffect(() => {
        dispatch({type: 'ADD_CURRENT_CAR_LIST', payload: carsList.sort((carYear1, carYear2) => carYear2.year > carYear1.year ? 1 : -1)})
        dispatch({type: 'ADD_CAR_LIST', payload: currentCarList});
        window.addEventListener('resize', handleResizeWindow);
        return () => window.removeEventListener('resize', handleResizeWindow);
    }, []);

   useEffect(() => {
        if (sortedCarList.sortedCarList!?.length > 0) {
            dispatch({type: 'ADD_CURRENT_CAR_LIST', payload: sortedCarList.sortedCarList!});
            
        };
    }, [sortedCarList]);

    useEffect(() => {
        dispatch({type: 'CHANGE_SELECT_STATE', payload: 'SORT_BY_REDUCE_YEAR'});
        dispatch({type: 'SORT_BY_REDUCE_YEAR', payload: currentCarList})
    }, [currentCarList])

    useEffect(() => {
        if (windowSize < 780) {
            dispatch({type: 'IN_FILTER'});
        } else  dispatch({type: 'IN_HEADER'});
    }, [windowSize])
    
    return (
        <StyledMain> 
            <FilterAside>
                <Filter Search={Search}/> 
            </FilterAside>
            <MainContent />
        </StyledMain>
    );
};

export default Main;