import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { seedLocalDatabase } from '@/api/data/seed.js';
import ThemeProvider from '@/components/ThemeProvider.jsx';
import { store } from '@/state/store.js';

import Router from './Router.jsx';

import './index.css';

// DO NOT REMOVE: Seeds the local storage database with data
seedLocalDatabase();

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Provider store={store}>
      <Router />
    </Provider>
  </ThemeProvider>,
);
