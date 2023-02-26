import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './navigation.module.scss';

const Menu = function ({ onClose }: { onClose: () => void }) {
  return (
    <>
      <nav id='secondary' className={styles['mobile']}>
        <ul>
          <li>
            <NavLink to={'/'}>home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>about</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>contact</NavLink>
          </li>
        </ul>
        <button aria-label='Close menu' onClick={onClose}>
          Close menu
        </button>
      </nav>
    </>
  );
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    return () => setIsOpen(false);
  }, [pathname]);

  return (
    <nav id='primary' className={styles.navigation}>
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
      <button onClick={() => setIsOpen(!isOpen)} type='button' aria-label='open menu'>
        Menu
      </button>
      {isOpen &&
        createPortal(
          <Menu
            onClose={() => {
              setIsOpen(false);
            }}
          />,
          document.body
        )}
    </nav>
  );
}
