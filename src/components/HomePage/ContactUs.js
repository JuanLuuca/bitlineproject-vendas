import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const ContactUs = () => {

    return (
        <Container>
            <AreaText>
                <h1>Compre Conosco</h1>
                <p><strong>Precisa de encomenda de doces, bolos ou quer um docinho a pronta entrega ?</strong> <br/>Nos contate por meio de uma de nossas redes sociais ou nos mande um email, teremos o prazer de te responder!! <br/>Bitline's sweets</p>
            </AreaText>
            <AreaBox>
                <InputArea>
                    <p className="nameinput">Primeiro nome</p>
                    <input type="text" />
                    <p className="nameinput">Segundo nome</p>
                    <input type="text" />
                    <p className="nameemail">Email</p>
                    <input type="email" />
                    <p className="nameinput">Quer nós deixar um comentario?</p>
                    <textarea></textarea>
                    <AreaSend>
                        <div className="button">Enviar</div>
                        <AreaMidea>
                            <img src="/images/whatsapp.png" alt="wpp" />
                            <a href="https://www.instagram.com/bitline.sweets/"><img className="media" src="/images/instagram.png" /></a>
                        </AreaMidea>
                    </AreaSend>
                </InputArea>
            </AreaBox>
            <BgImage />
        </Container>
    );
};

const Container = styled.div`
    padding: 160px 20px;
    max-width: 1140px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 414px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`;
const AreaText = styled.div`
    margin-bottom: 140px;
    margin-right: 80px;

    @media screen and (max-width: 414px) {
        margin-bottom: 140px;
        margin-right: 0px;
    }

    h1 {
        font-size: 55px;
        font-family: 'Roboto';
        font-weight: 600;
        margin-bottom: 20px;
        color: #d98695;

        @media screen and (max-width: 414px) {
            font-size: 45px;
        }
    }
    p {
        font-family: 'Roboto';
        font-weight: 500;
        word-spacing: 2px;
        line-height: 26px;
        font-size: 20px;
        color: silver;

        strong {
            font-family: 'Roboto';
            font-weight: 500;
            color: #f9f9f9;
        }
    }
`;
const AreaBox = styled.div`
    height: 520px;
    width: 500px;
    background-color: #d98695;
    opacity: 0.9;

    @media screen and (max-width: 414px) {
        height: 520px;
        width: 350px;
        margin-left: 13px;
    }
`;
const InputArea = styled.div`
    padding: 5px 25px;

    .nameinput {
        color: white;
        margin-top: 15px;
    }

    .nameemail {
        color: white;
        margin-top: 25px;
    }

    input {
        font-family: 'Roboto';
        font-size: 17px;
        font-weight: 200;
        margin-top: 5px;
        height: 30px;
        width: 99%;
        box-sizing: border-box;
        box-shadow: 0px 0px 9px -3px #000000;
        border: none;
        outline: none;
    }
    #inputarea {
        height: 150px;
    }

    textarea {
        width: 400px;
        height: 180px;
        font-family: 'Roboto';
        font-size: 17px;
        font-weight: 200;
        box-shadow: 0px 0px 8px -3px #000000;
        outline: none;
        resize: none;
        margin-top: 3px;

        @media screen and (max-width: 414px) {
            width: 296px;
            height: 180px;
        }
    }

`;
const AreaSend = styled.div`
    display: flex;
    justify-content: space-between;

    .button {
        font-family: arial;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 110px;
        background-color: white;
        color: black;
        cursor: pointer;
        margin-top: 15px;

        &:hover {
            transition: all ease 1s;
            color: white;
            background-color: black;
        }
    }
`;
const AreaMidea = styled.div`
    display: flex;
    justify-content: center;

    img {
        border-radius: 10px;
        margin: 18px 10px;
        height: 32px;
        width: 32px;
    }
`;
const BgImage = styled.div`
    height: 100%;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/background-contact.jpeg");
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
`;

export default ContactUs;
