// React & Redux
import React from 'react';
import { connect } from 'react-redux';

// Components & Styles
import NavBar from './NavBarComponents/NavBar.jsx';
import TracksCard from './Tracklisting/TracksCard.jsx';
import './styles/general.css';

function TrackLister({ playlistId, displayName, profileImgUrl, playlists }) {
    const playlist = playlists.find(({id}) => id === playlistId);
    return (
        <div id="mainNav">
            <NavBar
                searchable={false}
                navName={`Tracks (${playlist.numTracks})`}
                displayName={displayName}
                imageUrl={profileImgUrl}
            />
            <TracksCard playlist={playlist} />
        </div>
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
