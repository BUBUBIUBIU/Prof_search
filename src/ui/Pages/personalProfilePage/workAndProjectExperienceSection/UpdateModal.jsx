/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:24th Aug 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Collapse, Button, withStyles, ToolBa, Modal, Checkbox, NativeSelect, FormControl, InputBase, FormControlLabel } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus, Close } from 'mdi-material-ui';
import SelectorOne from '../../../reusableComponents/textField/SelectorOne.jsx';
import { years, months } from '../../../../config/years'

//Ui
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'
import CardHeader from '../CardHeader'
import ConfirmationDialog from '../../../reusableComponents/Dialog/ConfirmationDialog'

//api
import { deleteExperience, addExperience } from '../../../../api/personalProfileApi';

const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        // marginTop: "20px",
        borderRadius: "4px",
        padding: "20px 0px 0 30px",
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

class WorkAndProjectModal extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentWorkExperience
    }



    handleSubmit = () => {

        //Check all requirement
        if (this.state.CompanyName.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.Title.replace(/(^s*)|(s*$)/g, "").length !== 0
            ) {

            const data = {
                CompanyName: this.state.CompanyName,
                Title: this.state.Title,
                Location: this.state.Location,
                StartDate: "2006-01-02T15:04:05Z",
                EndDate: "2018-01-02T15:04:05Z",
                Description: this.state.Description,
                Materials: "hapi",
            }

            console.log(data)
            const temp = this
            addExperience(data)
                .then(function (response) {
                    temp.props.handleClose()
                    alert(response.message);
                }, function (err) {
                    alert(err.message);
                    console.log(err);
                })

        } else {
            alert("please fullfill all required files")
        }
    }

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }

    handleCheck = (event) => {
        this.setState({ currentWorking: event.target.checked })
    }


    handleDelete = () => {
        const data = {
            ID: this.state.ID
        }
        const temp = this

        deleteExperience(data)
        .then(function (response) {
            temp.props.handleClose()
        }, function (err) {
            alert(err.message);
            console.log(err);
        })

    }

    
    handleDialogOpen= () => {
        this.setState({ModalOpen:true})
    }

    handleDialogClose = () =>{
        this.setState({ModalOpen:false})
    }

    handleAgreeAction = () => {
        this.handleDialogClose()
        this.handleDelete()
    }


    render() {
        const { classes} = this.props
        console.log(this.state)


        return (
            <div className={classes.modal}>
                <Paper className={classes.paper} style={{ padding: "20px 30px 0px 30px", marginBottom: "1px", height: "40px", position:"fix" }} >
                    <div>
                        <Typography variant="h1">
                            <div style={{ verticalAlign: "middle", height: "100%", float: "left" }}>
                                Add Experience
                </div>
                            <Button style={{ float: "right", verticalAlign: "middle", color: "#000000" }} size="small" onClick={this.props.handleClose}>
                                <Close />
                            </Button>
                        </Typography >
                    </div>
                </Paper>

                <Paper className={classes.paper} style={{ padding: "10px 30px" , height:500, overflowY:"auto"}}>

                    <BootstrapStyleSearchBox
                        label="Company"
                        placeHolder="Company Name"
                        onChangeInput={this.handleChange("CompanyName")}
                        compusory={true}
                        value ={this.state.CompanyName}
                    
                    />

                    <BootstrapStyleSearchBox
                        label="Title"
                        placeHolder="Ex. Project Manager"
                        onChangeInput={this.handleChange("Title")}
                        compusory={true}
                        value ={this.state.Title}
                    />

                    <BootstrapStyleSearchBox
                        label="Location"
                        placeHolder="Ex. Melbourne"
                        onChangeInput={this.handleChange("Location")}
                        value ={this.state.Location}
                    />

                    <div>
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.currentWorking} onChange={this.handleCheck} value="checkedA" />
                            }
                            label="I am currently working in this role"
                        />
                    </div>

                    <div style={{ display: "flex" }}>
                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            label="Start Date"
                            isCompulsory={true}
                            items={months}
                            onChangeSelect={this.handleChange("FromMonth")}
                        />

                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            label="End Date"
                            isCompulsory={true}
                            items={months}
                            onChangeSelect={this.handleChange("ToMonth")}
                        />
                    </div>

                    <div>
                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            items={years}
                            isCompulso
                            onChangeSelect={this.handleChange("FromYear")}
                        />

                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            items={years}
                            onChangeSelect={this.handleChange("ToYear")}
                        />
                    </div>

                    <BootstrapStyleSearchBox
                        label="Brief Description"
                        compusory={false} 
                        onChangeInput={this.handleChange("Description")}
                        value ={this.state.Description}
                    />

                    <BootstrapStyleSearchBox
                        label="Material"
                        placeHolder="Briefly describe your work here"
                        onChangeInput={this.handleChange("Material")}
                        value ={this.state.Materials}
                    />

                    <div style = {{marginTop:30}}>
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
                    text = "Are you sure you want to delete this Experience?"
                    header = "Notification"
                />
            </div>
        )
    }
}

WorkAndProjectModal.propTypes = {
    handleClose: PropTypes.object
}

export default withStyles(styles)(WorkAndProjectModal);
