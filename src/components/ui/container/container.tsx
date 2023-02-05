import styles from './container.module.scss';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={`${styles.container} ${className ?? ''}`}>{children}</div>;
}
