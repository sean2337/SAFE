import styled from 'styled-components';
import Text from '../Text/Text';

const BoxPadding = styled.div`
  width: 300px;
  height: 402px;
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
`;

const Box = styled.div`
  width: 270px;
  height: 402px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  background-color: #f6f4eb;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  box-shadow: 2px 5px 10px 0px rgba(0, 0, 0, 0.44);
`;

const CarSelectBox = ({ carInfo }) => {
  return (
    <BoxPadding>
      <Box>
        <TextWrapper>
          <Text
            fontFamily={'pretendard-semibold'}
            fontSize={'20px'}
            textColor={'secondBlack'}
          >
            {carInfo.carName}
          </Text>
        </TextWrapper>
      </Box>
    </BoxPadding>
  );
};

export default CarSelectBox;
