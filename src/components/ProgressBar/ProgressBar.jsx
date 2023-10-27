import styled from 'styled-components';
import theme from '../../assets/theme/Theme';
import EachCircle from './EachCircle';

const BarBox = styled.div`
  width: 90%;
  height: 65px;
  background-color: ${theme.colors.secondColor};
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const ConnectingLine = styled.div`
  width: 27%;
  height: 2px;
  background-color: ${(props) =>
    props.check ? theme.colors.mainColor : theme.colors.white};
`;

const ProgressBar = ({ stage }) => {
  return (
    <>
      {stage && (
        <BarBox>
          {stage === 'CarSelect' && (
            <>
              <EachCircle kind="car" />
              <ConnectingLine />
              <EachCircle kind="calendar" />
              <ConnectingLine />
              <EachCircle kind="map" />
            </>
          )}

          {stage === 'DaySelect' && (
            <>
              <EachCircle />
              <ConnectingLine check={true} />
              <EachCircle kind="calendar" />
              <ConnectingLine />
              <EachCircle kind="map" />
            </>
          )}

          {stage === 'ShowMap' && (
            <>
              <EachCircle />
              <ConnectingLine check={true} />
              <EachCircle />
              <ConnectingLine check={true} />
              <EachCircle kind="map" />
            </>
          )}
        </BarBox>
      )}
    </>
  );
};

export default ProgressBar;
