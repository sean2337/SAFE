import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
      width: 100vw;
      height: calc(var(--vh, 1vh) * 100);
      background-color: ${(props) => props.theme.colors.white};
  }

  @font-face {
    font-family: 'Pretendard-bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard-semibold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard-medium';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard-regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
  }
  
  * {
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  input {
    border: none;
    outline: none;
    background: white;
    :focus {
    outline: none;
    }

    textarea {
      resize: none;
      background: white;
    }
  }
`;

export default GlobalStyle;
