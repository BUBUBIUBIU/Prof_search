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

//api
import { addOngoingProject } from '../../../../api/personalProfileApi';

//config
import { years } from '../../../../config/years'
import availablePositionPhD from './availablePositionPhD';


const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
    },
    modal: {
        position: 'absolute',
        width: "800px",
        backgroundColor: theme.palette.common.white,
        boxShadow: theme.shadows[5],
        outline: 'none',
        top: "20px",
        left: "300px",
        borderRadius: "4px",
    },
    inputLabel: {
        margin: "12px 0 6px 0",
        display: 'inline-block',
    },
    inlineWord: {
        // margin: "18px 0 5px 0",
        verticalAlign: "middle",
        textAlign: "center",
        paddingTop: "15px"

    },
    inputBoxroot: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: theme.palette.common.white,
        height: "40px",
        padding: "0 5px 0 11px",
        borderRadius: 4,
        border: '1px solid #ced4da',
    },
    universityBox: {
        width: "333px",
    },
    typeSelectBox: {
        backgroundColor: theme.palette.common.white,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
        height: "40px",
        width: "128px",
        padding: "0px 0 0px 11px",
        borderRadius: 4,
        border: '1px solid #cccccc',

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
        const {classes, profile} = this.props

        return (
            <div className={classes.modal}>

                <Paper className ={classes.paper} style ={{padding:"20px 30px 0px 30px", marginBottom:"3px",height:"80px"}} >
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

                {value === "PhD" && <availablePositionPhD handleClose = {this.props.handleClose}/>}

                {/* {value === "Conference" && >} */}
            </div>

        )
    }

}

AvailablePositionModal.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(AvailablePositionModal);


