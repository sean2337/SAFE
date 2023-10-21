import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Router from './routes/Router';
import theme from './assets/theme/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

function setScreenHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  console.log('setScreenHeight function called');
}

const App = () => {
  useEffect(() => {
    setScreenHeight();
    console.log('useEffect called');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

root.render(<App />);
