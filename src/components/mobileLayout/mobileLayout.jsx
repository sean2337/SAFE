import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MotionConfig } from 'framer-motion';
import isValidProp from '@emotion/is-prop-valid';
import ProgressBar from '../ProgressBar/ProgressBar';
import BackHeader from '../BackHeader/BackHeader';

const Background = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  background-color: black;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Mobile = styled(motion.div)`
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  width: 390px;
  min-width: 360px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;
  background-color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.background};
`;

const MobileLayout = ({ children, color, isBack, stage, ...rest }) => {
  return (
    <MotionConfig isValidProp={isValidProp}>
      <Background>
        <Mobile {...rest} color={color}>
          {!isBack && window.innerHeight >= 630 && <BackHeader />}
          {children}
          <ProgressBar stage={stage} />
        </Mobile>
      </Background>
    </MotionConfig>
  );
};

MobileLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobileLayout;
