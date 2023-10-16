import styled from 'styled-components';
import Text from '../Text/Text';
import { CgChevronRight } from 'react-icons/cg';
//react-icons/cg/CgChevronLeft
const ButtonBox = styled.button`
  width: 100px;
  height: 53px;
  background-color: #404756;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`;

const NextButton = ({ onClick }) => {
  return (
    <ButtonBox onClick={onClick}>
      <Text textColor={'white'} fontSize={'19px'}>
        Next
      </Text>
      <CgChevronRight size={'35px'} color="white" />
    </ButtonBox>
  );
};

export default NextButton;
