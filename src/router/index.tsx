import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage, IndexPage, Root, About } from '@/features/misc';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <IndexPage /> },
          {
            path: '/about',
            element: <About />,
          },
        ],
      },
    ],
  },
]);

export default router;
