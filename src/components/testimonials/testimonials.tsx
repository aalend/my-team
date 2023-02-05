import { Container, Grid } from '../ui';
import styles from './testimonial.module.scss';

const testimonials = [
  {
    id: 1,
    avatar: './src/assets/testimonial-avatar-1.jpg',
    name: 'Kady Baker',
    job: 'Product Manager at Bookmark',
    content:
      'The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.',
  },
  {
    id: 2,
    avatar: './src/assets/testimonial-avatar-2.jpg',
    name: 'Aiysha Reese',
    job: 'Founder of Manage',
    content:
      'We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!',
  },
  {
    id: 3,
    avatar: './src/assets/testimonial-avatar-3.jpg',
    name: 'Arthur Clarke',
    job: 'Co-founder of MyPhysio',
    content:
      'Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.',
  },
];

export function Testimonials() {
  return (
    <section aria-labelledby='header' className={styles.testimonials}>
      <Container>
        <Grid className={styles['testimonials__grid']}>
          <h2>
            Delivering real results for top companies. Some of our <span>success stories.</span>
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
