import React, { Component } from 'react';

/* Redux setup */
import { connect } from 'react-redux';

import { getSpotifyUserData, getSpotifyPlaylists } from '../../redux/actions/spotifyActions';

import '../styles/general.css';

import Playlists from './Playlists.jsx';
import NavBar from '../NavBar';

class Playlister extends Component {
   componentDidMount() {
      const {accessToken, error} = this.props;
      if(accessToken) {
         this.props.getSpotifyUserData(accessToken);
         this.props.getSpotifyPlaylists(accessToken);
      } else { console.log(error); }
   }

   render() {
      const { displayName, profileImgUrl, playlists, totalPlaylists, loadingPlaylists } = this.props;
      return (
         <div id="mainNav">
            <NavBar displayName={displayName} imageUrl={profileImgUrl} />
            <Playlists
               isLoading={loadingPlaylists}
               playlists={playlists}
               totalPlaylists={totalPlaylists}
            />
         </div>
      );
   }
}

const mapStateToProps = (state) => { 
   return {...state.userProfile, ...state.userPlaylists} 
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSpotifyUserData: (token) => { dispatch(getSpotifyUserData(token)); },
        getSpotifyPlaylists: (token) => { dispatch(getSpotifyPlaylists(token)) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlister);
