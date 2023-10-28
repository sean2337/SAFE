import React from 'react';
import styled from 'styled-components';
import MobileLayout from '../components/mobileLayout/mobileLayout';
import LoadingTyping from '../components/Typing/LoadingTyping';

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(105, 121, 233);
`;

const LoadingImg = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border: none;
  outline: none;
`;

const LoadingPage = () => {
  return (
    <MobileLayout stage={''} isBack={true} color={'loadingColor'}>
      <div />
      <LoadingWrapper>
        <LoadingImg src="/OtherImg/Loading.gif" alt="Loading" />
      </LoadingWrapper>

      <LoadingTyping />
      <div />
    </MobileLayout>
  );
};

export default LoadingPage;
