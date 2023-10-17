import MobileLayout from '../components/mobileLayout/mobileLayout';
import BackHeader from '../components/BackHeader/BackHeader';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import styled from 'styled-components';
import PrevButton from '../components/Button/PrevButton';
import HomeButton from '../components/Button/HomeButton';
import Space_Between from '../components/Contain/Space_Between';
import { useNavigate } from 'react-router-dom';

const BottomWrapper = styled.div`
  width: 351px;
  height: auto;
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const MapPage = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout color="white">
      <BackHeader />
      <MapWrapper></MapWrapper>
      <BottomWrapper>
        <Space_Between>
          <PrevButton onClick={() => navigate(-1)} />
          <HomeButton
            onClick={() => {
              navigate('/', { replaceTo: '/' });
            }}
          />
        </Space_Between>
        <ProgressBar stage="DaySelect" />
      </BottomWrapper>
    </MobileLayout>
  );
};

export default MapPage;
