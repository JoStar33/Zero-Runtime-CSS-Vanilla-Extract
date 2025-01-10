import { Route, Routes } from 'react-router-dom';
import routerPath from '@/constants/routerPath';
import HomePage from '@/pages';

export default function Router() {
  return (
    <Routes>
      <Route path={routerPath.HOME} element={<HomePage />} />
    </Routes>
  );
}
