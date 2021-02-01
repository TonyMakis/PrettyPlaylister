// React
import React from 'react';

// Material-UI's React Library
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Components & Styles
import TracksGrid from './TrackSelectingGrid/TracksGrid.jsx';
import LoadSpinner from '../../LoadSpinner.jsx';
import { ColorlibConnector, ColorlibStepIcon } from './ColorLibSteps.jsx'
import useStyles from './styles/TrackSelectStepperStyles';

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
      return 'Copy!';
    default:
      return 'WHAT NOW!';
  }
}

export default function TrackSelectStepper({ playlist, loadingTracks, tracks }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
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
              <Button
                variant="contained"
                color={'secondary'}
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}