import styles from './grid.module.scss';

type GridProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function Grid({ children, className, style }: GridProps) {
  return (
    <div style={style} className={`${styles.grid} ${className ?? ''}`}>
      {children}
    </div>
  );
}
