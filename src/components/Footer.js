import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const useStyles = makeStyles ({
    root:{
        "& .MuiBottomNavigationAction-root":{
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root":{
            fill: "tan",
            "&:hover":{
                fill:"tomato",
                fontsize:"1.8rem"
            }
        }
    },
});


const Footer = () => {

    const classes = useStyles()

    return (
        <BottomNavigation width="auto" style={{background:"#222"}}>
            <BottomNavigationAction 
                className={classes.root}
                style={{padding:0}}
                icon={<LinkedInIcon/>}
                href="https://www.linkedin.com/in/carolina-sanchez-m/"

            />
            <BottomNavigationAction 
                className={classes.root}
                style={{padding:0}}
                icon={<GitHubIcon/>}
                href="https://github.com/caro-san"
            />
            <BottomNavigationAction 
                className={classes.root}
                style={{padding:0}}
                icon={<WhatsAppIcon/>}
                href="https://api.whatsapp.com/send?phone=5491122556251"
                
            />
            <BottomNavigationAction 
                className={classes.root}
                style={{padding:0}}
                icon={<PictureAsPdfIcon/>}
                href="http://deluxe.com.ar/cv/CarolinaSanchez.pdf"
            />
        </BottomNavigation>
    )
}

export default Footer;
