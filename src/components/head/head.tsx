import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

export function Head({ title = '', description = '' }: HeadProps) {
  return (
    <Helmet
      title={title ? `${title} | MyTeam Multipage App` : undefined}
      defaultTitle='MyTeam Multipage App'
    >
      <meta name='description' content={description} />
    </Helmet>
  );
}
