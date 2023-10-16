import MobileLayout from '../components/mobileLayout/mobileLayout';
import BackHeader from '../components/BackHeader/BackHeader';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import CarSelectBox from '../components/CarSelectBox/CarSelectBox';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carArr from '../assets/CarArr/CarArr';
import SearchCar from '../components/Search/SearchCar';
import NextButton from '../components/Button/NextButton';
import PrevButton from '../components/Button/PrevButton';
import { useEffect, useState } from 'react';

const SliderWrapper = styled.div`
  width: 100%;
  height: 402px;
  margin-bottom: 30px;
`;

const CarSelectPage = () => {
  const [searchCar, setSearchCar] = useState('');
  const [selectCar, setSelectCar] = useState(carArr[0].carName);
  const [filteredCars, setFilteredCars] = useState(carArr);

  useEffect(() => {
    // 검색어에 따라 carArr에서 필터링된 배열을 만들어서 상태로 설정
    const filtered = carArr.filter((car) =>
      car.carName.toLowerCase().includes(searchCar.toLowerCase())
    );
    setFilteredCars(filtered);
  }, [searchCar]);

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
      <SearchCar value={searchCar} setValue={setSearchCar} />

      <SliderWrapper>
        <Slider {...settings} initialSlide={0}>
          {filteredCars.map((carInfo, index) => (
            <CarSelectBox key={index} carInfo={carInfo} />
          ))}
        </Slider>
      </SliderWrapper>
      <PrevButton />
      <NextButton />
      <ProgressBar stage="CarSelect" />
    </MobileLayout>
  );
};

export default CarSelectPage;
