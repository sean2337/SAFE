import { useState, useEffect } from 'react';
import Text from '../Text/Text';
import styled from 'styled-components';

const FixWrapper = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  white-space: pre-line;
`;

const LoadingTyping = () => {
  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = `당신만을 위한\n분석을 진행중입니다.`;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + completionWord[count]
          : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle('');
        }

        return result;
      });
    }, 380);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <FixWrapper>
      <Text fontSize={'30px'} lineHeight={'40px'} textColor={'white'}>
        {blogTitle}
      </Text>
    </FixWrapper>
  );
};

export default LoadingTyping;
