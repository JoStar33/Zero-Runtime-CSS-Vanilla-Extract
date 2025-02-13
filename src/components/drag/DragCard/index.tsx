import { motion, useAnimate, useDragControls, useMotionValue } from 'framer-motion';
import dragCardStyle from './index.css';
import { DragElement } from '@/types/drag';
import React from 'react';

interface Props {
  element: DragElement;
}

export default function DragCard({ element }: Props) {
  const swipeDragControls = useDragControls();
  const [animateRef, animate] = useAnimate();
  const itemX = useMotionValue(0);
  const [isDeleteShow, setIsDeleteShow] = React.useState(false);
  const deleteAnimateState = isDeleteShow ? 'appear' : 'disappear';

  React.useEffect(() => {
    const unsubscribeItemXEvent = itemX.on('change', (v) => {
      const isOverThreshold = v < -64 / 2;
      setIsDeleteShow(isOverThreshold);
    });
    return () => {
      unsubscribeItemXEvent();
    };
  }, [itemX]);

  const handlePointerDown: React.PointerEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    swipeDragControls.start(event);
  };

  return (
    <div className={dragCardStyle.cardWrapper}>
      <motion.div
        drag="x"
        dragConstraints={{ left: -64, right: 0 }}
        dragElastic={0.1}
        dragControls={swipeDragControls}
        dragListener={false}
        style={{
          x: itemX,
        }}
        ref={animateRef}
        onDragEnd={() => {
          const isOverThreshold = itemX.get() < -64 / 2;
          animate(animateRef.current, { x: isOverThreshold ? -64 : 0 });
        }}
        onPointerDown={handlePointerDown}
        className={dragCardStyle.main}
      >
        <p className={dragCardStyle.cardTitle}>{element.title}</p>
        <div className="">
          <p></p>
        </div>
      </motion.div>
      <motion.button
        className={dragCardStyle.cardDeleteButton}
        initial="disappear"
        animate={deleteAnimateState}
        exit={{ opacity: 0 }}
        variants={{
          appear: { opacity: 1, width: '60px' },
          disappear: { opacity: 0, width: '0px' },
        }}
      >
        삭제
      </motion.button>
    </div>
  );
}
