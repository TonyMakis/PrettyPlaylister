import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    textAlign: 'center',
    padding: '1em',
    [theme.breakpoints.down('sm')]: {
      padding: '0.8em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0.5em',
    },
  },
  cover: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '88%',
    marginBottom: '0.5em'
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
}));

export default useStyles;
