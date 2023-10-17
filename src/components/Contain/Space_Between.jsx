import styled from 'styled-components';

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const Space_Between = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Space_Between;
