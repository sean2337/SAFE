import MobileLayout from '../components/mobileLayout/mobileLayout';
import CarSelectBox from '../components/CarSelectBox/CarSelectBox';
import styled from 'styled-components';
import Slider from 'react-slick';
import Toast from '../components/Toast/Toast';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carArr from '../assets/CarArr/CarArr';
import SearchCar from '../components/Search/SearchCar';
import NextButton from '../components/Button/NextButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EmptyCarBox from '../components/CarSelectBox/EmptyCarBox';

const SliderWrapper = styled.div`
  width: 100%;
  height: 380px;
  margin: 0 auto;
`;
const BottomBtnWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  margin-top: 5px;
`;

const CustomSlider = styled(Slider)`
  .slick-slide {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const CarSelectPage = () => {
  const [searchCar, setSearchCar] = useState('');
  const [selectCar, setSelectCar] = useState('');
  const [filteredCars, setFilteredCars] = useState(carArr);
  const navigate = useNavigate();

  useEffect(() => {
    const beforeCarName = localStorage.getItem('carName');
    if (beforeCarName) {
      setSelectCar(beforeCarName);
    }
  }, []);

  useEffect(() => {
    const filtered = carArr.filter((car) =>
      car.carName.toLowerCase().includes(searchCar.toLowerCase())
    );
    setFilteredCars(filtered);
  }, [searchCar]);

  const CarNextFun = () => {
    if (selectCar === '') {
      Toast('차량을 선택해주세요.');
    } else {
      localStorage.setItem('carName', selectCar);
      navigate('/DaySelect');
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
    <MobileLayout color="white" stage={'CarSelect'}>
      <SearchCar value={searchCar} setValue={setSearchCar} />
      <SliderWrapper>
        <CustomSlider {...settings} initialSlide={0}>
          {filteredCars.length === 0 && <EmptyCarBox />}
          {filteredCars.map((carInfo, index) => (
            <CarSelectBox
              key={index}
              carInfo={carInfo}
              selectCar={selectCar}
              setSelectCar={setSelectCar}
            />
          ))}
        </CustomSlider>
      </SliderWrapper>

      <BottomBtnWrapper>
        <NextButton
          onClick={() => {
            CarNextFun();
          }}
        />
      </BottomBtnWrapper>
    </MobileLayout>
  );
};

export default CarSelectPage;
