import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render(){
        return(
            <Grid>
                <Cell col={3}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={9}>
                    <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
                    <h5>{this.props.jobCompany}</h5>
                    <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>

        );
    }
}

export default Experience;