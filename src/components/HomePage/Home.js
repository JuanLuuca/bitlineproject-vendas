import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container>
            <Title>
                <Content>
                    <h1>Ovos de colher, Bolos e Brigadeiros.</h1>
                    <p>Todos os tipos de Variedades e Sabores</p>
                    <Link to="/sweets">
                        <button>Saiba Mais</button>
                    </Link>
                </Content>
            </Title>
            <BgImage />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;
const Title = styled.div`
    max-width: 1140px;
    margin: auto;
`;
const Content = styled.div`
    max-width: 1140px;
    margin: auto;
    text-align: center;
    animation-name: slide;
    animation-duration: 5s;
    animation-delay: .2s;

    h1 {
        font-size: 50px;
        color: #f5f5f5;
        margin-bottom: 30px;
    }

    p {
        font-size: 25px;
        color: #ffcbdb;
    }

    button {
        font-size: 15px;
        height: 35px;
        width: 25%;
        margin-top: 30px;
        border-radius: 10px;
        border: none;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            color: white;
            background-color: #d98695;
            transition: all ease-in-out 0.6s;
        }
    }
    
    @keyframes slide {
        from {
            color: white;
            opacity: 0;
            transition: 2s;
        }
        to {
            color: #ffcbdb; 
        }
    }
`; 
const BgImage = styled.div`
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url("/images/Quarteto-de-Ovos.jpg");
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
`;
