/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:9th Aug 2019]
 */

//Dependencies
import React, { Component } from 'react';
import { Paper, Typography,withStyles,Button, AppBar, InputBase, IconButton,Tabs, Tab } from '@material-ui/core';
import {Edit} from '@material-ui/icons/';
import SearchIcon from '@material-ui/icons/Search';

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
    modalButton: {
        float: "right",
        verticalAlign:"middle", 
        color:"#000000",
    },
    input: {
        marginLeft: 8,
        flex: 1,
        verticalAlign: "center"
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        width: 1,
        height: 28,
        margin: 4,
      },
})


class LeftPannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {

            },
            value: "all"
        };
    }

    componentDidMount(){

    }

    handleTab = (event, value) =>{
        this.setState({event, value})
    }

    
    render(){
        const {classes} = this.props
        const {value} = this.state
        return(
            <div>
            <Paper className ={classes.paper} style = {{height:"95px",marginBottom:"5px"}}>
                <Typography variant= "h1">
                    <div style ={{padding:"15px 5px 10px 15px"}}>
                    Message
                    <IconButton className = {classes.modalButton}>
                        <Edit/>
                    </IconButton>
                    </div>
                </Typography>
                <Tabs variant="fullWidth" value={value} onChange={this.handleTab} indicatorColor="primary">
                    <Tab value="all" label="All" />
                    <Tab value="star" label="Star"/>
                </Tabs>

            </Paper >

            <Paper className ={classes.paper} style = {{paddingTop:20}}>
            
            {/* search box */}
            <Paper style ={{marginLeft: 10,backgroundColor: "white", display:"flex"}}>
            <InputBase
              className={classes.input}
              placeholder="Search message"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
            <MessageSnippet/>
            </Paper>
            </div>
        )

    }
};

export default withStyles(styles)(LeftPannel);