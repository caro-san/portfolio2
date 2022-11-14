import React, { Component } from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#B76E79',
  },
}))(LinearProgress);

class Skills extends Component{
    render(){
        return(
            <Grid item xs={12} >
                    <div style={{display: 'flex', fontSize:'16px', margin:"1rem", flexGrow:1}} >
                    {this.props.skill} 
                    <BorderLinearProgress 
                        style={{margin: 'auto', width:'75%'}}  
                        value={this.props.progress}
                        variant="determinate"
                    />
                    </div>
            </Grid>
            
        );
    }

}

export default Skills;