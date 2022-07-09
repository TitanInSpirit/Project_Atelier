import React from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './components/overview/Overview.jsx';
import RatingsAndReviews from './components/ratingsAndReviews/RatingsAndReviews.jsx';
import Questions from './components/questions/Questions.jsx';

const root = createRoot(document.getElementById('root'));

const App = () => {
  return (
    <div>
      <h1> Header: Hello World!!!!!!</h1>
      <Overview />
      <Questions />
      <RatingsAndReviews />
    </div>
  );
};

root.render(<App />);
