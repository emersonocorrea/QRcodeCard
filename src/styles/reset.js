import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
     *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html, body{
        width: 100vw;
        height: 100vh;       

        overflow-x: hidden;
    } 

    body{
        background: #D6E1F0;
        padding: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        
       
    } 

    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    ul, ol{
        list-style: none;
    }

    input, textarea{
        border-radius: 0;
        border: none;
        background: transparent;
    }

    img{
        max-width: 100%;
    }
`