/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [shaochuan Luo], [date:20th Aug 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Button, withStyles, FormControl, NativeSelect, InputBase } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Close } from 'mdi-material-ui';


//Ui
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'
import ConfirmationDialog from '../../../reusableComponents/Dialog/ConfirmationDialog'

//api
import {updateAward, deleteAward} from '../../../../api/personalProfileApi'

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
        margin: "28px 0 6px 0",
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

class AwardModal extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentAward
        console.log(this.props.currentAward)
    }
    

    handleSubmit = () => {
        //Check all requirement
        if (this.state.Name.replace(/(^s*)|(s*$)/g, "").length !== 0 
            && this.state.Description !== NaN) {
            const data = {
                ID: this.state.ID,
                Name: this.state.Name,
                Organization: this.state.Organization,
                Date: this.state.Date,
                Description: this.state.Description
            }
            console.log(data)
            const temp = this

            updateAward(data)
                .then(function (response) {
                    temp.props.handleClose()
                }, function (err) {
                    alert(err.message);
                    console.log(err);
                })

        } else {
            alert("please fullfill all required files")
        }
    }

    handleDialogOpen= () => {
        this.setState({ModalOpen:true})
    }

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }

    handleDialogClose = () =>{
        this.setState({ModalOpen:false})
    }

    handleAgreeAction = () => {
        this.handleDialogClose()
        this.handleDelete()
    }

    handleDelete = () => {
        const data = {
            ID: this.state.ID
        }
        const temp = this

        deleteAward(data)
        .then(function (response) {
            temp.props.handleClose()
        }, function (err) {
            alert(err.message);
            console.log(err);
        })

    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.modal}>
                <Paper className={classes.paper} style={{ padding: "20px 30px 0px 30px", marginBottom: "3px", height: "40px" }} >
                    <div>
                        <Typography variant="h1">
                            <div style={{ verticalAlign: "middle", height: "100%", float: "left" }}>
                                Add Award
                </div>
                            <Button style={{ float: "right", verticalAlign: "middle", color: "#000000" }} size="small" onClick={this.props.handleClose}>
                                <Close />
                            </Button>
                        </Typography >
                    </div>
                </Paper>


                <Paper className={classes.paper} style={{ padding: "50px 30px" }}>
                    <BootstrapStyleSearchBox
                        label="Award Name"
                        onChangeInput = {this.handleChange("Name")}
                        compusory={true}
                        value = {this.state.Name}
                    />

                    <BootstrapStyleSearchBox
                        label="Award Organization"
                        onChangeInput = {this.handleChange("Organization")}
                    // compusory={true}
                        value = {this.state.Organization}
                    />

                    <BootstrapStyleSearchBox
                        label="Date"
                        compusory={true}
                        onChangeInput={this.handleChange("Date")}
                        value = {this.state.Date}
                    />

                    <BootstrapStyleSearchBox
                        label="Brief Description"
                        onChangeInput={this.handleChange("Description")}
                        value = {this.state.Description}
                    />

                    <Button style={{ color: 'red' }}>Add file</Button>

                    <div style ={{marginTop:30}}>
                <div style={{ float: "right", marginLeft:40 }}>
                        <Button variant="contained" color="primary" size="small" onClick={this.handleSubmit} >
                            Save
                        </Button>
                    </div>

                    <div style={{ float: "right" }}>
                        <Button  size="small" onClick={this.handleDialogOpen} >
                            Delete
                        </Button>
                    </div>
                </div>

                </Paper>

                <ConfirmationDialog 
                    open = {this.state.ModalOpen}
                    handleAgreeAction = {this.handleAgreeAction}
                    handleClose = {this.handleDialogClose}
                    text = "Are you sure you want to delete this degree?"
                    header = "Notification"
                />

            </div>

        )
    }

}

AwardModal.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(AwardModal);