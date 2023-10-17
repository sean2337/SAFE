import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartingPage from '../pages/StartingPage';
import CarSelectPage from '../pages/CarSelectPage';
import DaySelectPage from '../pages/DaySelectPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="/CarSelect" element={<CarSelectPage />} />
      <Route path="/DaySelect" element={<DaySelectPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
