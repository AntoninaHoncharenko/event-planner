import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { colors } from './helpers/vars';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background-color: ${colors.background};
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a{
 text-decoration: none;
    color: black;
}
`;
