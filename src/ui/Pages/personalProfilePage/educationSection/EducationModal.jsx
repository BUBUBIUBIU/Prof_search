/**
 * @file this file is for education modal
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description 
 *       
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
            universityName: '',
            degree: '',
            major: '',
            fromYear: 2013,
            toYear: 2017,
            gpa: 1,
            gpaType: 1,
            description: "",

            fromYear: 0,
            toYear: 0
        };
    }


    handleSubmit = () => {

        //Check all requirement
        if (this.state.universityName.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.degree.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.major.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.fromYear !== NaN
            && this.state.toYear !== NaN
            && this.state.gpa !== NaN
            && this.state.gpaType !== 0) {
            const data = {
                UniversityName: this.state.universityName,
                Degree: this.state.degree,
                Major: this.state.major,
                FromYear: 2013,
                ToYear: 2017,
                Description: this.state.description,

                GPA: parseFloat(this.state.gpa),
                GPAType: parseInt(this.state.gpaType)
            }
            console.log(data)

            addEducation(data)
                .then(function (response) {
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
                        onChangeInput={this.handleChange("universityName")}
                        compusory={true}
                    />

                    <BootstrapStyleSearchBox
                        label="Degree"
                        placeHolder="Ex. Bachelor of Engineering"
                        onChangeInput={this.handleChange("degree")}
                        compusory={true}
                    />
                    <BootstrapStyleSearchBox
                        label="Major"
                        placeHolder="Ex. Design"
                        onChangeInput={this.handleChange("major")}
                        compusory={true}
                    />

                    <div style={{ display: "flex" }}>
                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            label="From Year"
                            items={years}
                            onChangeSelect={this.handleChange("fromYear")}
                        />

                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            label="To Year (or expected)"
                            items={years}
                            onChangeSelect={this.handleChange("toYear")}
                        />
                    </div>

                    {/* <div style={{float: 'left'}}>
                        <Typography variant="h3" color="inherit">
                            <p className={classes.inputLabel}>
                                <span style={{ color: "#E4554D" }}> *</span> From year
                            </p>
                        </Typography>

                        <SelectorOne items = {years}  onChangeSelect = {this.handleChange("fromYear")}/>
                    </div>
                    
                    <div style={{float: 'right'}}>
                        <Typography variant="h3" color="inherit">
                            <p className={classes.inputLabel}>
                                <span style={{ color: "#E4554D" }}> *</span> To year (or expected)
                            </p>
                        </Typography>
                        <SelectorOne items = {years}  onChangeSelect = {this.handleChange("toYear")}/>
                    </div> */}

                    <BootstrapStyleSearchBox
                        label="Brief Description"
                        compusory={false}
                        onChangeInput={this.handleChange("description")}
                    />

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



// {/* <div style={{ width: "100%", marginBottom: "15px", }}>
// {/* score box */}
// <FormControl style={{ marginRight: "15px", width: "100px" }}>
//     <InputBase placeholder="3.9" classes={{
//         root: classes.inputBoxroot,
//         input: classes.scoreBox,
//     }}
//         onChange={this.handleChange("gpa")} />
// </FormControl>

// {/* <span className={classes.inlineWord}> */}
// <Typography variant="h3" color="inherit" inline>
//     <span className={classes.inlineWord}>
//         in
//         </span>
// </Typography>
// {/* </span> */}

// {/* select box */}
// <FormControl style={{ margin: "0 15px 0 15px" }}>
//     <NativeSelect value={this.state.gpaType} onChange={this.handleChange("gpaType")}
//         className={classes.typeSelectBox} variant="outlined" native>
//         <option value={0} />
//         <option value={1}>
//             GPA
//         </option>
//         <option value={2}>
//             WAM
//         </option>
//         <option value={3}>
//             Percentage
//         </option>
//     </NativeSelect>
// </FormControl>

// </div> */}