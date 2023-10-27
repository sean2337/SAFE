import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MotionConfig } from 'framer-motion';
import isValidProp from '@emotion/is-prop-valid';

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Mobile = styled(motion.div)`
  overflow-x: hidden;
  //overflow-y: hidden;
  position: relative;
  width: 390px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.background};
`;

const ProgressBar = styled.div`
  width: 264px;
  height: 8px;
  margin-top: 76px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.black};
`;

const MobileLayout = ({ children, bar, ...rest }) => {
  return (
    <MotionConfig isValidProp={isValidProp}>
      <Background>
        <Mobile {...rest}>
          {bar && <ProgressBar />}
          {children}
        </Mobile>
      </Background>
    </MotionConfig>
  );
};

MobileLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobileLayout;
