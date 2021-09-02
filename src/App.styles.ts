import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/illuminated-chip.jpg';


export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
background-image: url(${BGImage});
background-size: cover;
margin: 0;
padding: 0 20px;
display: flex;
justify-content: center;
}

*{
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
    color: #fff;
    text-shadow: 5px 2px black;
}

.score {
    color: #ffcc91;
    font-size: 2rem;
    font-family: 'Press Start 2p';
    text-shadow: 5px 2px black;
    margin-top: 0;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
}

h1 {
    font-family: 'Bungee Shade', Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-image: linear-gradient(180deg, #fff, #61ffef);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px # 0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
}

.start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px, solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
}

.start {
    max-width: 2000px;
}`;