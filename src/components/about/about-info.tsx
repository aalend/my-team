import { Container, Grid } from '../ui';
import styles from './about-info.module.scss';

const about = {
  content:
    "We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We'll bring those teams to you.",
};

export function AboutInfo() {
  return (
    <section className={styles['about-info']}>
      <Container>
        <Grid className={styles['about-info__grid']}>
          <h2>About</h2>
          <p>{about.content}</p>
        </Grid>
      </Container>
    </section>
  );
}
