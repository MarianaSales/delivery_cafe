import styled from 'styled-components';

export const CoffeeDisplayContainer = styled.section`
    margin-top: 2rem;
    position: absolute;
    height: 42px;
    top: 690px;
    width: 100%;
    display: grid;
    left: 0px;
    right: 0px;
`;

export const CoffeeDisplayList = styled.div`
    width: 1120px;
    height: 1360px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 3.5rem;
    left: calc(50% - 1120px / 2);
    top: 128px;
`;
