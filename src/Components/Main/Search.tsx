import React from 'react'; 
import { Button } from '@consta/uikit/Button';
import { TextField } from '@consta/uikit/TextField';
import {SearchContainer, SearchForm} from '../../styles/searchStyles';
import { IconSearch} from '@consta/uikit/IconSearch';
import { useDispatch } from 'react-redux';
import { carsList } from '../../Cars/carsList';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Search: React.FC = () => {

    const dispatch = useDispatch();
    const searchInfo = useTypedSelector(state => state.searchInfo);

    function handleSearchSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        dispatch({type: 'CLEAR_FILTER'});
        if (searchInfo.model) {
            dispatch({type: 'FILTER_BY_MODEL', payload: {model: searchInfo.model ? searchInfo.model.trim() : '', brand: searchInfo.brand ? searchInfo.brand.trim() : ''}});
        } else if (searchInfo.brand) {
            dispatch({type: 'FILTER_BY_BRAND', payload: {model: searchInfo.model ? searchInfo.model.trim() : '', brand: searchInfo.brand ? searchInfo.brand.trim() : ''}});
        } else {
            dispatch({type: 'ADD_CURRENT_CAR_LIST', payload: carsList});
        };
        dispatch({type: 'CLOSE_FILTER'});
    };

    return (
        <SearchContainer>
            <SearchForm onSubmit={handleSearchSubmit}>
                <TextField id='1' type='text' placeholder='Поиск по бренду' form='roundClear' value={searchInfo.brand} onChange={event => dispatch({type: 'ADD_BRAND', payload: event.value!})} />
                <Button iconLeft={IconSearch} form='brickRound' onlyIcon/>
            </SearchForm>
            <SearchForm onSubmit={handleSearchSubmit}>
                <TextField id='2' type='text' placeholder='Поиск по модели' form='roundClear' value={searchInfo.model} onChange={event => dispatch({type: 'ADD_MODEL', payload: event.value!})}/>
                <Button iconLeft={IconSearch} form='brickRound' onlyIcon/>  
            </SearchForm>
        </SearchContainer>
    );
};

export default Search;