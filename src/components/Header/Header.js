import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = () => {
    const handleMenu = () => {
        const active = document.querySelector('.showmodal');

        if(active.style.display === 'none') {
            active.style.display = 'flex';
        } else {
            active.style.display = 'none';
        }
    }
    const activeSpan = () => {
        const active = document.querySelector('span');

        if(active.style.color === 'black') {
            active.style.color = 'white'
        } else {
            active.style.color = 'black'
        }
    }

    return (
        <>
            <Container>
                <Logo>
                    <Link to="/">
                        <img src="/images/bitline-sweets_ccexpress.png" alt="" />
                    </Link>
                </Logo>
                <MenuPage>
                    <Link to="/">
                        <span onClick={activeSpan}>Início</span>
                    </Link>
                    <Link to="/sweets">
                        <span>Doces</span>
                    </Link>
                    <Link to="/eggs">
                        <span>Ovos</span>
                    </Link>
                    <Link to="/aboutus">
                        <span>Sobre Nós</span>
                    </Link>
                    <Link to="/contactus">
                        <span>Contatos</span>
                    </Link>
                </MenuPage>
                <MenuMobile>
                    <img onClick={handleMenu} src="/images/botao-de-menu-de-tres-linhas-horizontais.png" alt="treslinhas" />
                </MenuMobile>
                <ShowMobile className="showmodal">
                    <Link to="/">
                        <span onClick={activeSpan}>Início</span>
                    </Link>
                    <Link to="/sweets">
                        <span>Doces</span>
                    </Link>
                    <Link to="/eggs">
                        <span>Ovos</span>
                    </Link>
                    <Link to="/aboutus">
                        <span>Sobre Nós</span>
                    </Link>
                    <Link to="/contactus">
                        <span>Contatos</span>
                    </Link>
                </ShowMobile>
            </Container>
        </>
    );
};

export default Header;

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 85px;
    margin: auto;
    position: sticky;
    top: 0;
    width: 100%;
    justify-content: space-between;
    background-color: #d98695;
    z-index: 1500;
`;
const Logo = styled.div`
    display: flex;
    height: 85px;
    width: auto;
    align-items: center;
    max-width: 1140px;
    margin: auto;
    
    img {
        height: 100px;
        width: auto;
        margin-left: 40px;

        @media screen and (max-width: 414px) {
            margin-left: -200px;
        }
    }
`;
const MenuPage = styled.div`
    display: flex;
    padding: 0px 50px;
    max-width: 1140px;
    margin: auto;

    @media screen and (max-width: 734px) {
        margin-left: 100px;
    }

    @media screen and (max-width: 414px) {
        display: none;
    }

    span {
        margin-left: 30px;
        text-decoration: none;
        letter-spacing: 1.5px;
        font-weight: bold;
        color: black;
        font-size: 15px;
        animation-name: slide;
        animation-duration: 4s;
        animation-delay: .2s;

        &:hover {
            padding-bottom: 10px;
            border-bottom: 3px solid white;
            transition: all ease .2s;
            color: white;
        }

        @media screen and (min-width: 630px) and (max-width: 734px) {
            font-size: 10px;
            margin-left: 10px;
        }
    }
    .active {
        padding-bottom: 10px;
        border-bottom: 3px solid white;
        transition: all ease .2s;
        color: white;
    }

    @keyframes slide {
        from {
            color: white;
        }
        to {
            color: #ffcbdb;
            opacity: 1;
        }
    }
`;
const ShowMobile = styled.div`
    display: none;
    flex-direction: column;
    height: 400px;
    width: 190px;
    padding: 20px 10px;
    background-color: #d98695;
    transition: all ease 2s;
    
    @media screen and (max-width: 414px) {
        position: absolute;
        left: 54%;
        margin-top: 485px;
        opacity: 0.9;

    }

    span {
        margin-left: 30px;
        text-decoration: none;
        letter-spacing: 1.5px;
        font-weight: bold;
        color: black;
        font-size: 15px;
        animation-name: slide;
        animation-duration: 4s;
        animation-delay: .2s;
        cursor: pointer;

        &:hover {
            padding-bottom: 10px;
            border-bottom: 3px solid white;
            transition: all ease .2s;
            color: white;
        }

        @media screen and (min-width: 630px) and (max-width: 734px) {
            font-size: 10px;
            margin-left: 10px;
        }

        @media screen and (max-width: 414px) {
            font-size: 15px;
            line-height: 80px;
            font-family: 'Roboto';
            font-weight: 600;
        }

    }
    .active {
        padding-bottom: 10px;
        border-bottom: 3px solid white;
        transition: all ease .2s;
        color: white;
    }

    @keyframes slide {
        from {
            color: white;
            width: 0px;
        }
        to {
            color: #ffcbdb;
            width: 190px;
            opacity: 1;
        }
    }
`;
const MenuMobile = styled.div`
    display: none;
    z-index: 1500;
    cursor: pointer;

    @media screen and (max-width: 414px) {
        display: flex;
    }

    img {
        height: 45px;
        width: auto;
        margin-right: 10px;

        @media screen and (max-width: 414px) {
            height: 40px;
            margin-left: -50px;
        }
    }
    span {
        margin-left: 30px;
        text-decoration: none;
        letter-spacing: 1.5px;
        font-weight: bold;
        color: black;
        font-size: 15px;
        animation-name: slide;
        animation-duration: 4s;
        animation-delay: .2s;

        &:hover {
            padding-bottom: 10px;
            border-bottom: 3px solid white;
            transition: all ease .2s;
            color: white;
        }

        @media screen and (min-width: 630px) and (max-width: 734px) {
            font-size: 10px;
            margin-left: 10px;
        }
    }
    .active {
        padding-bottom: 10px;
        border-bottom: 3px solid white;
        transition: all ease .2s;
        color: white;
    }

    @keyframes slide {
        from {
            color: white;
        }
        to {
            color: #ffcbdb;
            opacity: 1;
        }
    }
`;