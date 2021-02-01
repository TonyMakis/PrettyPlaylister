// React, PropTypes, & clsx
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Material-UI's React Library
import { lighten, makeStyles } from '@material-ui/core/styles';

import {
    Toolbar,
    Typography,
} from '@material-ui/core';

const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      backgroundColor: '#e9e9e9',
      borderTopLeftRadius: '1.2em',
      borderTopRightRadius: '1.2em'
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
}));
  
export default function EnhancedTableToolbar(props) {
    const classes = useToolbarStyles();
    const { numSelected, title } = props;
  
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography
            noWrap
            className={classes.title}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            noWrap
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {`${title} Playlist`}
          </Typography>
        )}
      </Toolbar>
    );
}
  
EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};
  