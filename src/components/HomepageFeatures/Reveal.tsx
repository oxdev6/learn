import React from 'react';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
import styles from './Reveal.module.css';

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export default function Reveal({ children, delay = 0 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={clsx(styles.reveal, inView && styles.visible)}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
