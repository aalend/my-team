import styles from './logo.module.scss';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <div>
      <Link to={'/'} className={styles.logo}>
        myteam
      </Link>
    </div>
  );
}
