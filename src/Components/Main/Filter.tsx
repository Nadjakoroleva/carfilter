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

    const [modelFilter, setModelFilter] = useState<string>('');
    const [brandFilter, setBrandFilter] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [fuel, setFuel] = useState<string>('');
    const [bodyType, setBodyType] = useState<string>('');
    const [minPrice, setMinPrice] = useState<string>('');
    const [maxPrice, setMaxPrice] = useState<string>('');
    const [isVisible, setIsVivisible] = useState<boolean>(false);

    const dispatch = useDispatch();
    const searchInfo = useTypedSelector(state => state.searchInfo);
    const searchPlace = useTypedSelector(state => state.searchPlace);

    function handleFilterSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        if (brandFilter) dispatch({type: 'CLEAR_BRAND'});
        if (modelFilter) dispatch({type: 'CLEAR_MODEL'});
        dispatch({type: 'FILTER_CAR_LIST', payload: {
            'brandFilter': brandFilter ? brandFilter.trim() : '', 
            'modelFilter': modelFilter ? modelFilter.trim() : '', 
            'year': year ? year.trim() : '', 
            'fuel': fuel ? fuel.trim() : '', 
            'bodyType': modelFilter ? bodyType.trim() : '', 
            'minPrice': minPrice ? minPrice.trim() : '0',
            'maxPrice': maxPrice ? maxPrice.trim() : 'Infinity',
            'searchModel': searchInfo.model ? searchInfo.model.trim() : '',
            'searchBrand': searchInfo.brand ? searchInfo.brand.trim() : ''
        }});
    };

    function handleClearFilter(event: React.SyntheticEvent) {
        event.preventDefault();
        setBrandFilter('');
        setModelFilter('');
        setYear('');
        setFuel('');
        setBodyType('');
        setMinPrice('');
        setMaxPrice('');
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
            <FilterContent isVisible={isVisible}>
                <div>
                    <Text view='secondary' size='3xl'>Фильтр</Text>
                    <FilterCloseButton label='Закрыть фильтр' iconRight={IconClose} onlyIcon isVisible={isVisible} onClick={handleCloseFilterForm} size='xs'/>
                </div>
                <FilterForm onSubmit={handleFilterSubmit} >
                    <FilterTextField type="text" placeholder='Бренд' value={brandFilter} onChange={event => setBrandFilter(event.value!)}/>
                    <FilterTextField type="text" placeholder='Модель' value={modelFilter} onChange={event => setModelFilter(event.value!)}/>
                    <FilterTextField type="text" placeholder='Год' value={year} onChange={event => setYear(event.value!)}/>
                    <FilterTextField type="text" placeholder='Топливо' value={fuel} onChange={event => setFuel(event.value!)}/>
                    <FilterTextField type="text" placeholder='Кузов' value={bodyType} onChange={event => setBodyType(event.value!)}/>
                    <PriceContainer>
                        <FilterPriceField type="text" placeholder='От какой цены' value={minPrice} onChange={event => setMinPrice(event.value!)}/>
                        -
                        <FilterPriceField type="text" placeholder='До какой цены' value={maxPrice} onChange={event => setMaxPrice(event.value!)}/>
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