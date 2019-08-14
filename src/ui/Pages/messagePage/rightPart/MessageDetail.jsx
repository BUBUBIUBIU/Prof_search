/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:10th Aug 2019]
 */

//Dependencies
import React, { Component } from 'react';
import { Paper, Typography,withStyles,Avatar, InputBase} from '@material-ui/core';
import {KeyboardArrowUp} from '@material-ui/icons'

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
            <Paper className ={classes.paper} style ={{overflow:"auto", height:"500px"}}>
            s
            </Paper>

            <Paper className ={classes.paper} style ={{overflow:"auto", height:"200px", marginTop: '5px'}}>
            <div style ={{marginBottom:"15px"}}>
                <Typography variant ="body2">
                    Subject
                    <KeyboardArrowUp style ={{float:"right"}}/>
                </Typography>
            </div>
            <div style ={{height:"80%", width:"80%"}}>
                {/* <InputBase  className={classes.input}/>
             */}
             <textarea name="message" id="message"style = {{borderWidth: 0, width:"80%", height:"80%"}}>

             </textarea>
            </div>
            <div>
             
            </div>
            </Paper>
            </div>

        )

    }
};

export default withStyles(styles)(MessageDetail);