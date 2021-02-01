import React from 'react';

// Material-UI's React Library
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function SearchBar() {
    const classes = useStyles();
    const [inputValue, setInputValue] = React.useState('');

    const onSearchChange = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    };

    return (
        <InputBase
            placeholder={"Search…"}
            classes={{ // Override InputBase Default Styles
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={onSearchChange}
        />
    );
}

export default SearchBar;
