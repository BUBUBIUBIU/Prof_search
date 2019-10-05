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
import UpdatePhD from './UpdatePhD'
import UpdateTA from './UpdateTA' 
import UpdataRA from './UpdataRA'
import UpdatePostDoc from './UpdatePostDoc'

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


class UpdateAvailablePosition extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentPositions;
    }

    render(){
        const value = this.state.Position.toString(); 
        const {classes} = this.props;
        
        console.log(value);
        return(

            <div className = {classes.modal}>
                <Paper className ={classes.paper} style ={{padding:"20px 30px 0px 30px", height:"89px"}} >
                    <div>
                        <Typography variant ="h1">
                            <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                            Add Available Position
                            </div>
                            <Button style= {{float: "right",verticalAlign:"middle", color:"#000000"}} size="small" onClick = {this.props.handleClose}>
                            <Close/>
                            </Button>
                        </Typography >   
                        <AppBar position="static" color="default" className={classes.cardAppBar}>
                            <Tabs variant="fullWidth" value={value} indicatorColor="primary" onChange={this.handleTab}>
                                <Tab label="PhD" value = '1' />
                                <Tab label="Teaching Assistant" value = "2" />
                                <Tab label="Research Assistant" value = "3"/>  
                                <Tab label="Post Doc/ Research Fellow" value = "4"/>  
                            </Tabs>
                        </AppBar>
                    </div>
                </Paper> 

                {value === "1" && <UpdatePhD handleClose = {this.props.handleClose} currentPhD = {this.state}/>}

                {value === "2" && <UpdateTA handleClose = {this.props.handleClose} currentTA = {this.state}/>}

                {value === "3" && <UpdataRA handleClose = {this.props.handleClose} currentRA = {this.state} />}

                {value === "4" && <UpdatePostDoc handleClose = {this.props.handleClose} currentPostDoc = {this.state}/>}
                
            </div>

        )
    }
}
UpdateAvailablePosition.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(UpdateAvailablePosition);