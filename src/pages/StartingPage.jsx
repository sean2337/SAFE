import MobileLayout from '../components/mobileLayout/mobileLayout';
import styled from 'styled-components';
import startingCarImage from '../assets/img/startingCar.png';
import Text from '../components/Text/Text';

const StartingCar = styled.img`
  width: 240px;
  height: 420px;
  margin-left: 30px;
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
  align-items: center;
  border-radius: 8px;
  margin-top: 30px;
`;

const StartingPage = () => {
  return (
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
        <StartingCar src={startingCarImage} alt="Starting Car" />
      </Car_Text_Wrapper>

      <NextBtn onClick={() => {}}>
        <Text>Move</Text>
        <div style={{ width: '10px', height: '10px' }} />
        <Text textColor="mainColor">Forward</Text>
      </NextBtn>
    </MobileLayout>
  );
};

export default StartingPage;
