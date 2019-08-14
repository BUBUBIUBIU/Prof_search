/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:9th Aug 2019]
 */

//Dependencies
import React, { Component } from 'react';
import { Paper, Typography,withStyles,Avatar, IconButton} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import {StarRate, MoreHoriz} from '@material-ui/icons';

//UI
import MessageDetail from './MessageDetail'



const styles = theme => ({
    paper:{
      ...theme.mixins.gutters(),
      backgroundColor: theme.palette.common.white,
      borderRadius: "2px",
      boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
      width:"800px",
      // width:"100%"
    },
    iconButton:{
        float:"right", 
        margin:"20 5 10 3", 
        display:"inline-block"

    }
})


class RightPart extends Component {
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
        const {classes} = this.props
        return(
            <div>
            <Paper className ={classes.paper} style = {{height:"60px",marginBottom:"5px", position:"sticky"}}>
                <Typography variant= "h1">
                <div style ={{padding:"10px",float:"left"}}>
                            <Avatar style={{width:"40px", height:"40px", borderRadius:'5px'}}
                                src="https://pic2.zhimg.com/80/v2-d888ae1c0639ddcf1a7fdabf199a36a3_hd.jpg" />
                </div>
                <div style ={{padding:"10px", float:"left"}}>
                    <Typography variant ="h2">
                    Artem 
                    </Typography>
                    <Typography variant ="h3">
                    professor | Melbourne University
                    </Typography>
                </div>
                </Typography>
                {/* <div style ={{float:"right", margin:"20 5 10 3", display:"inline-block"}}> */}
                <IconButton className ={classes.iconButton}>
                <MoreHoriz />
                </IconButton>
                <IconButton className ={classes.iconButton}>
                <StarRate />
                </IconButton>
                {/* </div> */}
            </Paper >
            <MessageDetail/>
            </div>
        )

    }
};

export default withStyles(styles)(RightPart);