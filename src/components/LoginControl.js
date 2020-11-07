import React, { Component } from 'react';

/* Redux setup */
import { connect } from 'react-redux';

import { logUserIn } from '../redux/actions/loginActions';
import { getHashParams, objectIsEmpty, cleanUrlParams } from '../urlParsing';

import Authenticator from './Authenticator.jsx';
import Playlister from './Playlisting/Playlister.jsx';

import './styles/general.css';

class LoginControl extends Component { 
    componentDidMount() {
        let params = getHashParams();
        if(!objectIsEmpty(params)) {
            cleanUrlParams();
            this.props.logUserIn(params);
        }
    }

    render() {
        const { isLoggedIn, accessToken, error } = this.props;
        
        let dynamicLogin;
        
        if(!isLoggedIn) {
            dynamicLogin = <Authenticator />
        } else {
            dynamicLogin = 
            <div id="playlister">
                <Playlister accessToken={accessToken} error={error} />
            </div>
        }

        return (
            <div id="loginCtrl">{dynamicLogin}</div>
        );
    }
}

const mapStateToProps = (state) => { return {...state.login} };

const mapDispatchToProps = (dispatch) => {
    return {
        logUserIn: (loginData) => { dispatch(logUserIn(loginData)); },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginControl);
