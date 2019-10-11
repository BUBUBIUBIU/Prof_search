/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Shaochuan Luo], [date:1th Sep 2019]
 */
//
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Paper,Typography,Collapse, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase, AppBar, Tab, Tabs, Divider, CardContent} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus, Close } from 'mdi-material-ui';


//UI
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox';
import P1 from './PublicationJournal';
import  CardHeader from '../CardHeader'
import PublicationJournal from './UpdateJournal';
import PublicationConference from './PublicationConference';
import PublicationBook from './PublicationBook';

import UpdateJournal from './UpdateJournal'
import UpdateConference from './UpdateConference' 
import UpdateBook from './UpdateBook'

const styles = theme => ({
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        marginTop:"20px",
        borderRadius: "4px",
        padding:"20px 0px 0 30px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
    },
    modal: {
        position: 'absolute',
        width: "800px",
        backgroundColor: theme.palette.common.white,
        boxShadow: theme.shadows[5],
        outline: 'none',
        top:"20px"  ,
        left:"300px",
        borderRadius: "4px",
    },
    cardAppBar:{
        backgroundColor: theme.palette.background.card,
        flexGrow: 1,
        // shadows: 0,
        boxShadow:'none',
    }, 
  });

function TabContainer(props) {
    return (
    <Typography variant = "body1">
        {props.children}
    </Typography>
    ); 
}

class UpdatePublication extends Component {
    constructor(props) {
        super(props);
        // this.state.currentPublication = this.props.currentPublications;
        this.state = this.props.currentPublications;
    }

    render(){
        const value = this.state.Type; 
        const {classes, profile} = this.props
        console.log(this.state);
        console.log(value);
        return(

            <div className = {classes.modal}>
                <Paper className ={classes.paper} style ={{padding:"20px 30px 0px 30px", marginBottom:"3px",height:"80px"}} >
                    <div>

                        <Typography variant ="h1">
                            <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                            Edit Publication
                            </div>
                            <Button style= {{float: "right",verticalAlign:"middle", color:"#000000"}} size="small" onClick = {this.props.handleClose}>
                            <Close/>
                            </Button>
                        </Typography > 

                        <AppBar position="static" color="default" className={classes.cardAppBar}>
                            <Tabs variant="fullWidth" value={value} indicatorColor="primary">
                                <Tab label="Journal" value = "Journal" />
                                <Tab label="Conference" value = "Conference" />
                                <Tab label="Book" value = "Book"/>  
                            </Tabs>
                        </AppBar>
                    </div>
                </Paper> 

                {value === "Journal" && <UpdateJournal handleClose = {this.props.handleClose} currentJournal = {this.state} identity={this.props.identity}/>}

                {value === "Conference" && <UpdateConference handleClose = {this.props.handleClose} currentConference = {this.state} identity={this.props.identity}/>}

                {value === "Book" && <UpdateBook handleClose = {this.props.handleClose} currentBook = {this.state} identity={this.props.identity}/>}
                
            </div>

        )
    }
}
UpdatePublication.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(UpdatePublication);