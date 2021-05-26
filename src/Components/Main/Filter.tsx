import React, {useState} from 'react';
import { Button } from '@consta/uikit/Button';
import {FilterTextField, FilterForm, BigFilterButton, SmallFilterButton, FilterButton, FilterCloseButton, FilterContent, FilterPriceField, PriceContainer} from '../../styles/filterStyles';
import {IconSortDownCenter} from '@consta/uikit/IconSortDownCenter';
import {IconFunnel} from '@consta/uikit/IconFunnel';
import {IconClose} from '@consta/uikit/IconClose';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { carsList } from '../../Cars/carsList';
import { Text } from '@consta/uikit/Text';

const Filter: React.FC<{Search: React.FC}> = ({Search}) => {

    

    const dispatch = useDispatch();
    const searchInfo = useTypedSelector(state => state.searchInfo);
    const searchPlace = useTypedSelector(state => state.searchPlace);
    const filterState = useTypedSelector(state => state.filterState);
    const filterVisible = useTypedSelector(state => state.filterVisible).isVisible;

    function handleFilterSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        if (isNaN(+filterState.year) || isNaN(+filterState.minPrice) || isNaN(+filterState.maxPrice)) {
            alert('Введите числовые значения в поля год/цена: от/цена: до');
            return;
        };
        dispatch({type: 'FILTER_CAR_LIST', payload: {
            'brandFilter': filterState.brandFilter ? filterState.brandFilter.trim() : '', 
            'modelFilter': filterState.modelFilter ? filterState.modelFilter.trim() : '', 
            'year': filterState.year ? filterState.year.trim() : '', 
            'fuel': filterState.fuel ? filterState.fuel.trim() : '', 
            'bodyType': filterState.bodyType ? filterState.bodyType.trim() : '', 
            'minPrice': filterState.minPrice ? filterState.minPrice.trim() : '0',
            'maxPrice': filterState.maxPrice ? filterState.maxPrice.trim() : 'Infinity',
            'searchModel': searchInfo.model ? searchInfo.model.trim() : '',
            'searchBrand': searchInfo.brand ? searchInfo.brand.trim() : ''
        }});
        dispatch({type: 'CLOSE_FILTER'});
    };

    function handleClearFilter(event: React.SyntheticEvent) {
        event.preventDefault();
        dispatch({type: 'CLEAR_FILTER'});
        dispatch({type: 'CLEAR_MODEL'});
        dispatch({type: 'CLEAR_BRAND'});
        dispatch({type: 'SORT_BY_REDUCE_YEAR', payload: carsList});
        dispatch({type: 'CLOSE_FILTER'});
    }

    function handleOpenFilterForm() {
        dispatch({type: 'OPEN_FILTER'});
    }

    function handleCloseFilterForm() {
        dispatch({type: 'CLOSE_FILTER'});
    }

    return (
        <>
            <FilterButton label='Фильтр' iconRight={IconFunnel} onlyIcon onClick={handleOpenFilterForm} isVisible={filterVisible}/>
            <FilterContent isVisible={filterVisible}>
                <div>
                    <Text view='secondary' size='3xl'>Фильтр</Text>
                    <FilterCloseButton label='Закрыть фильтр' iconRight={IconClose} onlyIcon isVisible={filterVisible} onClick={handleCloseFilterForm} size='xs'/>
                </div>
                <FilterForm onSubmit={handleFilterSubmit} >
                    <FilterTextField type="text" placeholder='Бренд' value={filterState.brandFilter} onChange={event => dispatch({type: 'FILTER_BRAND', payload: event.value!})}/>
                    <FilterTextField type="text" placeholder='Модель' value={filterState.modelFilter} onChange={event => dispatch({type: 'FILTER_MODEL', payload: event.value!})}/>
                    <FilterTextField type="text" placeholder='Год' value={filterState.year} onChange={event => dispatch({type: 'FILTER_YEAR', payload: event.value!})}/>
                    <FilterTextField type="text" placeholder='Топливо' value={filterState.fuel} onChange={event => dispatch({type: 'FILTER_FUEL', payload: event.value!})}/>
                    <FilterTextField type="text" placeholder='Кузов' value={filterState.bodyType} onChange={event => dispatch({type: 'FILTER_BODYTYPE', payload: event.value!})}/>
                    <PriceContainer>
                        <FilterPriceField type="text" placeholder='Цена: от' value={filterState.minPrice} onChange={event => dispatch({type: 'FILTER_MINPRICE', payload: event.value!})}/>
                        -
                        <FilterPriceField type="text" placeholder='Цена: до' value={filterState.maxPrice} onChange={event => dispatch({type: 'FILTER_MAXPRICE', payload: event.value!})}/>
                    </PriceContainer>
                    <Button type="submit" label='Фильтр' iconRight={IconSortDownCenter}/>
                    <BigFilterButton label='Очистить фильтр и строки поиска' view='secondary' onClick={handleClearFilter}/>
                    <SmallFilterButton label='Очистить все поля' view='secondary' onClick={handleClearFilter}/>
                </FilterForm>
                {searchPlace.inFilter ? <Search /> : null}
            </FilterContent>
        </>
    );
};

export default Filter;