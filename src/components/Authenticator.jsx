import React, { useState } from 'react';

// Components
import LoadSpinner from './LoadSpinner.jsx';

export default function Authenticator() {
    const [isLoading, setLoading] = useState(false);
    let content;

    (isLoading)
        ? content = <LoadSpinner />
        : content =
            <div id="welcome">
                <h1 className="titleText">Pretty Playlister</h1>
                <br />
                <img className="centerBlock mainImg rotate"
                     alt="Spotify Logo Rotating"
                     src={require("./img/spotify.png")}/>
                <br />
                <a href="https://pretty-playlister-auth.herokuapp.com/login">
                    <button
                        id="loginBtn"
                        className="centerBlock"
                        onClick={() => setLoading(!isLoading)}
                    >
                        <i className="fa fa-spotify"></i> Login with Spotify
                    </button>
                </a>
            </div>;

    return (
        <div className="central">{content}</div>
    );
}
