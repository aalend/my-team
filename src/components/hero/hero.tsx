import { Container, Grid } from '../ui';

import styles from './hero.module.scss';

export function Hero() {
  return (
    <section aria-labelledby='header' className={styles.hero}>
      <Container>
        <Grid className={styles['hero__grid']}>
          <h1 id='header'>
            Find the best <span>talent</span>
          </h1>
          <p>
            Finding the right people and building high performing teams can be hard. Most companies
            aren&rsquo;t tapping into the abundance of global talent. We&rsquo;re about to change
            that.
          </p>
        </Grid>
      </Container>
    </section>
  );
}
