import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import App from './App';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, #d5d8d4 30%, #f5fbf8 100%)',
        width: '100%',
        boxShadow: '12px 15px 20px 0 rgba(46, 61, 73, 0.5)',
        padding: 24,
    },
    margin: {
        height: theme.spacing(5),
    },
}));

export default function PaperSheet() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <App />
            </Paper>
        </div>
    );
}
