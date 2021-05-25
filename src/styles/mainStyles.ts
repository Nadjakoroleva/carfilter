import styled from 'styled-components';


export const StyledMain = styled.main`
    display: flex;
`;

export const Content = styled.section`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    section {
        display: flex;
        justify-content: space-between;
    }
    p {
        align-self: center;
    }

    @media screen and (max-width: 780px) {
        section {
            display: flex;
            justify-content: flex-end;
        }
    }
`;

export const Page = styled.div`
    padding: 1rem 5rem 1rem 1rem;
`;

export const FilterAside = styled.aside`
    width: 35vw;

    @media screen and (max-width: 780px) {
        width: 10vw;
    }
`;