import React, {useState} from 'react';
import { Button } from '@consta/uikit/Button';
import {FilterTextField, FilterForm, BigFilterButton, SmallFilterButton, FilterButton, FilterCloseButton} from '../../styles/filterStyles';
import {IconSortDownCenter} from '@consta/uikit/IconSortDownCenter';
import {IconFunnel} from '@consta/uikit/IconFunnel';
import {IconClose} from '@consta/uikit/IconClose';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { carsList } from '../../Cars/carsList';
import { Text } from '@consta/uikit/Text';

const Filter: React.FC<{Search: React.FC}> = ({Search}) => {

    const [modelFilter, setModelFilter] = useState<string>('');
    const [brandFilter, setBrandFilter] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [fuel, setFuel] = useState<string>('');
    const [bodyType, setBodyType] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [isVisible, setIsVivisible] = useState<boolean>(false);

    const dispatch = useDispatch();
    const currentCarListReducer = useTypedSelector(state => state.currentCarList);
    const searchInfo = useTypedSelector(state => state.searchInfo);
    const searchPlace = useTypedSelector(state => state.searchPlace);

    function handleFilterSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        dispatch({type: 'FILTER_CAR_LIST', payload: {
            'brandFilter': brandFilter, 
            'modelFilter': modelFilter, 
            'year': year, 
            'fuel': fuel, 
            'bodyType': bodyType, 
            'price': price,
            'searchModel': searchInfo.model,
            'searchBrand': searchInfo.brand
        }});
       
    };

    function handleClearFilter(event: React.SyntheticEvent) {
        event.preventDefault();
        setBrandFilter('');
        setModelFilter('');
        setYear('');
        setFuel('');
        setBodyType('');
        setPrice('');
        dispatch({type: 'CLEAR_MODEL'});
        dispatch({type: 'CLEAR_BRAND'});
        dispatch({type: 'SORT_BY_REDUCE_YEAR', payload: carsList});
    }

    function handleOpenFilterForm() {
        setIsVivisible(true);
    }

    function handleCloseFilterForm() {
        setIsVivisible(false);
    }

    return (
        <>
        <FilterButton label='Фильтр' iconRight={IconFunnel} onlyIcon onClick={handleOpenFilterForm} isVisible={isVisible}/>
        <FilterForm onSubmit={handleFilterSubmit} isVisible={isVisible}>
            <div>
                <Text view='secondary' size='3xl'>Фильтр</Text>
                <FilterCloseButton label='Закрыть фильтр' iconRight={IconClose} onlyIcon isVisible={isVisible} onClick={handleCloseFilterForm} size='xs'/>
            </div>
            <FilterTextField id='brand' type="text" placeholder='Бренд' value={brandFilter} onChange={event => setBrandFilter(event.value!)}/>
            <FilterTextField id='model' type="text" placeholder='Модель' value={modelFilter} onChange={event => setModelFilter(event.value!)}/>
            <FilterTextField id='year' type="text" placeholder='Год' value={year} onChange={event => setYear(event.value!)}/>
            <FilterTextField id='fuel' type="text" placeholder='Топливо' value={fuel} onChange={event => setFuel(event.value!)}/>
            <FilterTextField id='bodyType' type="text" placeholder='Кузов' value={bodyType} onChange={event => setBodyType(event.value!)}/>
            <FilterTextField id='price' type="text" placeholder='Цена' value={price} onChange={event => setPrice(event.value!)}/>
            {searchPlace.inFilter ? <Search /> : null}
            <Button type="submit" label='Фильтр' iconRight={IconSortDownCenter}/>
            <BigFilterButton label='Очистить фильтр и строки поиска' view='secondary' onClick={handleClearFilter}/>
            <SmallFilterButton label='Очистить фильтр' view='secondary' onClick={handleClearFilter}/>
        </FilterForm>
        </>
    );
};

export default Filter;