/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:9th Aug 2019]
 */

//Dependencies
import React, { Component } from 'react';
import { Paper, Typography,withStyles } from '@material-ui/core';

//UI
import MessageSnippet from './MessageSnippet'



const styles = theme => ({
    paper:{
      ...theme.mixins.gutters(),
      backgroundColor: theme.palette.common.white,
      borderRadius: "2px",
      boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
      width:"340px",
      // width:"100%"
    },
})


class LeftPannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {

            },
        };
    }

    componentDidMount(){

    }

    
    render(){
        const {classes, profile,educations} = this.props
        return(
            <div>
            <Paper className ={classes.paper} style = {{height:"60px",marginBottom:"5px"}}>
                <Typography variant= "h1">
                    <div style ={{padding:"15px 20px 10px 20px"}}>
                    Message
                    </div>
                </Typography>
            </Paper >
            <Paper className ={classes.paper}>
            <MessageSnippet/>
            </Paper>
            </div>
        )

    }
};

export default withStyles(styles)(LeftPannel);