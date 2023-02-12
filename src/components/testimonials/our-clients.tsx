import { Container, Grid } from '../ui';
import { logoImages } from './data';
import styles from './our-clients.module.scss';

export function OurClients() {
  return (
    <section aria-labelledby='header' className={styles['our-clients']}>
      <Container>
        <h2 id='header'>Some of our clients</h2>
        <Grid className={styles['our-clients__grid']}>
          {logoImages.map(logo => {
            return <img key={logo.id} src={logo.path} alt={logo.title} />;
          })}
        </Grid>
      </Container>
    </section>
  );
}
