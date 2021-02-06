// React & Proptypes
import React from 'react';
import PropTypes from 'prop-types';

// Material-UI's React Library
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const tabPanelStyles = makeStyles(() => ({
    boxPadding: {
        padding: 11,
        paddingBottom: 0.5
    },
    copyableTracks: {
        minHeight: 350,
        maxHeight: 350,
        overflow: 'scroll',
        fontSize: '1.2rem'
    }
}));

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = tabPanelStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.boxPadding} p={3}>
          <pre className={classes.copyableTracks}>{children}</pre>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};