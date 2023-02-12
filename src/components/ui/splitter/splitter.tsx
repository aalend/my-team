import styles from './splitter.module.scss';

type SplitterProps = {
  children: React.ReactNode;
  className?: string;
};

export function Splitter({ children, className }: SplitterProps) {
  return <div className={`${styles.splitter} ${className ?? ''}`}>{children}</div>;
}
