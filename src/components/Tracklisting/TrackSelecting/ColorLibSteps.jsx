// React & PropType Checking
import React from 'react';
import PropTypes from 'prop-types';

// Material-UI's React Library
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import StepConnector from '@material-ui/core/StepConnector';

import {
    AssignmentTurnedIn as AssignmentTurnedInIcon,
    LibraryMusic as LibraryMusicIcon
} from '@material-ui/icons';

export const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
    },
    active: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    completed: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1,
    },
})(StepConnector);
  
const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#2b2d2f',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});
  
export function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
  
    const icons = {
        1: <LibraryMusicIcon />,
        2: <AssignmentTurnedInIcon />,
    };
  
    return (
        <div className={clsx(classes.root, {
            [classes.active]: active,
            [classes.completed]: completed,
        })}>
            {icons[String(props.icon)]}
        </div>
    );
}
  
ColorlibStepIcon.propTypes = {
    // Whether this step is active.
    active: PropTypes.bool,
    // Mark the step as completed. Is passed to child components.
    completed: PropTypes.bool,
    // The label displayed in the step icon.
    icon: PropTypes.node,
};