import styled, { css } from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    margin: 10% auto;
    justify-content: center;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 10px;

    @media(max-width: 700px) {
        grid-template-columns: 1fr;
        margin: 10% auto;
    }
`;

export const Converter = styled.section`
    padding: 20px;
    display: grid;
    align-content: center;
    border-radius: 10px;
    background-color: rgba(34, 34, 34, 0.85);
    color: white;
    transition: 0.3s;

    -webkit-box-shadow: 0px 0px 31px 11px rgb(0, 0, 0);
    -moz-box-shadow: 0px 0px 31px 11px rgba(0, 0, 0);
    box-shadow: 0px 0px 31px 11px rgba(0, 0, 0);

    ${({ light }) => light && css`
        padding: 20px;
        display: grid;
        align-content: center;
        border-radius: 10px;
        background-color: hsla(0, 0%, 80%, 0.85);
        color: rgb(0, 0, 0);
        transition: 0.3s;

        -webkit-box-shadow: 0px 0px 31px 11px rgb(0, 0, 0);
        -moz-box-shadow: 0px 0px 31px 11px rgba(0, 0, 0);
        box-shadow: 0px 0px 31px 11px rgba(0, 0, 0);
    `}
`;

export const Aside = styled.section`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: rgba(34, 34, 34, 0.90);
    color: white;
    transition: 0.3s;

    -webkit-box-shadow: 30px 0px 68px 5px rgba(0, 0, 0, 1);
    -moz-box-shadow: 30px 0px 68px 5px rgba(0, 0, 0, 1);
    box-shadow: 30px 0px 68px 5px rgba(0, 0, 0, 1);

    @media(max-width: 700px) {
        grid-row-start: 1;
        height: 100px;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        text-align: center;
        padding: 20;

        -webkit-box-shadow: 0px -30px 68px 5px rgb(0, 0, 0);
        -moz-box-shadow: 0px -30px 68px 5px rgb(0, 0, 0);
        box-shadow: 0px -30px 68px 5px rgb(0, 0, 0);
    }

    ${({ light }) => light && css`
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        background-color: hsla(0, 0%, 80%, 0.85);
        color: rgb(0, 0, 0);
        transition: 0.3s;

        -webkit-box-shadow: 30px 0px 68px 5px rgba(0, 0, 0, 1);
        -moz-box-shadow: 30px 0px 68px 5px rgba(0, 0, 0, 1);
        box-shadow: 30px 0px 68px 5px rgba(0, 0, 0, 1);
    `}
`;

export const ResultSection = styled.section`
    background-color: rgba(34, 34, 34, 0.90);
    color: white;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    font-size: 30px;
    letter-spacing: 3px;
    grid-column-start: 1;
    grid-column-end: 3;
    transition: 0.3s;

    -webkit-box-shadow: 0px 30px 68px 5px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 30px 68px 5px rgba(66, 68, 90, 1);
    box-shadow: 0px 30px 68px 5px rgb(0, 0, 0);

    @media(max-width: 700px) {
        font-size: 23px;
        grid-column-start: 1;
        grid-column-end: 1;

        -webkit-box-shadow: 0px 30px 68px 5px rgba(0, 0, 0, 1);
        -moz-box-shadow: 0px 30px 68px 5px rgba(0, 0, 0, 1);
        box-shadow: 0px 30px 68px 5px rgba(0, 0, 0, 1);
    }

    ${({ light }) => light && css`
        background-color: hsla(0, 0%, 80%, 0.85);
        color: rgb(0, 0, 0);
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        font-size: 30px;
        letter-spacing: 3px;
        grid-column-start: 1;
        grid-column-end: 3;
        transition: 0.3s;

        -webkit-box-shadow: 0px 30px 68px 5px rgb(0, 0, 0);
        -moz-box-shadow: 0px 30px 68px 5px rgb(0, 0, 0);
        box-shadow: 0px 30px 68px 5px rgb(0, 0, 0);
    `}
`;