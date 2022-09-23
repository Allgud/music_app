import { createGlobalStyle } from "styled-components";

const GStyles = createGlobalStyle`
    @font-face {
        font-family: 'StratosSkyeng';
        src: local('StratosSkyeng'), local('StratosSkyeng'),
            url('../fonts/Stratos-Medium.woff2') format('woff2'),
            url('../fonts/Stratos-Medium.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:before,
    *:after {
        box-sizing: border-box;
    }

    a,
    a:visited {
        text-decoration: none;
        font-family: 'StratosSkyeng', sans-serif;
        cursor: pointer;
    }

    button,
    ._btn {
        cursor: pointer;
    }

    ul li {
        list-style: none;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        font-family: 'StratosSkyeng', sans-serif;
        color: #FFFFFF;
    }
`

export default GStyles