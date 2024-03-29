import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import Footer from './Footer';
import {AppBar, Toolbar, ListItem, IconButton, ListItemText, 
    Avatar, Divider, List, Typography, Box, ListItemIcon} from '@material-ui/core';
import { Home, Apps, Menu, PermIdentity} from '@material-ui/icons';
import avatar from '../images/foto-pri-300x300.png';

// CSS STYLES
const useStyles = makeStyles(theme => ({
    menuSliderContainer:{
        width: 325,
        background: "#08171E",
        height:"100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem:{
        color: "#E0BCBF",
    },
}));

const menuItems = [
    {
        listIcon : <Home style={{ fontSize: 30}}/>,
        listText: "Inicio",
        listPath: "/"
    },

    {
        listIcon : <PermIdentity style={{ fontSize: 30}}/>,
        listText: "Resumen",
        listPath: "/resume"
    },

    {
        listIcon : <Apps style={{ fontSize: 30}}/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    }
]

const Navbar = () => {
    const [ state, setState ] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({
            ...state, 
            [slider]:open
        });
    };

    const classes = useStyles();

    const sideList = slider => (

        <Box 
            className={classes.menuSliderContainer} 
            component='div'
            onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt='Caro Sanchez'/>
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>
                ))}
                <ListItem>
                    <ListItemIcon>
                    </ListItemIcon>
                </ListItem>
            </List>
        </Box>
    );

    return (
    <> 
        
        <Box component='nav'>
            <AppBar position="sticky" style={{background:"#05070B"}}>

        

                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <Menu 
                            style={{color: '#E0BCBF', fontSize:"35px"}}
                        />
                    </IconButton>
                    <Typography variant="h4" style={{color:'#b76e79'}}>
                        Menu
                    </Typography>

                    <MobilRightMenuSlider
                        anchor="right"
                        open={state.right}
                        onClose={toggleSlider("right", false)}
                    >
                        {sideList("right")}
                        <Footer />
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
    </>
    )
}

export default Navbar;
