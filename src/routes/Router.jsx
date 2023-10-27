import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartingPage from '../pages/StartingPage';
import CarSelectPage from '../pages/CarSelectPage';
import DaySelectPage from '../pages/DaySelectPage';
import MapPage from '../pages/MapPage';
import LoadingPage from '../pages/LoadingPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="/CarSelect" element={<CarSelectPage />} />
      <Route path="/DaySelect" element={<DaySelectPage />} />
      <Route path="/Loading" element={<LoadingPage />} />
      <Route path="/Map" element={<MapPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
