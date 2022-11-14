import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation,  IconButton} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles ({
    root:{
        "& .MuiBottomNavigationAction-root":{
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root":{
            fill: "#b76e79",
            "&:hover":{
                fill:"#ff919e",
                fontsize:"1.8rem"
            }
        }
    },
});


const Footer = () => {

    const classes = useStyles()

    return (
        <BottomNavigation width="auto" style={{background:"#05070B"}}>
            <IconButton aria-label="linkedin" className={classes.root} >
                    <a 
                        href="https://www.linkedin.com/in/carolina-sanchez-m/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{textDecoration:"none", color: "#B76E79", margin:"1rem"}}>
                            <LinkedInIcon style={{ fontSize: 30}} />
                    </a>
                </IconButton>
                <IconButton aria-label="github" className={classes.root}>
                    <a 
                        href="https://github.com/caro-san" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{textDecoration:"none", color: "#B76E79", margin:"1rem"}}>
                            <GitHubIcon style={{ fontSize: 30}} />
                    </a>
                </IconButton>

                <IconButton aria-label="whatsapp" className={classes.root}>
                    <a 
                        href="https://api.whatsapp.com/send?phone=5491122556251" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{textDecoration:"none", color: "#B76E79", margin:"1rem"}}>
                            <WhatsAppIcon style={{ fontSize: 30}} />
                    </a>
                </IconButton>
            </BottomNavigation>
    )
}

export default Footer;
