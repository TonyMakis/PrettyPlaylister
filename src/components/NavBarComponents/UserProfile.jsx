import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar
} from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PeopleIcon from '@material-ui/icons/People';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1em',
    width: '100%',
    maxWidth: 360,
    color: theme.palette.common.white,
    backgroundColor: '#2b2d2f',
  },
  profileImg: {
    width: '50%',
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

export default function UserProfile({
    displayName, country, email, numFollowers, productType, profileImgUrl
}) {
  const classes = useStyles();

  return (
    <div id="userProfile">
        <img className={classes.profileImg} src={profileImgUrl} alt={displayName}/>
        <List className={classes.root}>
            <ListItem className={classes.listItem}>
                <ListItemAvatar>
                    <AccountCircle className={classes.icon} />
                </ListItemAvatar>
                <em className={classes.profileItemInfo}>username</em>
                <ListItemText primary={displayName} />
            </ListItem>
            <ListItem className={classes.listItem}>
                <ListItemAvatar>
                    <EmailIcon className={classes.icon} />
                </ListItemAvatar>
                <em className={classes.profileItemInfo}>email</em>
                <ListItemText primary={email}/>
            </ListItem>
            <ListItem className={classes.listItem}>
                <ListItemAvatar>
                    <PeopleIcon className={classes.icon} />
                </ListItemAvatar>
                <em className={classes.profileItemInfo}>followers</em>
                <ListItemText primary={numFollowers}/>
            </ListItem>
            <ListItem className={classes.listItem}>
                <ListItemAvatar>
                    <AccountBalanceIcon className={classes.icon} />
                </ListItemAvatar>
                <em className={classes.profileItemInfo}>account type</em>
                <ListItemText primary={productType === 'open' ? 'Free' : 'Premium'}/>
            </ListItem>
            <ListItem className={classes.listItem}>
                <ListItemAvatar>
                    <LanguageIcon className={classes.icon} />
                </ListItemAvatar>
                <em className={classes.profileItemInfo}>country</em>
                <ListItemText primary={country}/>
            </ListItem>
        </List>
    </div>
  );
}
