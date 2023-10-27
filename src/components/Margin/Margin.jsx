import styled from 'styled-components';

const MarinBox = styled.div`
  width: 100%;
  height: ${(props) => props.height};
`;

const Margin = ({ height }) => {
  return <MarinBox height={height} />;
};

export default Margin;
