import { Grid } from '@/components/ui';
import styles from './content.module.scss';

const contactFeatures = [
  {
    id: 1,
    title: 'The quality of our talent network',
    imgPath: 'src/assets/feature-img-1.svg',
  },
  {
    id: 2,
    title: 'Usage & implementation of our software',
    imgPath: 'src/assets/feature-img-2.svg',
  },
  {
    id: 3,
    title: 'How we help drive innovation',
    imgPath: 'src/assets/feature-img-3.svg',
  },
];

export function Content() {
  return (
    <section className={styles.content}>
      <h1>Contact</h1>
      <Grid className={styles['content__grid']}>
        <h3 className='highlight'>Ask us about</h3>
        <article>
          {contactFeatures.map(cf => {
            return (
              <div key={cf.id}>
                <img src={cf.imgPath} alt='' />
                <h4>{cf.title}</h4>
              </div>
            );
          })}
        </article>
      </Grid>
    </section>
  );
}
