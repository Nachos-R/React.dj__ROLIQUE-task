import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WelcomePage from 'Components/WelcomePage';
import UploadPageContainer from 'Containers/UploadPageContainer';
import ControllerPageContainer from 'Containers/ControllerPageContainer';

const AppRouter = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={WelcomePage} />
      <Route path="/upload" component={UploadPageContainer} />
      <Route path="/dj-controller" component={ControllerPageContainer} />
    </div>
  </Router>
);

export default AppRouter;
