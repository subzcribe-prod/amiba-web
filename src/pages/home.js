import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    );
}