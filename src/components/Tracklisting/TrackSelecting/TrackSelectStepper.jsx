// React & Redux
import React from 'react';
import { connect } from 'react-redux';

// Material-UI's React Library
import {
  Stepper,
  Step,
  StepLabel,
  Snackbar,
  Button
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

// Components, Scripts, & Styles
import TracksGrid from './TrackSelectingGrid/TracksGrid.jsx';
import LoadSpinner from '../../LoadSpinner.jsx';
import CopyFormatSelect from '../TracksCopying/CopyFormatSelect.jsx';
import { ColorlibConnector, ColorlibStepIcon } from './ColorLibSteps.jsx'
import useStyles from './styles/TrackSelectStepperStyles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function getSteps() {
  return ['Select', 'Copy'];
}

function getStepContent(step, playlist, loadingTracks, tracks) {
  switch (step) {
    case 0:
      return (loadingTracks)
        ? <LoadSpinner />
        : <TracksGrid playlist={playlist} tracks={tracks} />;
    case 1:
      return <CopyFormatSelect tracks={tracks} />;
    default:
      return <LoadSpinner />;
  }
}

function TrackSelectStepper({ playlist, loadingTracks, tracks, clipCopyData }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep} 
        connector={<ColorlibConnector />}
        className={classes.paperOverride}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              classes={{
                label: classes.labelOverride,
                active: classes.labelActiveOverride,
                completed: classes.labelCompleteOverride
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {(
          <div>
            {getStepContent(activeStep, playlist, loadingTracks, tracks)}
            <div>
              <Button
                disabled={activeStep === 0}
                variant="contained"
                color={'secondary'}
                onClick={handleBack}
                className={activeStep === 0 ? classes.disabledButton : classes.button}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 
                ? <Button
                    id="copyBtn"
                    data-clipboard-text={clipCopyData}
                    variant="contained"
                    color={'secondary'}
                    className={classes.button}
                    onClick={handleOpen}
                  >
                    Copy
                  </Button>
                : <Button
                    variant="contained"
                    color={'secondary'}
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
              }
            </div>
          </div>
        )}
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} >
          Data Copied Successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

const mapStateToProps = (state) => { 
  return { ...state.clipboardCopy }
};

export default connect(mapStateToProps, null)(TrackSelectStepper);
