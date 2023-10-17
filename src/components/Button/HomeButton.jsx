import styled from 'styled-components';
import Text from '../Text/Text';
import { CgChevronRight } from 'react-icons/cg';
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

const HomeButton = ({ onClick }) => {
  return (
    <ButtonBox onClick={onClick}>
      <Text textColor={'white'} fontSize={'19px'}>
        Home
      </Text>
      <CgChevronRight size={'35px'} color="white" />
    </ButtonBox>
  );
};

export default HomeButton;
