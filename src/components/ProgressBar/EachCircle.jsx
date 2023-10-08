import theme from '../../assets/theme/Theme';
import { IoMdCar } from 'react-icons/io';
import { BiCalendar } from 'react-icons/bi';
import { RiMap2Line } from 'react-icons/ri';
import { CgCheck } from 'react-icons/cg';
import styled from 'styled-components';

const Circle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background-color: ${(props) =>
    props.kind ? theme.colors.white : theme.colors.mainColor};
`;

const EachCircle = (props) => {
  return (
    <Circle kind={props.kind}>
      {props.kind === 'car' && (
        <IoMdCar
          style={{
            width: '28px',
            height: '28px',
            color: theme.colors.mainColor,
          }}
        />
      )}
      {props.kind === 'calendar' && (
        <BiCalendar
          style={{
            width: '28px',
            height: '28px',
            color: theme.colors.mainColor,
          }}
        />
      )}
      {props.kind === 'map' && (
        <RiMap2Line
          style={{
            width: '28px',
            height: '28px',
            color: theme.colors.mainColor,
          }}
        />
      )}
      {!props.kind && (
        <CgCheck
          style={{
            width: '35px',
            height: '35px',
            color: theme.colors.white,
          }}
        />
      )}
    </Circle>
  );
};

export default EachCircle;
