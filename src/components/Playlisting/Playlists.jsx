import React from 'react';

// Material-UI's React Library
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// Components
import LoadSpinner from '../LoadSpinner.jsx';
import PlaylistCard from './PlaylistCard.jsx';

const useStyles = makeStyles((theme) => ({
  gridSpacing: {
    padding: '1em',
    [theme.breakpoints.down('sm')]: {
      padding: '0.5em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0.2em',
    },
  },
}));

export default function Playlists({ isLoading, playlists }) {
  const classes = useStyles();
  let content;
  isLoading ? 
    content = <LoadSpinner /> :
    content = 
      <div id="cards">
        <Grid container style={{ padding: '0.5em' }}>
          {playlists.map((playlist) => (
            <Grid item className={classes.gridSpacing}
              xs={6} sm={6} md={4} lg={3} xl={2} key={playlist.id}>
              <PlaylistCard playlist={playlist} />
            </Grid>
          ))}
        </Grid>
      </div>;

  return (
      <div id="playlists">{content}</div>
  );
}
