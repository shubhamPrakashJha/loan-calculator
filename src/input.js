import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    textField: {
        flexBasis: 200,
    },
}));

export default function FilledInputAdornments(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                id="outlined-adornment-amount"
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                label={props.label}
                value={props.amount}
                InputProps={{
                    startAdornment: <InputAdornment position="start">{props.icon}</InputAdornment>,
                }}
            />
        </div>
    );
}
