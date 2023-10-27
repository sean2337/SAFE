import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/mobileLayout/mobileLayout';

const LoadingImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // 2초 대기 후에 '/Map' 페이지로 이동
      navigate('/Map', { replace: true });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MobileLayout stage={''} isBack={true} color={'mainColor'}>
      <LoadingImg src="/OtherImg/Loading.gif" alt="Loading" />
    </MobileLayout>
  );
};

export default LoadingPage;
