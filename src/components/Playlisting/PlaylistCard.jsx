// React, PropType Checking, & Routing
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// Material-UI's React Library
import {
    Card,
    CardContent,
    Typography
} from '@material-ui/core';

// Styles
import useStyles from './styles/PlaylistCardStyles';

export default function PlaylistCard({playlist}) {
  const classes = useStyles();
  return (
    <Link to={`/PrettyPlaylister/playlists/${playlist.id}`} >
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Typography className="titleText" noWrap>{playlist.name}</Typography>
            </CardContent>
            <div className={classes.cover}>
                <img
                  className={classes.coverImg}
                  src={playlist.imageUrl}
                  alt={playlist.name}
                />
            </div>
        </Card>
    </Link>
  );
}

PlaylistCard.propTypes = {
    playlist: PropTypes.object,
};
  
PlaylistCard.defaultProps = {
    playlist: {},
};
  