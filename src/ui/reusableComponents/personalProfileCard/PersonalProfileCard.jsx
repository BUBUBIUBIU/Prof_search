//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid,Paper,Typography, Button,withStyles } from '@material-ui/core';
import { Plus} from 'mdi-material-ui';

const styles = theme => ({
    paper:{
      ...theme.mixins.gutters(),
      backgroundColor: theme.palette.common.white,
      borderRadius: "4px",
      boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
      // width:"100%"
    }
});

class PersonalProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

            
        };
    }
    render(){
        const {classes,isCompulsory, title } = this.props
        return(
            <div>
            <Paper className = {classes.paper} style ={{marginTop:"2px", padding:"25px 20px 50px 30px"}}>
                {/* title */}
                <div style ={{margin:"10px"}}>
                <Typography variant ="h2">
                    Melbourne University
                </Typography>
                </div>

                {/* subtitle */}
                <div style ={{margin:"10px"}}>
                <Typography variant ="body2">
                    4/4 - master Degree multi medium
                </Typography>
                </div>


                {/* year and location */}
                <div style ={{margin:"10px"}}>
                <Typography variant ="body2">
                    2014-1015
                </Typography>
                </div>

                <div style ={{margin:"25px 10px 25px 10px"}}>
                {/* Describetion */}
                <Typography variant ="body2">
                    This is the describtion
                </Typography>
                </div>

            </Paper>
            </div>
        )

    }
};

//Todo 
PersonalProfileCard.propTypes = {
    isCompulsory: PropTypes.bool,
    title: PropTypes.string,
}

export default withStyles(styles)(PersonalProfileCard);