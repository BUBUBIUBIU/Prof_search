/**
 * @file this file is for adding work and project experience
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description 
 *       
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
        this.state = this.props.currentWorkExperience
        console.log(this.props.currentWorkExperience)
    }

    handleSubmit = () => {

        //Check all requirement
        if (this.state.CompanyName.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.Title.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.Country.replace(/(^s*)|(s*$)/g, "").length !== 0
            ) {

            const data = {
                CompanyName: this.state.CompanyName,
                Title: this.state.Title,
                Country: this.state.Location,
                City: this.state.Location,
                StartDate: "2006-01-02T15:04:05Z",
                EndDate: "2018-01-02T15:04:05Z",
                Description: this.state.Description,
                Materials: "hapi",
            }

            console.log(data)
            const temp = this
            addExperience(data)
                .then(function (response) {
                    temp.props.handleUpdate(data)
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


    render() {
        const { classes} = this.props


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
                        onChangeInput={this.handleChange("Country")}
                        compusory={true}
                        value ={this.state.Country}
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