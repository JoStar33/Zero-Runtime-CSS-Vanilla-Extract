import { HomeListElement } from '@/types/home';
import HomeCard from '../HomeCard';
import { homeStyle } from './index.css';

export default function Home() {
  return (
    <div className={homeStyle.main}>
      <div className={homeStyle.header}></div>
      <div className={homeStyle.body}>
        {data.map((element, index) => (
          <HomeCard key={index} element={element} />
        ))}
      </div>
    </div>
  );
}

const data: HomeListElement[] = [
  {
    title: '테스트',
    desciption: '테스트중',
  },
  {
    title: '테스트',
    desciption: '테스트중',
  },
  {
    title: '테스트',
    desciption: '테스트중',
  },
];
