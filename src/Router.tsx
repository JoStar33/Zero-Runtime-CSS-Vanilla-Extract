import { Route, Routes } from 'react-router-dom';
import routerPath from '@/constants/routerPath';
import HomePage from '@/pages';
import ResponsivePage from '@/pages/ResponsivePage';
import DragPage from '@/pages/DragPage';

export default function Router() {
  return (
    <Routes>
      <Route path={routerPath.HOME} element={<HomePage />} />
      <Route path={routerPath.RESPONSIVE} element={<ResponsivePage />} />
      <Route path={routerPath.DRAG} element={<DragPage />} />
    </Routes>
  );
}
