import { Link } from 'react-router-dom';
import { Container, Grid } from '../ui';
import styles from './cta.module.scss';

export function Cta() {
  return (
    <section aria-labelledby='header' className={styles.cta}>
      <Container>
        <Grid className={styles['cta__grid']}>
          <h2>Ready to get started?</h2>
          <div>
            <Link to={'/contact'} className={styles['cta__button']}>
              contact us
            </Link>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
