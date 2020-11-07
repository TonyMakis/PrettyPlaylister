import React from 'react';

import Grid from '@material-ui/core/Grid';

import LoadSpinner from '../LoadSpinner.jsx';
import PlaylistCard from './PlaylistCard.jsx';

export default function Playlists({isLoading, playlists, totalPlaylists}) {
  let content;

  isLoading ? 
    content = <LoadSpinner /> :
    content = 
      <div id="cards">
        <Grid container style={{ padding: '0.5em' }}>
          {playlists.map((playlist) => (
            <Grid item style={{ padding: '1em' }}
              xs={12} sm={6} md={4} lg={3} xl={2} key={playlist.id}>
              <PlaylistCard playlist={playlist} />
            </Grid>
          ))}
        </Grid>
      </div>;

  return (
      <div id="playlists">{content}</div>
  );
}
