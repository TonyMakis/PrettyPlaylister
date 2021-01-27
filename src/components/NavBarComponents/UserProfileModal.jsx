import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { connect } from 'react-redux';

import UserProfile from './UserProfile.jsx';

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

function TransitionsModal({
  displayName, country, email, numFollowers, productType, profileImgUrl
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div type="button" onClick={handleOpen}>
        Profile
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h4 id="transition-modal-title" className={classes.header}>Your Profile:</h4>
            <UserProfile 
              displayName={displayName}
              country={country}
              email={email}
              numFollowers={numFollowers}
              productType={productType}
              profileImgUrl={profileImgUrl}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => { 
  return {...state.userProfile} 
};

export default connect(mapStateToProps, null)(TransitionsModal);
