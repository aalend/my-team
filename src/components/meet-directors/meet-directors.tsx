import { Container, Grid } from '../ui';
import { Card } from './card';
import styles from './meet-directors.module.scss';

const directors = [
  {
    id: 1,
    name: 'Nikita Marks',
    job: 'Founder & CEO',
    img: '/src/assets/nikita-marks.jpg',
  },
  {
    id: 2,
    name: 'Cristian Duncan',
    job: 'Co-founder & COO',
    img: '/src/assets/christian-duncan.jpg',
  },
  {
    id: 3,
    name: 'Cruz Hamer',
    job: 'Co-founder & CTO',
    img: '/src/assets/cruz-hamer.jpg',
  },
  {
    id: 4,
    name: 'Drake Heaton',
    job: 'Business Development Lead',
    img: '/src/assets/drake-haeton.jpg',
  },
  {
    id: 5,
    name: 'Griffin Wise ',
    job: 'Lead Marketing',
    img: '/src/assets/griffin-wise.jpg',
  },
  {
    id: 6,
    name: 'Aden Allan ',
    job: 'Head of Talent',
    img: '/src/assets/aden-allan.jpg',
  },
];

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
