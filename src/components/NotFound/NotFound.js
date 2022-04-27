import React, { useDebugValue } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NotFound = () => {
    return (
        <Container>
            <Content>
                <Link to="/">
                    <button>Voltar para o Início</button>
                </Link>
            </Content>
        </Container>
    );
};

export default NotFound;

const Container = styled.div`
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("https://web.rsdata.com.br/img/telas-para-sistema-nao-encontrada.png");
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1500;
`;
const Content = styled.div`
    text-align: center;
    margin-top: 200px;
    height: 200px;
    width: 150px;
    position: absolute;
    left: 49%;

    button {
        background-color: #87cefa;
        height: 40px;
        width: 170px;
        border: none;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
            background-color: black;
            color: white;
            transition: all ease .6s;
        }
    }
`;  
