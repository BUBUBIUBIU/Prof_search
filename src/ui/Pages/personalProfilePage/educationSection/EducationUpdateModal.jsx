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

//api
import { updateEducation, deleteEducation } from '../../../../api/personalProfileApi'

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

class EducationModal extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUniversity
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

        deleteEducation(data)
        .then(function (response) {
            temp.props.handleClose()
        }, function (err) {
            alert(err.message);
            console.log(err);
        })

    }

    handleSubmit = () => {
       
        if (
            this.state.UniversityName && this.state.UniversityName.replace(/(^s*)|(s*$)/g, "").length !== 0 &&
            this.state.Degree && this.state.Degree.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.Major && this.state.Major.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.FromYear !== NaN
            && this.state.ToYear !== NaN
            && this.state.GPA !== NaN
            && this.state.GPATYPE !== 0
            ) {
            const data = {
                ID: this.state.ID,
                UniversityName: this.state.UniversityName,
                Degree: this.state.Degree,
                Major: this.state.Major,
                FromYear: 2013,
                ToYear: 2017,
                Description: this.state.Description,
                GPA: parseFloat(this.state.GPA),
                GPAType: parseInt(this.state.GPAType)
            }
            const temp = this


            updateEducation(data)
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

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
        console.log(field)
        // console.log(this.state.field)
    }




    render() {
        const { classes, currentUniversity} = this.props


        return (
            <div className={classes.modal}>
                <Paper className={classes.paper} style={{ padding: "20px 30px 0px 30px", marginBottom: "3px", height: "40px" }} >
                    <div>
                        <Typography variant="h1">
                            <div style={{ verticalAlign: "middle", height: "100%", float: "left" }}>
                                Update Degree
                </div>
                            <Button style={{ float: "right", verticalAlign: "middle", color: "#000000" }} size="small" onClick={this.props.handleClose}>
                                <Close />
                            </Button>
                        </Typography >
                    </div>
                </Paper>


                <Paper className={classes.paper} style={{ padding: "50px 30px" }}>
                    <BootstrapStyleSearchBox
                        label="School"
                        placeHolder="University Name"
                        onChangeInput={this.handleChange("UniversityName")}
                        compusory={true}
                        value = {this.state.UniversityName}
                    />

                    <BootstrapStyleSearchBox
                        label="Degree"
                        placeHolder="Ex. Bachelor of Engineering"
                        onChangeInput={this.handleChange("Degree")}
                        compusory={true}
                        value = {this.state.Degree}
                    />
                    <BootstrapStyleSearchBox
                        label="Major"
                        placeHolder="Ex. Design"
                        onChangeInput={this.handleChange("Major")}
                        compusory={true}
                        value = {this.state.Major}
                    />
                    <Typography variant="h3" color="inherit">
                        <p className={classes.inputLabel}>
                            <span style={{ color: "#E4554D" }}> *</span> Average Score
                    </p>
                    </Typography>

                    <div style={{ width: "100%", marginBottom: "15px", }}>
                        {/* score box */}
                        <FormControl style={{ marginRight: "15px", width: "100px" }}>
                            <InputBase placeholder="3.9" classes={{
                                root: classes.inputBoxroot,
                                input: classes.scoreBox,
                            }}
                                onChange={this.handleChange("gpa")} />
                        </FormControl>

                        {/* <span className={classes.inlineWord}> */}
                        <Typography variant="h3" color="inherit" inline>
                            <span className={classes.inlineWord}>
                                in
                                </span>
                        </Typography>
                        {/* </span> */}

                        {/* select box */}
                        <FormControl style={{ margin: "0 15px 0 15px" }}>
                            <NativeSelect value={this.state.gpaType} onChange={this.handleChange("gpaType")}
                                className={classes.typeSelectBox} variant="outlined" native>
                                <option value={0} />
                                <option value={1}>
                                    GPA
                                </option>
                                <option value={2}>
                                    WAM
                                </option>
                                <option value={3}>
                                    Percentage
                                </option>
                            </NativeSelect>
                        </FormControl>

                    </div>

                    <BootstrapStyleSearchBox
                        label="Brief Description"
                        compusory={false}
                        onChangeInput={this.handleChange("Description")}
                        value =  {this.state.Description}
                    />
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

EducationModal.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(EducationModal);