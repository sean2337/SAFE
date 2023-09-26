import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartingPage from '../pages/StartingPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartingPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
