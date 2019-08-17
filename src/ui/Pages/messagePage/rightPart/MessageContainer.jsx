/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:10th Aug 2019]
 */

//Dependencies
import React, { Component } from 'react';
import { Paper, Typography,withStyles,Avatar, InputBase, Button, IconButton} from '@material-ui/core';
import {KeyboardArrowUp, Attachment, PersonOutline} from '@material-ui/icons'

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
    input:{
        backgroundColor: theme.palette.common.white,
        padding: '9px 15px',
        // position: 'relative',
        borderRadius: 4,
        border:"2px",
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        flex: 1,
        width:"100%",
        height:"80%"
    },
})


class MessageContainer extends Component {
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


            {/* message body */}
            <Paper className ={classes.paper} style ={{overflowY:"auto", overflowX:"hidden", height:"500px"}}>
            <MessageDetail/>
            </Paper>



            {/* writting message part */}
            <Paper className ={classes.paper} style ={{overflowY:"auto", height:"240px", marginTop: '5px'}}>

            {/* subject */}
            <div style ={{marginBottom:"15px", postion:"fixed"}}>
                <Typography variant ="body2">
                    Subject
                    <KeyboardArrowUp style ={{float:"right"}}/>
                </Typography>
            </div>

            {/* testarea */}
            <div style ={{height:"60%", width:"100%"}}>
            <Typography variant ="body2" style ={{height:"100%"}} >
            <div style ={{height:"100%"}} contenteditable="true">

            </div>
            </Typography>
            </div>

            {/* bottom part */}
            <div style ={{position:"sticky"}}>
            <IconButton>
                <PersonOutline />
            </IconButton>
            <IconButton>
                <Attachment />
            </IconButton>
            <Button variant="outlined"  color ="black" size="small">
                    profile
                </Button>

                <Button variant="contained" color="primary" size="small" style = {{float:"right"}}>
                    send
                </Button>
            </div>
            </Paper>
            </div>

        )

    }
};

export default withStyles(styles)(MessageContainer);