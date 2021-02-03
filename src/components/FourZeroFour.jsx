// React & Routing
import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Material-UI's React Library
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    errorDisk: {
      [theme.breakpoints.down('md')]: {
        width: '40vw',
      },
      [theme.breakpoints.down('xs')]: {
        width: '50vw',
      },
      [theme.breakpoints.down('xs')]: {
        width: '87vw',
      },
    },
  });

class FourZeroFour extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <div id='error' className={'central-404'}>
                    <h1 className="bigTitleText">ERROR!</h1>
                    <img className={`centerBlock errorDiskImg rotateCCW ${classes.errorDisk}`}
                     alt="Record Disk 404, Rotating"
                     src={require("./img/Disk.png")}
                    />
                    <Link to={'/'} >
                        <button
                            id="loginBtn"
                            className="centerBlock"
                        >
                            Back to Home!
                        </button>
                    </Link>
                </div>
            </>
        );
    }
}

export default withStyles(styles)(FourZeroFour);
