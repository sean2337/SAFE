import styled from 'styled-components';

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const SpaceBetween = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default SpaceBetween;
