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
import getWeekDates from '../components/\bFunction/GetWeekDates';
import DaySelectBox from '../components/DaySelectBox/DaySelectBox';
import { useState } from 'react';

const SliderWrapper = styled.div`
  width: 100%;
  height: 402px;
  margin-top: 30px;
  margin-bottom: 38px;
`;

const DaySelectPage = () => {
  const navigate = useNavigate();

  const week = getWeekDates();
  const [selectDay, setSelectDay] = useState('');

  const DateNextFun = () => {
    if (selectDay == '') {
      Toast('요일을 선택해주세요.');
    } else {
      localStorage.setItem('day', selectDay);
      navigate('/Map');
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
  };

  return (
    <MobileLayout color="white">
      <BackHeader />
      <SliderWrapper>
        <Slider {...settings} initialSlide={0}>
          {week.map((dayInfo, index) => (
            <DaySelectBox
              key={index}
              dayInfo={dayInfo}
              selectDay={selectDay}
              setSelectDay={setSelectDay}
            />
          ))}
        </Slider>
      </SliderWrapper>

      <Space_Between>
        <PrevButton onClick={() => navigate(-1)} />
        <NextButton onClick={() => DateNextFun()} />
      </Space_Between>

      <ProgressBar stage="DaySelect" />
    </MobileLayout>
  );
};

export default DaySelectPage;