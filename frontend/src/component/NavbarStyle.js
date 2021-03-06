import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));
export default function NavbarStyle() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Link href="/" style={{ textDecorationLine: 'none', color: 'white', cursor: 'pointer' }}>
                        <Typography variant="h6" color="inherit">
                            College List
                        </Typography>
                    </Link>
                    <Link href="/addcollege" style={{ textDecorationLine: 'none', color: 'white', cursor: 'pointer' }}>
                        <Typography variant="h7" color="inherit" style={{ marginLeft: '1vw' }}>
                            Add-College
                        </Typography>
                    </Link>
                    <Link href="/addstudent" style={{ textDecorationLine: 'none', color: 'white', cursor: 'pointer' }}>
                        <Typography variant="h7" color="inherit" style={{ marginLeft: '1vw' }}>
                            Add-Student
                        </Typography>
                    </Link>
                    <Link href="/searchcollege" style={{ textDecorationLine: 'none', color: 'white', cursor: 'pointer' }}>
                        <Typography variant="h7" color="inherit" style={{ marginLeft: '1vw' }}>
                            Search-College
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div >
    )
}
