import styled from 'styled-components';


export const CarLogo = styled.img`
    max-width: 10vw;
    height: 4.8rem;
    margin-right: 1rem;;
`;

export const Info = styled.ul`
    display: flex;
    flex-direction: column;
    gap: .5rem;  
`;

export const CarContainer = styled.div`
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0px 4px 9px #2e60c8;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 27vh;
    
    @media screen and (max-width: 780px) {
        min-width: 70vw;
        img {
            max-width: 30vw;
        }
    }

    @media screen and (max-width: 1021px) {
        width: 35vw;
        img {
            max-width: 30vw;
        }
    }

    
`;