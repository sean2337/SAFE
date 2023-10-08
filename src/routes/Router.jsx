import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartingPage from '../pages/StartingPage';
import CarSelectPage from '../pages/CarSelectPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="/CarSelect" element={<CarSelectPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
