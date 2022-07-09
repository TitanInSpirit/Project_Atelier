import React from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './components/overview/Overview.jsx';
import RatingsAndReviews from './components/ratingsAndReviews/RatingsAndReviews.jsx';
import '../public/stylesheets/style.css'
// require('dotenv').config()

const root = createRoot(document.getElementById('root'));

const App = () => {
  return (
    <div>
      <h1> Header: Hello World!!!!!!</h1>
      <Overview />
      <RatingsAndReviews />
    </div>
  );
};

root.render(<App />);
