import styled from 'styled-components';
import Text from '../Text/Text';
import { Checkmark } from 'react-checkmark';

const BoxPadding = styled.div`
  width: 300px;
  height: 430px;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 243px;
  height: 417px;
  background-color: #e9efff;
  border-radius: 35px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

const TopImg = styled.img`
  width: 110%;
  height: auto;
  position: absolute;
  top: 0%;
  left: -10%;
  z-index: 1;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  margin-top: 6px;
`;

const CircleWrapper = styled.div`
  width: 100%;
  height: 106px;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

const DayCircle = styled.div`
  width: 106px;
  height: 106px;
  border-radius: 100%;
  background-color: #404756;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

const DaySelectBox = ({ dayInfo, selectDay, setSelectDay }) => {
  return (
    <BoxPadding>
      <Box
        onClick={() => {
          setSelectDay(dayInfo.day);
        }}
      >
        <TopWrapper>
          <Text
            fontFamily={'pretendard-semibold'}
            fontSize={'17px'}
            textColor={'white'}
          >
            {dayInfo.date}
          </Text>
        </TopWrapper>
        <TopImg src="OtherImg/DaySelectTop.png" />
        <CircleWrapper>
          {selectDay === dayInfo.day ? (
            <Checkmark size="106px" color="#404756" />
          ) : (
            <DayCircle>
              <Text
                fontFamily={'pretendard-semibold'}
                fontSize={'47px'}
                textColor={'white'}
              >
                {dayInfo.day[0]}
              </Text>
            </DayCircle>
          )}
        </CircleWrapper>

        <Text
          fontFamily={'pretendard-semibold'}
          fontSize={'27px'}
          textColor={'secondBlack'}
        >
          {dayInfo.day}
        </Text>
      </Box>
    </BoxPadding>
  );
};

export default DaySelectBox;
