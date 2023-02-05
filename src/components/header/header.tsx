import { Navigation } from '../navigation';
import { Container, Grid, Logo } from '../ui';

import styles from './header.module.scss';

export function Header() {
  return (
    <>
      <header className={styles['site-head']}>
        <Container>
          <Grid className={styles['site-head__grid']}>
            <Logo />
            <Navigation />
          </Grid>
        </Container>
      </header>
    </>
  );
}
