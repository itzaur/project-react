import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Route from '@/components/Route.jsx';
import HomePage from '@/pages/HomePage.jsx';
import ListingDetailsPage from '@/pages/ListingDetailsPage.jsx';
import ListingFavoritesPage from '@/pages/ListingFavoritesPage.jsx';
import NotFoundPage from '@/pages/NotFoundPage.jsx';
import SignInPage from '@/pages/SignInPage.jsx';

import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/signin',
        element: (
          <Route>
            <SignInPage />
          </Route>
        ),
      },
      {
        path: '/',
        element: (
          <Route>
            <HomePage />
          </Route>
        ),
      },
      {
        path: '/listings/:listingId',
        element: (
          <Route>
            <ListingDetailsPage />
          </Route>
        ),
      },
      {
        path: '/favorites',
        element: (
          <Route>
            <ListingFavoritesPage />
          </Route>
        ),
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
