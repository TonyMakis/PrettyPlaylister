// React & Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSpotifyTracks } from '../../redux/actions/spotifyActions';

// Material-UI's React Library
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';

// Components
import TrackSelectStepper from './TrackSelecting/TrackSelectStepper.jsx';

const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        backgroundColor: '#2b2d2f',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        '&:hover': {
            boxShadow: '11px 11px 6px 0 rgba(0, 0, 0, 0.35), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
         },
        borderRadius: '12px',
        cursor: 'pointer',
        padding: '0em',
        margin: '1em'
    },
});

class TracksCard extends Component {
    componentDidMount() {
        const {accessToken, error, playlist } = this.props;
        if(accessToken) {
            this.props.getSpotifyTracks({
                token: accessToken,
                playlistId: playlist.id
            });
        } else { console.log(error); }
    }

    render() {
        const { classes, playlist, loadingTracks, tracks } = this.props;
        return(
            <Card className={classes.root}>
                <CardContent>
                    <TrackSelectStepper
                    playlist={playlist}
                    loadingTracks={loadingTracks}
                    tracks={tracks}
                />
                </CardContent>
            </Card>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSpotifyTracks: (playlistData) => { 
            dispatch(getSpotifyTracks(playlistData));
        }
    };
}

const mapStateToProps = (state) => { 
    return {...state.login, ...state.playlistTracks } 
 };

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TracksCard));