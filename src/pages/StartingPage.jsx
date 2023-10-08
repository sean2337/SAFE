import MobileLayout from '../components/mobileLayout/mobileLayout';
import styled, { keyframes } from 'styled-components';
import startingCarImage from '../assets/img/startingCar.png';
import Text from '../components/Text/Text';
import { useEffect } from 'react';
import Toast from '../components/Toast/Toast';
import { useNavigate } from 'react-router-dom';

const moveUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const first_MoveUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const StartingCar = styled.img`
  width: 240px;
  height: 420px;
  margin-left: 30px;
  &.initial {
    animation: ${first_MoveUp} 2s ease-in-out forwards;
  }
  &.animate {
    animation: ${moveUp} 2s ease-in-out forwards;
  }
  transform: translateY(100%);
`;

const TextLine = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  margin-top: 30px;
`;

const Car_Text_Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin-top: 200px;
  align-items: flex-start;
  margin-left: 20px;
`;

const NextBtn = styled.div`
  background-color: #f6f4eb;
  width: 80%;
  height: 55px;
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 12px;
  border-radius: 8px;
  margin-top: 30px;
`;

const StartingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const startingCar = document.getElementById('startingCar');
    startingCar.classList.add('initial');

    Toast('Safe에 오신걸 환영합니다.');
  }, []);

  const handleNextBtnClick = () => {
    const startingCar = document.getElementById('startingCar');
    startingCar.classList.add('animate');

    setTimeout(() => {
      const startingCar = document.getElementById('startingCar');
      setTimeout(() => {
        startingCar.style.transform = 'translateY(0)';
      }, 2000);

      navigate('/CarSelect');
    }, 2000);
  };

  return (
    <>
      <MobileLayout color="secondColor">
        <Car_Text_Wrapper>
          <TextWrapper>
            <TextLine>
              <Text>Move</Text>
              <div style={{ width: '5px', height: '10px' }} />
              <Text textColor="mainColor">Forward</Text>
            </TextLine>
            <div style={{ width: '100px', height: '10px' }} />
            <Text>With us</Text>
          </TextWrapper>
          <StartingCar
            id="startingCar"
            src={startingCarImage}
            alt="Starting Car"
          />
        </Car_Text_Wrapper>

        <NextBtn
          onClick={() => {
            handleNextBtnClick();
          }}
        >
          <Text>Move</Text>
          <div style={{ width: '10px', height: '10px' }} />
          <Text textColor="mainColor">Forward</Text>
        </NextBtn>
      </MobileLayout>
    </>
  );
};

export default StartingPage;
