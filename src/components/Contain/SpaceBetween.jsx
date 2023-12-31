import styled from 'styled-components';

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 15px;
`;

const SpaceBetween = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default SpaceBetween;
