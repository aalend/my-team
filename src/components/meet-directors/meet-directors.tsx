import { Container, Grid } from '../ui';
import { Card } from './card';
import { directors } from './data';
import styles from './meet-directors.module.scss';

export function MeetDirectors() {
  return (
    <section className={styles['meet-directors']}>
      <Container>
        <h2>Meet the directors</h2>
        <Grid className={styles['meet-directors__grid']}>
          {directors.map(d => {
            return <Card key={d.id} director={d} />;
          })}
        </Grid>
      </Container>
    </section>
  );
}
