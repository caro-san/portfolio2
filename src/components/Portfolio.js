import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Box, Grid, Card, CardActionArea, CardActions, CardContent,
        CardMedia, Button, Typography} from '@material-ui/core'
import Navbar from './Navbar';
import project1 from '../images/images/html-css-javascript-lg.jpg';
import project2 from '../images/images/javascript-fullstack.jpg';
import project3 from '../images/images/mern-stack.jpg';
import project4 from '../images/images/react-redux.jpg';

const useStyles = makeStyles({
    mainContainer:{
        background: "#233",
        height: "100%"
    },
    cardContainer:{
        maxWidth: 345,
        margin:"5rem auto"
    }
})

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center">
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                component="img" 
                                alt="project1" 
                                height="140" 
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                There are many variations of passages of Lorem Ipsum available, 
                                but the majority have suffered alteration in some form, by injected 
                                humour, or randomised words which don't look even slightly believable. 
                                If you are going to use a passage of Lorem Ipsum, you need to be sure 
                                there isn't anything embarrassing hidden in the middle of text.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">    
                                    Share
                                </Button>
                                <Button size="small" color="primary">    
                                    Live Demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>

                    {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                component="img" 
                                alt="project2" 
                                height="140" 
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                There are many variations of passages of Lorem Ipsum available, 
                                but the majority have suffered alteration in some form, by injected 
                                humour, or randomised words which don't look even slightly believable. 
                                If you are going to use a passage of Lorem Ipsum, you need to be sure 
                                there isn't anything embarrassing hidden in the middle of text.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">    
                                    Share
                                </Button>
                                <Button size="small" color="primary">    
                                    Live Demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>

                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                component="img" 
                                alt="project3" 
                                height="140" 
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                There are many variations of passages of Lorem Ipsum available, 
                                but the majority have suffered alteration in some form, by injected 
                                humour, or randomised words which don't look even slightly believable. 
                                If you are going to use a passage of Lorem Ipsum, you need to be sure 
                                there isn't anything embarrassing hidden in the middle of text.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">    
                                    Share
                                </Button>
                                <Button size="small" color="primary">    
                                    Live Demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>

                {/* Project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                component="img" 
                                alt="project4" 
                                height="140" 
                                image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                There are many variations of passages of Lorem Ipsum available, 
                                but the majority have suffered alteration in some form, by injected 
                                humour, or randomised words which don't look even slightly believable. 
                                If you are going to use a passage of Lorem Ipsum, you need to be sure 
                                there isn't anything embarrassing hidden in the middle of text.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">    
                                    Share
                                </Button>
                                <Button size="small" color="primary">    
                                    Live Demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>


            </Grid>
        </Box>
    )
}

export default Portfolio;
