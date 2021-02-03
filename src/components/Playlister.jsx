// React, Redux, Actions, & Routing
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
   getSpotifyUserData,
   getSpotifyPlaylists,
   clearSpotifyTracks
} from '../redux/actions/spotifyActions';

import { clearSelectedTracks } from '../redux/actions/trackSelectionActions';

import { Redirect } from "react-router-dom";

// Components & Styles
import Playlists from './Playlisting/Playlists.jsx';
import NavBar from './NavBarComponents/NavBar.jsx';
import './styles/general.css';

class Playlister extends Component {
   componentDidMount() {
      this.props.clearSpotifyTracks();
      this.props.clearSelectedTracks();
      const {accessToken, error} = this.props;
      if(accessToken) {
         this.props.getSpotifyUserData(accessToken);
         this.props.getSpotifyPlaylists(accessToken);
      } else { console.log(error); }
   }

   render() {
      const {
         isLoggedIn, displayName, profileImgUrl, playlists, totalPlaylists, loadingPlaylists
      } = this.props;

      let content;

      (isLoggedIn)
      ? content = <div id="mainNav">
         <NavBar
            searchable={true}
            navName={`Playlists (${totalPlaylists})`}
            displayName={displayName}
            imageUrl={profileImgUrl}
         />
         <Playlists
            isLoading={loadingPlaylists}
            playlists={playlists}
         />
      </div>
      : content = <Redirect to={'/404'} />;

      return (
         <>{content}</>
      );
   }
}

const mapStateToProps = (state) => { 
   return {...state.login, ...state.userProfile, ...state.userPlaylists} 
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSpotifyUserData: (token) => { dispatch(getSpotifyUserData(token)); },
        getSpotifyPlaylists: (token) => { dispatch(getSpotifyPlaylists(token)); },
        clearSpotifyTracks: () => { dispatch(clearSpotifyTracks()) },
        clearSelectedTracks: () => { dispatch(clearSelectedTracks()) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlister);
