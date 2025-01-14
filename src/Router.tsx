import { Route, Routes } from 'react-router-dom';
import routerPath from '@/constants/routerPath';
import HomePage from '@/pages';
import ResponsivePage from '@/pages/ResponsivePage';

export default function Router() {
  return (
    <Routes>
      <Route path={routerPath.HOME} element={<HomePage />} />
      <Route path={routerPath.RESPONSIVE} element={<ResponsivePage />} />
    </Routes>
  );
}
