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
import { useEffect, useState } from 'react';

const CarBoxWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding-bottom: 50px;
`;

const SliderWrapper = styled.div`
  width: 100%;
`;

const CarSelectPage = () => {
  const [searchCar, setSearchCar] = useState('');
  const [selectCar, setSelectCar] = useState(carArr[0].carName);
  useEffect(() => {
    console.log(searchCar);
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
      <CarBoxWrapper>
        <SliderWrapper>
          <Slider
            {...settings}
            initialSlide={0}
            beforeChange={(slide, newSlide) =>
              setSelectCar(carArr[newSlide].carName)
            }
          >
            {carArr.map((carInfo, index) => (
              <CarSelectBox key={index} carInfo={carInfo} />
            ))}
          </Slider>
        </SliderWrapper>
      </CarBoxWrapper>
      <ProgressBar stage="CarSelect" />
    </MobileLayout>
  );
};

export default CarSelectPage;
