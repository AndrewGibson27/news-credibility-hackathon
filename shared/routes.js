import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app/App';
import Preferences from './components/preferences/Preferences';
import Quiz from './components/quiz/Quiz';
import Results from './components/results/Results';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Preferences} />
    <Route path='preferences' component={Preferences} />
    <Route path='quiz' component={Quiz} />
    <Route path='results' component={Results} />
  </Route>
);
