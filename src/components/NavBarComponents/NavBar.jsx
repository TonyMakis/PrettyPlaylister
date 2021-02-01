// React, Redux, & Routing
import React from 'react';
import { connect } from 'react-redux';
import { logUserOut } from '../../redux/actions/loginActions';
import { useHistory } from "react-router-dom";

// Material-UI's React Library
import {
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Typography,
  MenuItem,
  Menu
} from '@material-ui/core';

import {
  Home as HomeIcon,
  Search as SearchIcon
} from '@material-ui/icons';

// Components & Styles
import UserProfileModal from './UserProfileModal.jsx';
import SearchBar from './SearchBar.jsx';
import useStyles from './styles/NavBarStyles';

function NavBar({searchable, navName, displayName, imageUrl, logUserOut}) {
  const classes = useStyles();
  let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logOutClick = () => {
    logUserOut();
    history.push('/PrettyPlaylister');
  }

  const goHome = () => {
    history.push('/PrettyPlaylister/playlists');
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><UserProfileModal /></MenuItem>
      <MenuItem onClick={logOutClick}>Log Out</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.mainNav}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="return to home"
            onClick={goHome}
          >
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {navName}
          </Typography>
          {(searchable) ? 
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <SearchBar />
            </div> : <></>
          }
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar alt={displayName} src={imageUrl}/>
            </IconButton>
            <Typography onClick={handleProfileMenuOpen} className={classes.userName} variant="h6" noWrap>
              {displayName}
            </Typography>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar alt={displayName} src={imageUrl} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { logUserOut: () => { dispatch(logUserOut()) } };
}

export default connect(null, mapDispatchToProps)(NavBar);
