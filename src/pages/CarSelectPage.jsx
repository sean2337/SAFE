import MobileLayout from '../components/mobileLayout/mobileLayout';
import BackHeader from '../components/BackHeader/BackHeader';
import ProgressBar from '../components/ProgressBar/ProgressBar';

const CarSelectPage = () => {
  return (
    <MobileLayout color="white">
      <BackHeader />
      <ProgressBar stage="CarSelect" />
      <ProgressBar stage="DateSelect" />
      <ProgressBar stage="ShowMap" />
    </MobileLayout>
  );
};

export default CarSelectPage;
