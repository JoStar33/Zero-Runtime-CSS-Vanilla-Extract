import { HomeListElement } from '@/types/home';
import { homeCardStyle } from './index.css';

interface Props {
  element: HomeListElement;
}

export default function HomeCard({ element }: Props) {
  return (
    <div className={homeCardStyle.main}>
      <div className={homeCardStyle.image} />
      <p className={homeCardStyle.title}>{element.title}</p>
      <p className={homeCardStyle.description}>{element.desciption}</p>
    </div>
  );
}
