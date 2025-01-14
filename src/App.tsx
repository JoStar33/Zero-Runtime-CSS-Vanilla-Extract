import Router from '@/Router';
import { themeClass } from './styles/theme.css';

export default function App() {
  return (
    <div className={themeClass}>
      <Router />
    </div>
  );
}
