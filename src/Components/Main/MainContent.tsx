import React from 'react';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Search from './Search';
import SortSelect from './SortSelect';
import CarCard from './CarCard';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Content } from '../../styles/mainStyles';
import { Text } from '@consta/uikit/Text';

const MainContent: React.FC = () => {

    const currentCarList = useTypedSelector(state => state.currentCarList).currentCarList;
    const searchPlace = useTypedSelector(state => state.searchPlace);

    return (
        <Content>
            <section>
                {!searchPlace.inFilter ? <Search /> : null}
                <SortSelect />
            </section>
            { 
            (currentCarList && currentCarList.length > 0) ? 
                <Grid cols='1' gap='xs' rowGap='xl' breakpoints={{
                            m: {
                                cols: 1
                            },
                            l: {
                                cols: 2
                            },
                            xl: {
                                cols: 3
                            },
                }}>
                    
                    {
                        currentCarList.map((car, i) => 
                            <GridItem key={i.toString()}>
                                <CarCard car={car}/>
                            </GridItem>)
                    }
                
                </Grid>  : <Text view='alert' as='p' >Ничего не найдено</Text>}
        </Content>
    );
};

export default MainContent;
