import styled from 'styled-components';
import { TextField } from '@consta/uikit/TextField';
import {Button} from '@consta/uikit/Button';

export const FilterTextField = styled(TextField)`
    padding: 0;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid blue;

    @media screen and (max-width: 780px) {
        padding: .3rem;
    }
`;

export const FilterPriceField = styled(TextField)`
    padding: 0;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid blue;

    @media screen and (max-width: 780px) {
        padding: .3rem;
    }
`;

export const PriceContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const FilterForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-right: 5rem;
    order: 2
`;

export const FilterContent = styled.div<{isVisible: boolean}>`
    @media screen and (max-width: 780px) {
        display: ${props => props.isVisible ? 'flex' : 'none'};
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        section {
            order: 1;
            align-self: flex-start;
            margin: 0;
        }
        position: fixed;
        z-index: 5;
        padding: 1rem;
        background-color: #2caee8;
    }
`;

export const BigFilterButton = styled(Button)`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 998px) {
        display: none;
    }
`;

export const SmallFilterButton = styled(Button)`
    display: none;

    @media screen and (max-width: 998px) {
        display: flex;
        justify-content: center;
    }
`;

export const FilterButton = styled(Button)<{isVisible: boolean}>`
    display: none;

    @media screen and (max-width: 780px) {
        display: ${props => !props.isVisible ? 'flex' : 'none'};
        justify-content: center;
    }
`;

export const FilterCloseButton = styled(Button)<{isVisible: boolean}>`
    display: none;

    @media screen and (max-width: 780px) {
        display: ${props => props.isVisible ? 'flex' : 'none'};
        justify-content: center;
    }
`;