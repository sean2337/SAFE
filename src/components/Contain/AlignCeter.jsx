import styled from 'styled-components';
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AlignCenter = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AlignCenter;
