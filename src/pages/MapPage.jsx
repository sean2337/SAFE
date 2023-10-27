import MobileLayout from '../components/mobileLayout/mobileLayout';
import styled from 'styled-components';
import PrevButton from '../components/Button/PrevButton';
import HomeButton from '../components/Button/HomeButton';
import SpaceBetween from '../components/Contain/SpaceBetween';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Margin from '../components/Margin/Margin';

const BottomWrapper = styled.div`
  width: 100%;
  min-width: 340px;
  max-width: 390px;
  height: 130px;
  position: fixed;
  bottom: 7%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Map = styled.iframe`
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const MapWrapper = styled.div`
  width: 110%;
  height: 100vh;
`;

const MapPage = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout color="white">
      <MapWrapper>
        <Map src="/SafeWeb/index.html" title="SafeMap" />
      </MapWrapper>
      <BottomWrapper>
        <SpaceBetween>
          <PrevButton onClick={() => navigate(-1)} />
          <HomeButton
            onClick={() => {
              navigate('/', { replaceTo: '/' });
            }}
          />
        </SpaceBetween>
        <Margin height="20px" />
        <ProgressBar stage={'ShowMap'} />
      </BottomWrapper>
    </MobileLayout>
  );
};

export default MapPage;
