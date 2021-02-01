import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '1em',
      width: '100%',
      maxWidth: 360,
      color: theme.palette.common.white,
      backgroundColor: '#2b2d2f',
    },
    profileImg: {
      width: '45%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '-2em',
      display: 'block',
      borderRadius: '100px',
      border: '1px solid black',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    profileItemInfo: {
      position: 'absolute',
      color: 'lightgray',
      fontSize: 'medium',
      marginLeft: '3.5em',
      marginBottom: '3em'
    },
    listItem: {
        marginBottom: '0.5em'
    }
}));  

export default useStyles;
