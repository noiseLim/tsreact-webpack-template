import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';

export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
}

const routes: RouteObject[] = [
  {
    path: '*',
    element: <HomePage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
];

export default routes;
