import { NavLink } from 'react-router-dom';

import styles from './navigation.module.scss';

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink to={'/'}>home</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>about</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to={'/contact'}>contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
