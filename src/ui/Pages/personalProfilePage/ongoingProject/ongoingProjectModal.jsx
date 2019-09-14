/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Shaochuan Luo], [date:31th Aug 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Button, withStyles, FormControl, NativeSelect, InputBase } from '@material-ui/core';
import { Close } from 'mdi-material-ui';
//Ui
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'
import SelectorOne from '../../../reusableComponents/textField/SelectorOne.jsx';

//api
import { addOngoingProject } from '../../../../api/personalProfileApi';

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


class ongoingProjectModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    // handleSubmit = () => {

    //     //Check all requirement
    //     if (this.state.title.replace(/(^s*)|(s*$)/g, "").length !== 0
    //         && this.state.fromYear !== NaN
    //         && this.state.toYear !== NaN
    //         && this.state.fromYear < this.state.toYear
    //         && this.state.fundingBody !== NaN
    //         && this.state.briefDescription !== NaN
    //         && this.state.url !== NaN) {
    //         const data = {
    //             Title: this.state.title,
    //             FromYear: parseInt(this.state.fromYear),
    //             ToYear: parseInt(this.state.toYear),
    //             FundingBody: this.state.fundingBody,
    //             BriefDescription: this.state.briefDescription,
    //             URL: this.state.url
    //         }
    //         console.log(data)
    //         const temp = this;
    //         addOngoingProject(data)
    //             .then(function (response) {
    //                 console.log(response.message)
    //                 temp.props.handleClose()
    //             }, function (err) {
    //                 alert(err.message);
    //                 console.log(err);
    //             })

    //     } else {
    //         alert("Some error with your input")
    //     }
    // }

    submit = () => {
        if(this.ongoingProjectInfoCheck()){
            const data = {
                ProjectName: this.state.ProjectName,
                FromYear: parseInt(this.state.FromYear),
                ToYear: parseInt(this.state.ToYear),
                BriefDescription: this.state.BriefDescription,
                Url: this.state.Url
            }
            console.log(data)
            const temp = this;
            addOngoingProject(data)
                .then(function (response) {
                    console.log(response.message)
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
        return this.state.ProjectName.replace(/(^s*)|(s*$)/g, "").length !== 0
    }

    fromYearAndToYearValidate = () =>{
        return (this.state.FromYear.replace(/(^s*)|(s*$)/g, "").length !== 0
        && this.state.ToYear.replace(/(^s*)|(s*$)/g, "").length !== 0
        && this.state.FromYear <= this.state.ToYear)   
    }

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }

    render() {
        const { classes } = this.props

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
                        onChangeInput={this.handleChange("title")}
                        compusory={true}
                    />

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            label="From Year"
                            isCompulsory={true}
                            items={years}
                            onChangeSelect={this.handleChange("fromYear")}
                        />

                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            label="To Year (or expected)"
                            items={years}
                            isCompulsory={true}
                            onChangeSelect={this.handleChange("toYear")}
                        />
                    </div>

                    <BootstrapStyleSearchBox
                        label="Brief description"
                        placeHolder="Briefly describe what grant is it"
                        onChangeInput={this.handleChange("briefDescription")}
                        compusory={false}
                    />

                    <BootstrapStyleSearchBox
                        label="URL"
                        onChangeInput={this.handleChange("url")}
                        compusory={false}
                    />

                    <Button style = {{color: 'red'}}>Add File</Button>
                    <br/>
                    <div style={{ float: "right" }}>
                        <Button variant="contained" color="primary" size="small" onClick={this.handleSubmit} >
                            Save
                        </Button>
                    </div>

                </Paper>
            </div>

        )
    }

}

ongoingProjectModal.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(ongoingProjectModal);


