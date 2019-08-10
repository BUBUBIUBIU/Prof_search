/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:10th Aug 2019]
 */

//Dependencies
import React, { Component } from 'react';
import { Paper, Typography,withStyles,Avatar} from '@material-ui/core';

//UI




const styles = theme => ({
    paper:{
      ...theme.mixins.gutters(),
      backgroundColor: theme.palette.common.white,
      borderRadius: "2px",
      boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
      width:"800px",
      // width:"100%"
    },
})


class MessageDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {

            },
        };
    }


    
    render(){
        const {classes} = this.props
        return(
            <div>
            <Paper className ={classes.paper} style ={{overflowY:"scroll", height:"500px"}}>
            s
            </Paper>
            <Paper className ={classes.paper} style ={{overflowY:"scroll", height:"200px", marginTop: '5px'}}>
            <div style = {{float:"left"}}>
                <Typography variant ="body2">
                    Subject
                </Typography>
            </div>
            <div>

            </div>

            </Paper>
            </div>

        )

    }
};

export default withStyles(styles)(MessageDetail);