import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --body-color: #13131F;
        --title-color: #8257E6;
        --text-gray-color: #C4C4C4;
        --text-color-light: #FEFBFB;
        --white-color: #FEFBFB;
    }

    body {
        background: var(--body-color);

        max-width: 1140px;
        height: 100vh;

        margin: 0 auto;
 
        ::-webkit-scrollbar-track {
            border-radius: 5px;

            box-shadow: inset 0 0 3px #8257E6; 
            border-radius: 5px;
        }

        ::-webkit-scrollbar {
            width: 8px;
            height: 7px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #8257E6; 
            border-radius: 5px;
        }
    }
`;