import React from 'react';
import dragWrapperStyle from './index.css';

interface Props {
  children: React.ReactNode;
}

export default function DragWrapper({ children }: Props) {
  return <div className={dragWrapperStyle.main}>{children}</div>;
}
