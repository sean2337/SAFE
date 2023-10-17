import MobileLayout from '../components/mobileLayout/mobileLayout';
import BackHeader from '../components/BackHeader/BackHeader';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import styled from 'styled-components';
import Slider from 'react-slick';
import Toast from '../components/Toast/Toast';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextButton from '../components/Button/NextButton';
import PrevButton from '../components/Button/PrevButton';
import Space_Between from '../components/Contain/Space_Between';
import { useNavigate } from 'react-router-dom';

const DaySelectPage = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout color="white">
      <BackHeader />

      <Space_Between>
        <PrevButton />
        <NextButton />
      </Space_Between>

      <ProgressBar stage="DaySelect" />
    </MobileLayout>
  );
};

export default DaySelectPage;
