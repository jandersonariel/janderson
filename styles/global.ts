import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  body {
    background: ${ ({theme}) => theme.color.background};
    color: ${props => props.theme.color.primary};
  }
  text { 
    color: ${props => props.theme.color.text};
  }
  .divheader { 
    height: 5rem;
    display: flex;
    justify-content: center;
  }

  button {

  }
`;