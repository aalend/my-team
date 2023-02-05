import { NavLink } from 'react-router-dom';

export function FooterNav() {
  return (
    <nav id='secondary' aria-label='footer navigation'>
      <ul>
        <li>
          <NavLink to={'/'}>home</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>about</NavLink>
        </li>
      </ul>
    </nav>
  );
}
