/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:2th Aug 2019]
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Button, withStyles, FormControl, NativeSelect, InputBase } from '@material-ui/core';
import { Close } from 'mdi-material-ui';


//Ui
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'
import ConfirmationDialog from '../../../reusableComponents/Dialog/ConfirmationDialog'
import SelectorOne from '../../../reusableComponents/textField/SelectorOne.jsx';

//api
import { updateOngoingProject, deleteOngoingProject } from '../../../../api/personalProfileApi'

//config
import { years } from '../../../../config/years'

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
});

class ResearchGrantModal extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentProjects;
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

    handleDelete = () => {
        const data = {
            ID: this.state.ID
        }
        const temp = this

        deleteOngoingProject(data)
        .then(function (response) {
            temp.props.handleClose()
        }, function (err) {
            alert(err.message);
            console.log(err);
        })

    }

    submit = () => {
        if(this.ongoingProjectInfoCheck()){
            const data = {
                ID: this.state.ID,
                ProjectName: this.state.ProjectName,
                FromYear: parseInt(this.state.FromYear),
                ToYear: parseInt(this.state.ToYear),
                Description: this.state.Description,
                Url: this.state.Url
            }
            

            const temp = this;
            updateOngoingProject(data)
                .then(function (response) {
                    // console.log(response.message)
                    temp.props.handleClose()
                }, function (err) {
                    alert(err.message);
                    console.log(err);
            })
        }else {
            alert("Some error with your input")
        }
    }

    ongoingProjectInfoCheck = () => {
        return this.projectNameValidate() && this.fromYearAndToYearValidate()
    }

    projectNameValidate = () =>{
        try{
            return this.state.ProjectName.replace(/(^s*)|(s*$)/g, "").length !== 0
        }catch(error){
            return false;
        }      
    }

    fromYearAndToYearValidate = () =>{
        return (this.state.FromYear !== 0
            && this.state.ToYear !== 0
            && this.state.FromYear <= this.state.ToYear) 
    }
    

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }




    render() {
        const { classes} = this.props

        return (
            <div className={classes.modal}>

                <Paper className={classes.paper} style={{ padding: "20px 30px 0px 30px", marginBottom: "3px", height: "40px" }} >
                    <div>
                        <Typography variant="h1">
                            <div style={{ verticalAlign: "middle", height: "100%", float: "left" }}>
                                Add Ongoing Project
                </div>
                            <Button style={{ float: "right", verticalAlign: "middle", color: "#000000" }} size="small" onClick={this.props.handleClose}>
                                <Close />
                            </Button>
                        </Typography >
                    </div>
                </Paper>

                <Paper className={classes.paper} style={{ padding: "50px 30px" }}>
                   
                    <BootstrapStyleSearchBox            
                        label="Project Name"
                        placeHolder="Ex: Chatbot development project"
                        onChangeInput={this.handleChange("ProjectName")}
                        compusory={true}
                        value = {this.state.ProjectName}
                    />

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            label="From Year"
                            isCompulsory={true}
                            items={years}
                            onChangeSelect={this.handleChange("FromYear")}
                            value = {this.state.FromYear}
                        />

                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            label="To Year (or expected)"
                            items={years}
                            isCompulsory={true}
                            onChangeSelect={this.handleChange("ToYear")}
                            value = {this.state.ToYear}
                        />
                    </div>

                    <BootstrapStyleSearchBox
                        label="Brief description"
                        placeHolder="Briefly describe what grant is it"
                        onChangeInput={this.handleChange("Description")}
                        compusory={false}
                        value = {this.state.Description}
                    />

                    <BootstrapStyleSearchBox
                        label="URL"
                        onChangeInput={this.handleChange("Url")}
                        compusory={false}
                        value = {this.state.Url}
                    />

                
                    <Button style = {{color: 'red'}}>Add File</Button>
                    <br/>
                    <div style={{ float: "right" }}>
                        <Button variant="contained" color="primary" size="small" onClick={this.submit} >
                            Save
                        </Button>
                    </div>

                    <div style={{ float: "right" }}>
                        <Button  size="small" onClick={this.handleDialogOpen} >
                            Delete
                        </Button>
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

ResearchGrantModal.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(ResearchGrantModal);