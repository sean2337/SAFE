import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./assets/fonts/font.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Router from "./routes/Router";
import theme from "./assets/theme/Theme";
import { preloadImage } from "./components/\bFunction/Image";
import carArr from "./assets/CarArr/CarArr";

const root = ReactDOM.createRoot(document.getElementById("root"));

// 이미지 URL 리스트
const exImageUrls = [
  "CarImg/startingCar.svg",
  "OtherImg/DaySelect.svg",
  "OtherImg/Loading.gif",
  "/SafeWeb/map_Loading.gif",
];
const imageUrls = carArr.map((car) => `CarImg/${car.carName}.svg`);
// 이미지 미리 로딩
exImageUrls.forEach((url) => preloadImage(url));
imageUrls.forEach((url) => preloadImage(url));

function setScreenHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

const App = () => {
  //첫 초기화면시 높이 잡기
  useEffect(() => {
    setScreenHeight();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

root.render(<App />);
