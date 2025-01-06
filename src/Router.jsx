import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
        element: <SignInPage />,
      },
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/listings/:listingId',
        element: <ListingDetailsPage />,
      },
      {
        path: '/favorites',
        element: <ListingFavoritesPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
