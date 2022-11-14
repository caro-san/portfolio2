import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Avatar,
  Grid,
  Box,
  Button,
  IconButton,
} from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../images/foto-pri-300x300.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { Icon } from '@iconify/react';
import bitbucketIcon from '@iconify/icons-mdi/bitbucket';

//CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(1),
  },
  title: {
    color: "#b76e79",
    marginBottom: "2rem",
  },
  subtitle: {
    color: "#F1A3AD",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#b76e79",
      "&:hover": {
        fill: "#ff919e",
        fontsize: "1.8rem",
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer} id="box-header">
        <Grid container justify="center" style={{ margin: "2rem auto" }}>
            <Avatar className={classes.avatar} src={avatar} alt="Caro Sanchez" />
        </Grid>

        <Grid className="banner-text">
            <Typography className={classes.title} variant="h2">
            Carolina Sanchez
            </Typography>
            <Typography className={classes.title} variant="h3">
            Programadora Web Front End Jr
            </Typography>

            <Typography className={classes.subtitle} variant="h4">
                <Typed
                    strings={[
                    "ReactJS",
                    "Javascript",
                    "Bootstrap4",
                    "HTML5/CSS3",
                    "NodeJS",
                    "PHP7",
                    "MySQL",
                    "Git",
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </Typography>

            <IconButton aria-label="linkedin" className={classes.root}>
            <a
                href="https://www.linkedin.com/in/carolina-sanchez-m/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#B76E79" }}
            >
                <LinkedInIcon style={{ fontSize: 50 }} />
            </a>
            </IconButton>
            <IconButton aria-label="github" className={classes.root}>
            <a
                href="https://github.com/caro-san"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#B76E79" }}
            >
                <GitHubIcon style={{ fontSize: 50 }} />
            </a>
            </IconButton>

            <IconButton aria-label="bitbucket" className={classes.root}>
            <a
                href="https://bitbucket.org/jeyca0115/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#B76E79" }}
            >
                <Icon icon={bitbucketIcon} color="#b76e79" style={{ fontSize: 50 }} />
            </a>
            </IconButton>

            <IconButton aria-label="whatsapp" className={classes.root}>
            <a
                href="https://api.whatsapp.com/send?phone=5491122556251"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#B76E79" }}
            >
                <WhatsAppIcon style={{ fontSize: 50 }} />
            </a>
            </IconButton>
            <br />
            <Button
            variant="outlined"
            color="#B76E79"
            size="large"
            style={{ marginTop: "2rem" }}
            className={classes.root}
            endIcon={<CloudDownloadIcon style={{ fontSize: 60, color: "#B76E79" }} />}
            >
            <a
                href="http://carosanchez.com.ar/cv/CVCarolina_Sanchez.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration: "none", fontSize: "20px", color: "#B76E79" }}>
                Descargar CV
            </a>
            </Button>
        </Grid>
        </Box>
    );
};

export default Header;
