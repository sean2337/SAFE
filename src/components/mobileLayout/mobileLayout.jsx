import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MotionConfig } from 'framer-motion';
import isValidProp from '@emotion/is-prop-valid';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const Mobile = styled(motion.div)`
  position: relative;
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.background};

  ${(props) =>
    props.darkShadow &&
    css`
      background: radial-gradient(
          50% 50% at 50% 50%,
          rgba(224, 222, 222, 0.6) 0%,
          rgba(224, 222, 222, 0) 100%
        ),
        #f5f5f5;
    `}

  ${(props) =>
    props.loginShadow &&
    css`
      background: radial-gradient(
          72.26% 45.91% at 50% 54.09%,
          rgba(224, 222, 222, 0.6) 0%,
          rgba(224, 222, 222, 0) 100%
        ),
        #ffffff;
    `}
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
