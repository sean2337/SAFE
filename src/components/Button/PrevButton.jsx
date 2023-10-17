import styled from 'styled-components';
import Text from '../Text/Text';
import { CgChevronLeft } from 'react-icons/cg';
const ButtonBox = styled.button`
  width: 100px;
  height: 53px;
  background-color: #404756;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;

const PrevButton = ({ onClick }) => {
  return (
    <ButtonBox onClick={onClick}>
      <CgChevronLeft size={'35px'} color="white" />
      <Text textColor={'white'} fontSize={'19px'}>
        Prev
      </Text>
    </ButtonBox>
  );
};

export default PrevButton;
