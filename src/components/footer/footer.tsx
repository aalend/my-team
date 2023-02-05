import { RiFacebookCircleFill, RiInstagramFill, RiPinterestFill } from 'react-icons/ri';
import { Container, Grid, Logo } from '../ui';
import { FooterNav } from './footer-nav';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={styles['site-foot']}>
      <Container>
        <Grid className={styles['site-foot__grid']}>
          <div className={styles['site-foot__head']}>
            <Logo />
            <FooterNav />
          </div>
          <address>
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>
              Call Us: <a href='tel:+949-833-7432'>949-833-7432</a>
            </p>
          </address>
          <div>
            <div>
              <RiFacebookCircleFill size={24} />
              <RiPinterestFill size={24} />
              <RiInstagramFill size={24} />
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </div>
        </Grid>
      </Container>
    </footer>
  );
}
