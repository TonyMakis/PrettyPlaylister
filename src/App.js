// React & Routing
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import LoginControl from './components/LoginControl.jsx';
import Playlister from './components/Playlister.jsx';
import TrackLister from './components/TrackLister.jsx';
import FourZeroFour from './components/FourZeroFour.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={LoginControl} />
          <Route exact path='/playlists' component={Playlister}/>
          <Route
            path={`/playlists/:playlistId`}
            render={({match}) => (
              <TrackLister playlistId={match.params.playlistId}/>
            )}
          />
          <Route component={FourZeroFour} />
      </Switch>
    </Router>
  );
}
