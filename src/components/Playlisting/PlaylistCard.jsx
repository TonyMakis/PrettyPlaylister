import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import {
    Card,
    CardContent,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    backgroundColor: '#2b2d2f',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    '&:hover': {
        boxShadow: '11px 11px 6px 0 rgba(0, 0, 0, 0.35), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
     },
    borderRadius: '12px',
    cursor: 'pointer'
  },
  content: {
    textAlign: 'center'
  },
  cover: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '88%',
    marginBottom: '0.5em',
  },
  coverImg: {
    width: '100%',
    borderRadius: '15px',
  },
  infoIcon: {
    height: 20,
    width: 20,
    color: '#fff'
  },
});

export default function PlaylistCard({playlist}) {
  const classes = useStyles();

  return (
    <a href={playlist.imageUrl} target="_blank" rel="noopener noreferrer">
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Typography className="titleText">{playlist.name}</Typography>
            </CardContent>
            <div className={classes.cover}>
                <img className={classes.coverImg} src={playlist.imageUrl} alt={playlist.name} />
            </div>
        </Card>
    </a>
  );
}

PlaylistCard.propTypes = {
    playlist: PropTypes.object,
  };
  
PlaylistCard.defaultProps = {
    playlist: {},
};
  