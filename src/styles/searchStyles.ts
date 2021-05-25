import styled from 'styled-components';


export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5rem;
    
    @media screen and (max-width: 1170px) {
        flex-direction: column;
        gap: .5rem;
    }
`;

export const SearchForm = styled.form`
    display: flex;
    margin-right: 5rem;

    @media screen and (max-width: 780px) {
        margin-right: 0;
    }
`;


