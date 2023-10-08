import styled from 'styled-components';
import { CgChevronLeft } from 'react-icons/cg';
import Text from '../Text/Text';
import { useNavigate } from 'react-router-dom';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const BackHeader = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <CgChevronLeft
        size={25}
        style={{ marginRight: '5px' }}
        onClick={() => {
          navigate(-1);
        }}
      />
      <Text fontSize={'20px'}>SAFE</Text>
    </HeaderWrapper>
  );
};

export default BackHeader;
