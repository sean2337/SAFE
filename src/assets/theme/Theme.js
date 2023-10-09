const colors = {
  white: '#ffffff',
  black: '#1B1313',
  secondBlack: '#263238',
  realBlack: `#000000`,
  blueGray: '#B0BEC5',
  darkGray: '#707070',
  background: '#f5f5f5',
  gray: '#afacac',
  lightGray: '#E0DEDE',
  alertRed: '#D83B3B',
  purple: '#7914FB',
  mainColor: '#8294C4',
  secondColor: '#DBDFEA',
  thirdColor: '#F6F4EB',
};

const box = `
      border: 1px solid ${colors.skyBlue};
      
      :hover {
        box-shadow: 2px 4px 8px -1px rgba(49, 76, 145, 0.15);
      }
    `;

const font = {
  mainTitle: `
        font-family: 'pretendard-bold';
        font-size: 26px;
        line-height: 31px;
      `,

  smallTitle: `
      font-family: 'pretendard-medium';
      font-size: 17.5px;
      line-height: 21px;
      font-weight: 500;
    `,

  buttonText: `
        font-family: 'pretendard-bold';
        font-size: 22px;
        line-height: 26px;
      `,

  contentText: `
      font-family: 'pretendard-medium';
      font-size: 16px;
      line-height: 19px;
    `,

  maxNumberText: `
      font-family: 'pretendard-semibold';
      font-size: 17px;
      line-height: 21px;
    `,

  dialText: `
      font-family: 'pretendard-medium';
      font-size: 16px;
      line-height: 19px;
    `,

  aiContentText: `
      font-family: 'pretendard-regular';
      font-size: 17.5px;
      line-height: 21px;
    `,

  alertText: `
      font-family: 'pretendard-bold';
      font-size: 16px;
      line-height: 19px;
    `,

  smallButtonText: `
      font-family: 'pretendard-bold';
      font-size: 17.5px;
      line-height: 21px;
    `,

  loadingText: `
    font-family: 'pretendard-bold';
    font-size: 30px;
    line-height: 21px;
  `,
};

const flex = {
  flexCenter: `
        display: flex;
        justify-content: center;
        align-items: center;
      `,
  flexCenterColumn: `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `,
};

const animation = {
  box: { scale: 1.03, transition: { duration: 0.3 } },
};

const theme = {
  colors,
  box,
  font,
  flex,
  animation,
};

export default theme;
