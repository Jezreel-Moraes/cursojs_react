import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Router from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  );
}
