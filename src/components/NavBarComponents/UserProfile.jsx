import React from 'react';

// Material-UI's React Library
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar
} from '@material-ui/core';

import {
    AccountCircle,
    Email as EmailIcon,
    People as PeopleIcon,
    AccountBalance as AccountBalanceIcon,
    Language as LanguageIcon
} from '@material-ui/icons';

// Styles
import useStyles from './styles/UserProfileStyles';

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
