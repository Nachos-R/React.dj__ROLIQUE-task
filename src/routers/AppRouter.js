import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UploadPageContainer from 'Containers/UploadPageContainer';
import ControllerPageContainer from 'Containers/ControllerPageContainer';
import WelcomePageContainer from '../containers/WelcomePageContainer';

const AppRouter = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={WelcomePageContainer} />
      <Route path="/upload" component={UploadPageContainer} />
      <Route path="/dj-controller" component={ControllerPageContainer} />
    </div>
  </Router>
);

export default AppRouter;
