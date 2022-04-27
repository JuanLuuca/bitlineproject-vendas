import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const AboutUs = () => {

    return (
        <Container>
            <Title>SOBRE NÓS</Title>
            <SubTitle id="about">INÍCIO</SubTitle>
            <Content>
                <AboutArea>
                    <p>Estamos dando início a
                        uma nova fase nas nossas vidas, a bitline é uma loja de duas amigas sonhadoras, que desde o ensino médio falam em abrir algo juntas e depois de passados anos finalmente o projeto saiu do papel e está se tornando realidade.
                        Esperamos que sintam-se acolhidos em nosso perfil e amem os nossos doces que são feitos com muito amor e carinho, para que vocês possam se sentir felizes onde quer que estejam com a bitline sweet's.<br/>
                        Curiosidades:<br/>
                        • Estamos desde 2017 tentando pôr o projeto fora do papel<br/>
                        • Bitline lê-se (bítilaine) o resto vocês já sabem<br/>
                        • Bit é intolerante à lactose e Line é viciada em doces, Line passa mal de tanto comer doce pra não deixar a bit passar mal sozinha!!!
                    </p>
                </AboutArea>
            </Content>
            <Title>QUEM SOMOS</Title>
            <SubTitle id="about">TIME</SubTitle>
            <Background>
                <SlideArea>
                    <img src="/images/alinne-foto3.jpeg" alt="alinne"/>
                    <p className="name">Alinne Monteiro</p>
                    <p className="description">Fundadora</p>
                    <SocialMedia>
                        <a href="https://www.instagram.com/alinne_fsm/"><img className="media" src="/images/instagram.png" /></a>
                        <img className="media" src="/images/facebook.png" />
                        <img className="media" src="/images/linkedin.png" />
                    </SocialMedia>
                </SlideArea>
                <SlideArea>
                    <img src="/images/vitoria-foto.jpg" alt="alinne"/>
                    <p className="name">Vitória Monteiro</p>
                    <p className="description">Fundadora</p>
                    <SocialMedia>
                        <img className="media" src="/images/instagram.png" />
                        <img className="media" src="/images/facebook.png" />
                        <img className="media" src="/images/linkedin.png" />
                    </SocialMedia>
                </SlideArea>
            </Background>
            <BgImage />
        </Container>
    );
};

const Container = styled.div`
    margin-top: 50px;
`;
const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    text-align: center;
    font-size: 30px;
    letter-spacing: 3px;
    word-spacing: 6px;

    @media screen and (max-width: 414px) {
        font-size: 25px;
    }
`;
const SubTitle = styled.p`
    font-size: 12px;
    margin-top: 12px;
    color: black;
    text-align: center;
`;
const Content = styled.div`
    max-width: 1140px;
    margin: auto;
`;
const AboutArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 110%;
    background-color: white;
    margin: 30px -10px;
    border-radius: 15px;
    border: 1px solid #d98695;
    box-shadow: 1px 3px 15px -3px #000000;

    @media screen and (max-width: 414px) {
        height: 400px;
        width: 95%;
        margin: 40px 0px;
        margin-left: 10px
    }

    p {
        margin-bottom: 20px;
        line-height: 30px;
        margin-left: 15px;
        color: #d98695;
        font-size: 16px;
        font-family: 'QuickSand';

        @media screen and (max-width: 414px) {
            font-size: 10px;
            margin-right: 10px
        }
    }

`;
const Background = styled.div`
    max-width: 1140px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 414px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`;
const SlideArea = styled.div`
    height: 370px;
    width: 320px;
    background-color: white;
    margin: 40px 70px;
    border-radius: 7px; 
    box-shadow: 1px 3px 15px -3px #000000;
    border: 1px solid #d98695;

    img {
        height: 150px;
        width: 150px;
        border-radius: 100%;
        margin: 25px;
    }
    .name {
        color: black;
        font-size: 20px;
        font-weight: 600;
    }
    .description {
        color: silver;
    }
`;
const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px;

    .media {
        height: 32px;
        width: 32px;
    }
`;
const BgImage = styled.div`
    height: 100%;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    background-image: url("/images/background-bitline.jpeg");
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
`;

export default AboutUs;
