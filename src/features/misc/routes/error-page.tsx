import { Link, useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id='error-page'
      style={{
        display: 'grid',
        placeContent: 'center',
        placeItems: 'center',
        height: '100vh',
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to={'/'}
        style={{
          marginTop: '32px',
          color: 'var(--white-200)',
          textDecoration: 'none',
          fontSize: 'var(--step-1)',
        }}
      >
        Back home
      </Link>
    </div>
  );
}
