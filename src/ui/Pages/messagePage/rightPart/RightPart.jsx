/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:9th Aug 2019]
 */

//Dependencies
import React, { Component } from 'react';
import { Paper, Typography,withStyles,Avatar} from '@material-ui/core';

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
        const {classes, profile ,educations} = this.props
        return(
            <div>
            <Paper className ={classes.paper} style = {{height:"60px",marginBottom:"5px"}}>
                <Typography variant= "h1">
                <div style ={{padding:"10px",float:"left"}}>
                            <Avatar style={{width:"40px", height:"40px", borderRadius:'5px'}}
                                src="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-0/p370x247/50229562_10157302245734739_2837044079051669504_n.jpg?_nc_cat=109&amp;_nc_ht=scontent.fcbr1-1.fna&amp;oh=9af7e41fe295e20bf12794a74726716b&amp;oe=5D53A962" />
                </div>
                <div style ={{padding:"10px", float:"left"}}>
                    <Typography variant ="h2">
                    Artem 
                    </Typography>
                    <Typography variant ="h3">
                    professor
                    </Typography>

                    </div>
                </Typography>
            </Paper >
            <MessageDetail/>
            </div>
        )

    }
};

export default withStyles(styles)(RightPart);