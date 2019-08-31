/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Shaochuan Luo, Chenyang Lu], [date:20th Aug 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Button, withStyles, FormControl, NativeSelect, InputBase } from '@material-ui/core';
import { Close } from 'mdi-material-ui';
//Ui
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'
import SelectorOne from '../../../reusableComponents/textField/SelectorOne.jsx';

//api
import { addEducation } from '../../../../api/personalProfileApi';

//config
import { years } from '../../../../config/years'
import { gpa } from '../../../../config/gpaType'


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


class EducationModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    handleSubmit = () => {

        //Check all requirement
        if (this.state.UniversityName  && this.state.UniversityName.replace(/(^s*)|(s*$)/g, "").length !== 0
            &&  this.state.Degree && this.state.Degree.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.Major && this.state.Major.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.FromYear
            && this.state.ToYear
            && this.state.FromYear <= this.state.ToYear
            && this.state.GPA
            && this.state.GPAType !== 0) {
            const data = {
                UniversityName: this.state.UniversityName,
                Degree: this.state.Degree,
                Major: this.state.Major,
                FromYear: parseInt(this.state.FromYear),
                ToYear: parseInt(this.state.ToYear),
                Description: this.state.Description,

                GPA: parseFloat(this.state.GPA),
                GPAType: parseInt(this.state.GPAType)
            }
            console.log(data)
            const temp = this;
            addEducation(data)
                .then(function (response) {
                    console.log(response.message)
                    temp.props.handleClose()
                }, function (err) {
                    alert(err.message);
                    console.log(err);
                })

        } else {
            alert("Some error with your input")
        }
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
                                Add Degree
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
                    />

                    <BootstrapStyleSearchBox
                        label="Degree"
                        placeHolder="Ex. Bachelor of Engineering"
                        onChangeInput={this.handleChange("Degree")}
                        compusory={true}
                    />
                    <BootstrapStyleSearchBox
                        label="Major"
                        placeHolder="Ex. Design"
                        onChangeInput={this.handleChange("Major")}
                        compusory={true}
                    />

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            isCompulsory = {true}
                            label="From Year"
                            items={years}
                            onChangeSelect={this.handleChange("FromYear")}
                            value = {this.state.fromYear}
                        />

                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            isCompulsory = {true}
                            label="To Year (or expected)"
                            items={years}
                            onChangeSelect={this.handleChange("ToYear")}
                            value = {this.state.toYear}
                        />
                    </div>


                    <BootstrapStyleSearchBox
                        label="Brief Description"
                        compusory={false}
                        onChangeInput={this.handleChange("Description")}
                    />
                    
                    <Typography variant="h3" color="inherit">
                        Average Score
                    </Typography>


                    <div style = {{display:"flex", alignItems: "center"}}>
                        <div style = {{flexGrow: 1, maxWidth: 200, margin: "0 10px 0 0 "}}>
                            <BootstrapStyleSearchBox
                                placeHolder="Score"
                                onChangeInput={this.handleChange("GPA")}
                                value = {this.state.GPA}
                            />
                        </div>

                        <Typography variant="h3" color="inherit" style ={{verticalAlign:"center",flexGrow: 1, maxWidth: 250,margin:"0 10px"}}>
                                out of 
                        </Typography>
                    
                        <div  style={{ flexGrow: 2, maxWidth: 300 , margin:'0 10px'}}>
                        <SelectorOne
                            items={gpa}
                            onChangeSelect={this.handleChange("GPAType")}
                            value = {this.state.GPAType}
                        />
                        </div>
                        
                        <Typography variant="h3" color="inherit" style ={{verticalAlign:"center",flexGrow: 1, maxWidth: 200,margin:"0 10px"}}>
                                from
                        </Typography>

                        <div style={{ flexGrow: 8 }}>
                        <BootstrapStyleSearchBox
                            placeHolder="University Name"
                            onChangeInput={() => {}}
                            value = {this.state.UniversityName}
                        />
                        </div>

                    </div>

                    <div style = {{margin:"7px 0 "}}>
                    <Button component="span" color = {"primary"} >
                        + Upload Transcrip
                    </Button>
                    </div>
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

EducationModal.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(EducationModal);


