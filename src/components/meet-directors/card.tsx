import styles from './card.module.scss';

type DirectorProps = {
  id: number;
  name: string;
  job: string;
  img: string;
};

export function Card({ director }: { director: DirectorProps }) {
  return (
    <article key={director.id} className={styles.card}>
      <div className={styles['card__content']}>
        <img src={director.img} alt={director.name} />
        <div>
          <h3>{director.name}</h3>
          <em>{director.job}</em>
        </div>
      </div>
      <div className={styles['card__button']}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
        </svg>
      </div>
    </article>
  );
}
