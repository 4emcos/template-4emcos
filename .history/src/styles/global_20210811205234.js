import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle `
    * {    
        margin : 0;
        padding: 0;
        box-sizing: 0;
    }
    body {
        background: ${theme.colors.background};
        color: ${theme.colors.text};
    }
`