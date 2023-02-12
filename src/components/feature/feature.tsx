import { Container, Grid } from '../ui';
import { features } from './data';
import styles from './feature.module.scss';

export function Feature() {
  return (
    <section aria-labelledby='header' className={styles.feature}>
      <Container>
        <Grid className={styles['feature__grid']}>
          <h2 id='header'>Build &amp; manage distributed teams like no one else.</h2>
          <div>
            {features.map(f => {
              return (
                <article key={f.id}>
                  <img src={f.imgPath} alt='' />
                  <h3>{f.title}</h3>
                  <p>{f.content}</p>
                </article>
              );
            })}
          </div>
        </Grid>
      </Container>
    </section>
  );
}
