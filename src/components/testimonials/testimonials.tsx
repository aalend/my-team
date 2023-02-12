import { Container, Grid } from '../ui';
import { testimonials } from './data';
import styles from './testimonial.module.scss';

export function Testimonials() {
  return (
    <section aria-labelledby='header' className={styles.testimonials}>
      <Container>
        <Grid className={styles['testimonials__grid']}>
          <h2 id='header'>
            Delivering real results for top companies. Some of our{' '}
            <span className='highlight'>success stories.</span>
          </h2>
          <div className={styles['testimonials__wrapper']}>
            {testimonials.map(t => {
              return (
                <article key={t.id}>
                  <p>{t.content}</p>
                  <h3>{t.name}</h3>
                  <em>{t.job}</em>
                  <img src={t.avatar} alt={`${t.name} - ${t.job}`} />
                </article>
              );
            })}
          </div>
        </Grid>
      </Container>
    </section>
  );
}
