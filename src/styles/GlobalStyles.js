import '@fontsource/sirin-stencil';
import '@fontsource/kaushan-script';
import { createGlobalStyle } from 'styled-components';



const GlobalStyles= createGlobalStyle`

html.has-scroll-smooth{
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    scroll-behaviour: smooth;
}

*, *::before, *::after{
    margin: 0;
    padding: 0;
}

html{
    scroll-behaviour: smooth;
}

body{
    font-family: "Sirin Stencil";
    overflow-x: hidden;
    scroll-behaviour: smooth;
}

h1, h2, h3, h4, h5, h6{
    mmargin: 0;
    padding: 0;
}

a{
    color: inherit;
    text-decoration: none;

}

`


export default GlobalStyles;