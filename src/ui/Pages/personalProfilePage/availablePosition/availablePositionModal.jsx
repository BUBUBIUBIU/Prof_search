/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Shaochuan Luo], [date:31th Aug 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Button, withStyles, AppBar, Tabs, Tab, FormControl, NativeSelect, InputBase } from '@material-ui/core';
import { Close } from 'mdi-material-ui';
//Ui
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'
import SelectorOne from '../../../reusableComponents/textField/SelectorOne.jsx';

//config
import AvailablePositionPhD from './AvailablePositionPhD';
import AvailablePositionTa from './AvailablePositionTA';
import AvailablePositionRa from './AvailablePositionRA';
import AvailablePositionPostDoc from './AvailablePositionPostDoc';

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


class AvailablePositionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            value: "PhD"
        };
    }

    handleTab = (event,value) => {
        this.setState({value});
    }

    render() {
        const {value} = this.state; 
        const {classes} = this.props

        return (
            <div className={classes.modal}>

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
                                <Tab label="PhD" value = "PhD" />
                                <Tab label="Teaching Assistant" value = "Teaching Assistan" />
                                <Tab label="Research Assistant" value = "Research Assistant"/>  
                                <Tab label="Post Doc/ Research Fellow" value = "Post Doc/ Research Fellow"/>  
                            </Tabs>
                        </AppBar>
                    </div>
                </Paper> 

                {value === "PhD" && <AvailablePositionPhD handleClose = {this.props.handleClose}/>}

                {value === "Teaching Assistan" && <AvailablePositionTa handleClose = {this.props.handleClose}/>}

                {value === "Research Assistant" && <AvailablePositionRa handleClose = {this.props.handleClose}/>}

                {value === "Post Doc/ Research Fellow" && <AvailablePositionPostDoc handleClose = {this.props.handleClose}/>}
                
            </div>

        )
    }

}

AvailablePositionModal.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(AvailablePositionModal);


