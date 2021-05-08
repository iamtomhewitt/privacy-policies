import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GhostHunter from './policies/GhostHunter';
import JetDashVr from './policies/JetDashVr';
import VrTurretDefence from './policies/VrTurretDefence';
import PageNotFound from './PageNotFound';

const App = () => (
  <Switch>
    <Route path="/ghost-hunter-vr" exact render={() => <GhostHunter />} />
    <Route path="/jet-dash-vr" exact render={() => <JetDashVr />} />
    <Route path="/vr-turret-defence" exact render={() => <VrTurretDefence />} />

    { /* Catch all unmatched routes */}
    <Route component={PageNotFound} />
  </Switch>
);

export default App;
