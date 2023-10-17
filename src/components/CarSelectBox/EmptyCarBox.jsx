import styled from 'styled-components';
import Text from '../Text/Text';
import { CgCheck } from 'react-icons/cg';
import { MdSearchOff } from 'react-icons/md';

const BoxPadding = styled.div`
  width: 300px;
  height: 380px;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 270px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  background-color: #f6f4eb;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  box-shadow: 2px 5px 10px 0px rgba(0, 0, 0, 0.44);
  margin-left: 30px;
  margin-right: 30px;
  position: relative;
`;

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BottomBox = styled.div`
  width: 100%;
  height: 115px;
  border-top-right-radius: 21px;
  border-top-left-radius: 21px;
  background-color: white;
  position: absolute;
  bottom: 0%;
  left: 0%;
  padding-top: 35px;
`;

const CheckBox = styled.div`
  width: 140px;
  height: 35px;
  background-color: #8294c4;
  border-radius: 12px;
  position: absolute;
  bottom: -15%;
  left: 22%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyCarBox = () => {
  return (
    <BoxPadding>
      <Box>
        <ImgWrapper>
          <MdSearchOff size={'100px'} color="#8294c4" />
        </ImgWrapper>
        <BottomBox>
          <Text
            fontFamily={'pretendard-semibold'}
            fontSize={'20px'}
            textColor={'secondBlack'}
          >
            검색어 없음
          </Text>

          <CheckBox>
            <CgCheck size={'30px'} color="white" />
          </CheckBox>
        </BottomBox>
      </Box>
    </BoxPadding>
  );
};

export default EmptyCarBox;
