import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/styles';

const useStyles= makeStyles({
    particlesCanva:{
        position:"absolute",
        opacity:"0.3"
    }
})

const Home = () => {
    const classes = useStyles();
    return (
        <>
            
            <Navbar />
            <Header />

            <Particles 
            id="particles"
            canvasClassName={classes.particlesCanva}
                params={{
                    "particles":{
                        "number":{
                            "value":60,
                            "density":{
                                "enable":true,
                                "value_area": 1500
                            },
                        },
                        "color": {
                            "value": "#fff",
                            "animation": {
                            "enable": false,
                            "speed": 20,
                            "sync": true
                            }
                        },
                        "shape":{
                            "type": "circle",
                        },
                        "stroke":{
                            "width": 1,
                            "color":{
                                "value": "#c60156"}
                        },
                        "size":{
                            "value":5,
                            "random":true,
                            "animation":{
                                "enable":true,
                                "speed":10,
                                "size_min":0.1,
                                "sync":false
                            }
                        },
                        "opacity":{
                            "value":1,
                            "random":true,
                            "anim":{
                                "enable":true,
                                "speed":1,
                                "opacity_min":0.1,
                                "sync":true
                            }
                        },
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "push": {
                                "quantity": 1
                            },
                        }
                    },
                    "retina_detect": true
                }}
            />
        </>
    )
}

export default Home
