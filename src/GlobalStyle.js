import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
    }

    #root {
        width: 100%;
        height: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        outline: none;
        vertical-align: baseline;
        text-decoration: none;
    }
`;
