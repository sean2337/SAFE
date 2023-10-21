import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import PretendardBold from '../src/assets/fonts/Pretendard-Bold.woff';
import PretendardSemiBold from '../src/assets/fonts/Pretendard-SemiBold.woff';
import PretendardMedium from '../src/assets/fonts/Pretendard-Medium.woff';
import PretendardRegular from '../src/assets/fonts/Pretendard-Regular.woff';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
      width: 100vw;
      height: calc(var(--vh, 1vh) * 100);
      background-color: ${(props) => props.theme.colors.white};
  }

  @font-face {
    font-family: 'Pretendard-bold';
    src: url(${PretendardBold}) format('woff');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard-semibold';
    src: url(${PretendardSemiBold}) format('woff');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard-medium';
    src: url(${PretendardMedium}) format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard-regular';
    src: url(${PretendardRegular}) format('woff');
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
