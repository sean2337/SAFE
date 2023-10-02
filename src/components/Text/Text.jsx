import React from 'react';
import styled from 'styled-components';

const TypoGraphy = styled.p`
  font-family: ${(props) => props.fontFamily || 'pretendard-bold'};
  font-size: ${(props) => props.fontSize || '25px'};
  line-height: ${(props) => props.lineHeight || '29px'};
  color: ${(props) => props.theme.colors[props.textColor] || '#1B1313'};
`;

const Text = ({ children, fontSize, lineHeight, textColor, fontFamily }) => {
  return (
    <TypoGraphy
      fontSize={fontSize}
      lineHeight={lineHeight}
      textColor={textColor}
      fontFamily={fontFamily}
    >
      {children}
    </TypoGraphy>
  );
};

export default Text;
