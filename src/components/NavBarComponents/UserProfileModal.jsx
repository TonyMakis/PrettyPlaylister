// React & Redux
import React from 'react';
import { connect } from 'react-redux';

// Material-UI's React Library
import {
  Modal,
  Backdrop,
  Fade
} from '@material-ui/core';

// Components & Styles
import UserProfile from './UserProfile.jsx';
import useStyles from './styles/UserProfileModalStyles';

function UserProfileModal({
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

const mapStateToProps = (state) => { return {...state.userProfile} };

export default connect(mapStateToProps, null)(UserProfileModal);
