import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Eggs = () => {

    return (
        <Container>
            <Title>Linha Páscoa 2022</Title>
            <Content>
                <Background>
                    <img src="/images/Linha Pascoa 2022 (1).jpeg"/>
                    <p>Brigadeiros de diversos sabores feito com caucau, nutella, cocô etc...</p>
                    <Flex>
                        <p className='price'>R$ 1,50</p>
                        <div className="button">Comprar</div>
                    </Flex>
                </Background>
                <Background>
                    <img src="/images/Linha Pascoa 2022 (2).jpeg" />
                    <p>Brigadeiros de diversos sabores feito com caucau, nutella, cocô etc...</p>
                    <Flex>
                        <p className='price'>R$ 1,50</p>
                        <div className="button">Comprar</div>
                    </Flex>
                </Background>
                <Background>
                    <img src="/images/Linha Pascoa 2022 (3).jpeg" />
                    <p>Brigadeiros de diversos sabores feito com caucau, nutella, cocô etc...</p>
                    <Flex>
                        <p className='price'>R$ 1,50</p>
                        <div className="button">Comprar</div>
                    </Flex>
                </Background>
                <Background>
                    <img src="/images/Linha Pascoa 2022 (4).jpeg" />
                    <p>Brigadeiros de diversos sabores feito com caucau, nutella, cocô etc...</p>
                    <Flex>
                        <p className='price'>R$ 1,50</p>
                        <div className="button">Comprar</div>
                    </Flex>
                </Background>
                <Background>
                    <img src="/images/Linha Pascoa 2022 (5).jpeg" />
                    <p>Brigadeiros de diversos sabores feito com caucau, nutella, cocô etc...</p>
                    <Flex>
                        <p className='price'>R$ 1,50</p>
                        <div className="button">Comprar</div>
                    </Flex>
                </Background>
                <Background>
                    <img src="/images/Linha Pascoa 2022 (6).jpeg" />
                    <p>Brigadeiros de diversos sabores feito com caucau, nutella, cocô etc...</p>
                    <Flex>
                        <p className='price'>R$ 1,50</p>
                        <div className="button">Comprar</div>
                    </Flex>
                </Background>
                <Background>
                    <img src="/images/Linha Pascoa 2022 (7).jpeg" />
                    <p>Brigadeiros de diversos sabores feito com caucau, nutella, cocô etc...</p>
                    <Flex>
                        <p className='price'>R$ 1,50</p>
                        <div className="button">Comprar</div>
                    </Flex>
                </Background>
                <Background>
                    <img src="/images/Linha Pascoa 2022 (8).jpeg" />
                    <p>Brigadeiros de diversos sabores feito com caucau, nutella, cocô etc...</p>
                    <Flex>
                        <p className='price'>R$ 1,50</p>
                        <div className="button">Comprar</div>
                    </Flex>
                </Background>
                <Background>
                    <img src="/images/Linha Pascoa 2022 (9).jpeg" />
                    <p>Brigadeiros de diversos sabores feito com caucau, nutella, cocô etc...</p>
                    <Flex>
                        <p className='price'>R$ 1,50</p>
                        <div className="button">Comprar</div>
                    </Flex>
                </Background>
                <Background>
                    <img src="/images/Linha Pascoa 2022 (10).jpeg" />
                    <p>Brigadeiros de diversos sabores feito com caucau, nutella, cocô etc...</p>
                    <Flex>
                        <p className='price'>R$ 1,50</p>
                        <div className="button">Comprar</div>
                    </Flex>
                </Background>
                <Background>
                    <img src="/images/Linha Pascoa 2022 (11).jpeg" />
                    <p>Brigadeiros de diversos sabores feito com caucau, nutella, cocô etc...</p>
                    <Flex>
                        <p className='price'>R$ 1,50</p>
                        <div className="button">Comprar</div>
                    </Flex>
                </Background>
                <Background>
                    <img src="/images/Linha Pascoa 2022 (12).jpeg" />
                    <p>Brigadeiros de diversos sabores feito com caucau, nutella, cocô etc...</p>
                    <Flex>
                        <p className='price'>R$ 1,50</p>
                        <div className="button">Comprar</div>
                    </Flex>
                </Background>
            </Content> 
            <BgImage />
        </Container>
    );
};

const Container = styled.div`
    margin-top: 50px;
`;
const Title = styled.h1`
    color: white;
    text-align: center;
    font-size: 40px;
    letter-spacing: 3px;
    word-spacing: 6px;

    @media screen and (max-width: 414px) {
        font-size: 30px;
    }
`;
const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1140px;
    margin: auto;

    @media screen and (max-width: 414px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

`;
const Background = styled.div`
    max-width: 1140px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 450px;
    width: 90%;
    margin: 40px 20px;
    background-color: white;
    border-radius: 20px;
    border: 3px solid #d98695;

    img {
        border-radius: 10px;
        margin: 20px;
        height: 190px;
        width: 190px;
    }

    
    p {
        margin: 30px;
        letter-spacing: .4px;
        line-height: 20px;
        animation-delay: .1s;
        animation-duration: 3s;
        animation-name: slidein;
    }
    @keyframes slidein {
        from {
            color: white;
        }
        to {
            color: #ffcbdb;
            opacity: 1;
        }
    }
`;

const Flex = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 5px 20px;

    .price {
        margin-left: 5px;
        color: silver;
    }

    .button  {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 20px;
        width: 20px;
        padding: 20px 50px;
        cursor: pointer;
        color: #f9f9f9;
        background-color: #d98695;
        border-radius: 20px;
        margin-left: 50px;
        animation-delay: .1s;
        animation-duration: 3s;
        animation-name: slidein;


        &:hover {
            color: black;
            background-color: #90ee90;
            transition: all ease .5s;
            font-weight: bold;
        }
    }

    @keyframes slidein {
        from {
            color: white;
            opacity: 0;
        }
        to {
            color: #ffcbdb;
            opacity: 1;
        }
    }
`;
const ShopFinish = styled.div`
    display: ${e => e.active ? 'flex' : 'none'};
    align-items: flex-start;
    justify-content: flex-end;
    animation-name: slide;
    animation-duration: 2s;
    animation-delay: .2s;

    @keyframes slide {
        from {  
            opacity: 0;
            transition: 2s;
        }
        to {
            opacity: 1;
            transition: all ease 2s;
        }
    }
`;
const CenterShop = styled.div`
    height: 800px;
    width: 400px;
    margin-right: 20px;
    margin-top: 20px;
    border-radius: 20px;
    background-color: #d98695;
    text-align: center;

    div {
        
    }
`;
const BgImage = styled.div`
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://platformuploads.s3.amazonaws.com/media/14135/14350/16161061634348462.jpg?AWSAccessKeyId=AKIAJOIWZCRTROUA2YMQ&Signature=a1HuUfUxcJ8B20a%2BSBukLdVObsk%3D&Expires=1978824353");
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
`;

export default Eggs;
