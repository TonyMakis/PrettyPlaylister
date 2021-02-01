// React, Redux, and Routing
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logUserIn } from '../redux/actions/loginActions';
import { Redirect } from "react-router-dom";

// Components, Styles, and Scripts
import Authenticator from './Authenticator.jsx';
import './styles/general.css';
import { getHashParams, objectIsEmpty, cleanUrlParams } from '../urlParsing';

class LoginControl extends Component {
    componentDidMount() {
        let params = getHashParams();
        if(!objectIsEmpty(params)) {
            cleanUrlParams();
            this.props.logUserIn(params);
        }
    }

    render() {
        const { isLoggedIn } = this.props;
        let dynamicLogin;

        (!isLoggedIn)
            ? dynamicLogin = <Authenticator />
            : dynamicLogin = <Redirect to={'/PrettyPlaylister/playlists'} />;

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
