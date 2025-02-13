import DragCard from '@/components/drag/DragCard';
import DragWrapper from '@/components/drag/DragWrapper';
import { DragElement } from '@/types/drag';

const dragElementList: DragElement[] = [
  {
    id: 1,
    title: '테스트 1',
    description: '테스트 1의 내용',
  },
];

export default function DragContainer() {
  return (
    <DragWrapper>
      {dragElementList.map((dragElement) => (
        <DragCard key={dragElement.id} element={dragElement} />
      ))}
    </DragWrapper>
  );
}
