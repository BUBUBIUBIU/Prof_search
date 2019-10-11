/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:31th Aug 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Collapse, Button, withStyles, ToolBa, Modal, Checkbox, NativeSelect, FormControl, InputBase, FormControlLabel } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus, Close } from 'mdi-material-ui';
import SelectorOne from '../../../reusableComponents/textField/SelectorOne.jsx';

//Ui
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'
import CardHeader from '../CardHeader'
import { addExperience } from '../../../../api/personalProfileApi';

import { years, months } from '../../../../config/years'

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
        this.state = {
            currentWorking: false,
        };
    }

    handleSubmit = () => {
        //Check all requirement
        if (this.experienceInfoCheck()) {
            const data = {
                CompanyName: this.state.CompanyName,
                Title: this.state.Title,
                Location: this.state.Location,
                FromMonth: parseInt(this.state.FromMonth),
                FromYear:parseInt(this.state.FromYear),
                ToMonth:parseInt(this.state.ToMonth),
                ToYear: parseInt(this.state.ToYear),
                Description: this.state.Description,
                Materials:this.state.Materials,

                CheckProps: this.state.CheckProps
            }

            console.log(data)
            const temp = this

            addExperience(data, this.props.identity)
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

    experienceInfoCheck = () => {
        return this.titleValidate() && this.companyNameValidate() && this.fromYearAndToYearValidate() && this.locationValidate() && this.descriptionValidate();
    }

    titleValidate(){
        try{
            return this.state.Title.replace(/(^s*)|(s*$)/g, "").length !== 0;
        }catch(error){
            return false;
        }
    }

    companyNameValidate(){
        try{
            return this.state.CompanyName.replace(/(^s*)|(s*$)/g, "").length !== 0;
        }catch(error){
            return false;
        }
    }

    locationValidate(){
        return this.state.Location !== NaN;
    }

    descriptionValidate(){
        return this.state.Description !== NaN;
    }

    fromYearAndToYearValidate = () =>{
        if (this.state.ToYear === this.state.FromYear) {
            return (this.state.FromMonth !== 0
            && this.state.ToMonth !== 0
            && this.state.FromMonth <= this.state.ToMonth) 
        }else {
            return (this.state.FromYear !== 0
            && this.state.ToYear !== 0
            && this.state.FromYear <= this.state.ToYear)   
        }
    }

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }

    handleCheck = (event) => {
        this.setState({ currentWorking: event.target.checked })
    }


    render() {
        const { classes, profile } = this.props
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

                <Paper className={classes.paper} style={{ padding: "10px 30px" , height:600, overflowY:"auto"}}>

                    <BootstrapStyleSearchBox
                        label="Company"
                        placeHolder="Company Name"
                        onChangeInput={this.handleChange("CompanyName")}
                        compusory={true}
                    />

                    <BootstrapStyleSearchBox
                        label="Title"
                        placeHolder="Ex. Project Manager"
                        onChangeInput={this.handleChange("Title")}
                        compusory={true}
                    />

                    <BootstrapStyleSearchBox
                        label="Location"
                        placeHolder="Ex. Melbourne"
                        onChangeInput={this.handleChange("Location")}
                        compusory={true}
                    />

                    <div>
                        <Checkbox checked={this.state.currentWorking} onChange={this.handleCheck} value="checkedA" color="primary"/>
                        I am currently working in this role
                    </div>
                    

                    <div style = {{display:"flex", flexDirection:"row", flexWrap: "wrap", overflow: "auto"}}>

                        <div style={{ flex : "1 1 50%", display: "flex" , flexDirection:"column"}}>
                            <SelectorOne
                                label="Start Date"
                                isCompulsory={true}
                                items={months}
                                onChangeSelect={this.handleChange("FromMonth")}
                                value= {this.state.FromMonth}
                            />

                            <SelectorOne
                                items={years}
                                isCompulso
                                onChangeSelect={this.handleChange("FromYear")}
                                value= {this.state.FromYear}
                            />
                        </div>

                        {!this.state.currentWorking && <div style={{ flex : "1 1 50%", display: "flex" , flexDirection:"column"}}>
                                <SelectorOne
                                    label="End Date"
                                    isCompulsory={true}
                                    items={months}
                                    onChangeSelect={this.handleChange("ToMonth")}
                                    value = {this.state.ToMonth}
                                />

                                <SelectorOne
                                    items={years}
                                    onChangeSelect={this.handleChange("ToYear")}
                                    value = {this.state.ToYear}
                                />
                        </div>}

                        {this.state.currentWorking && <div style={{ flex : "1 1 50%", display: "flex" , flexDirection:"column"}}>
                            <Typography variant="h3">
                                <p className={classes.inputLabel}>
                                    <span style={{ color: "#E4554D" }}> *</span> End Date <br/><br/> present
                                </p>
                            </Typography>
                        </div>}

                    </div>

                    <BootstrapStyleSearchBox
                        label="Brief Description"
                        compusory={false}
                        onChangeInput={this.handleChange("Description")}
                    />

                    <BootstrapStyleSearchBox
                        label="Material"
                        placeHolder="Briefly describe your work here"
                        onChangeInput={this.handleChange("Material")}
                    // compusory={true}
                    />

                    <div style={{ float: "right" }}>
                        <Button variant="contained" color="primary" size="small" onClick={this.handleSubmit} >
                            Submit
                        </Button>
                    </div>

                </Paper>
            </div>
        )
    }
}

WorkAndProjectModal.propTypes = {
    handleClose: PropTypes.object
}

export default withStyles(styles)(WorkAndProjectModal);
