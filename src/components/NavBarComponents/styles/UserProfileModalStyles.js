import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      color: '#fff',
      backgroundColor: '#2b2d2f',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: '0px'
    },
    header: {
      display: 'block',
      fontSize: '1.5em',
      fontWeight: 'bold',
      textShadow: '0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)',
      textAlign: 'center',
      color: '#fff',
      marginTop: '0.5em',
      paddingBottom: '0.5em'
    }
}));

export default useStyles;
