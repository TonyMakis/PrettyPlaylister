// React, Redux, & Routing
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

// Components & Styles
import NavBar from './NavBarComponents/NavBar.jsx';
import TracksCard from './Tracklisting/TracksCard.jsx';
import './styles/general.css';

function TrackLister({ playlistId, displayName, profileImgUrl, playlists }) {
    let history = useHistory();
    const playlist = playlists.find(({id}) => id === playlistId);
    let content = <></>;
    if(playlist) {
        content = <div id="mainNav">
            <NavBar
                searchable={false}
                navName={`Tracks (${playlist.numTracks})`}
                displayName={displayName}
                imageUrl={profileImgUrl}
            />
            <TracksCard playlist={playlist} />
        </div>;
    } else {
        history.push('/');
    }

    return (
        <>{content}</>
   );
}

function mapStateToProps(state) { 
    return {
        playlists: state.userPlaylists.playlists,
        displayName: state.userProfile.displayName,
        profileImgUrl: state.userProfile.profileImgUrl
    }
}

export default connect(mapStateToProps, null)(TrackLister);
