import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#2b2d2f',
      width: '100%',
    },
    labelOverride: {
      color: '#c4c4c4',
    },
    labelCompleteOverride: {
      color: '#fff !important',
    },
    labelActiveOverride: {
      color: '#fff !important',
      fontWeight: 'bold !important'
    },
    paperOverride: {
      backgroundColor: '#2b2d2f',
    },
    button: {
      marginRight: theme.spacing(1),
      color: '#fff !important'
    },
    disabledButton: {
      marginRight: theme.spacing(1),
      color: '#c4c4c4 !important'
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

export default useStyles;
