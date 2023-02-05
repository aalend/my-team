import { Container, Grid } from '../ui';
import styles from './feature.module.scss';

const features = [
  {
    id: 1,
    imgPath: './src/assets/feature-img-1.svg',
    title: 'Experienced Individuals',
    content:
      'Our network is made up of highly experienced professionals who are passionate about what they do.',
  },
  {
    id: 2,
    imgPath: './src/assets/feature-img-2.svg',
    title: 'Easy to Implement',
    content:
      'Our processes have been refined over years of implementation meaning our teams always deliver.',
  },
  {
    id: 3,
    imgPath: './src/assets/feature-img-3.svg',
    title: 'Enhanced Productivity',
    content:
      'Our customized platform with in-built analytics helps you manage your distributed teams.',
  },
];

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
