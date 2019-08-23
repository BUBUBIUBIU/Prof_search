/**
 * @file this is Award section
 * @author Shaochuan Luo(shaochuanl@student.unimelb.edu.au)
 * @description    
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Button, withStyles, FormControl, NativeSelect, InputBase } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Close } from 'mdi-material-ui';


//Ui
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'

//api
import {addAward} from '../../../../api/personalProfileApi'

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
        this.state = {
            name: '',
            organization: '',
            date: '',
            briefDescription: ''
        };
    }

    handleSubmit = () => {
        //Check all requirement
        if (this.state.name.replace(/(^s*)|(s*$)/g, "").length !== 0 
            && this.state.organization.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.date !== NaN
            && this.state.briefDescription !== NaN) {
            const data = {
                Name: this.state.name,
                Organization: this.state.organization,
                Date: "2018-01-02T15:04:05Z",
                Description: this.state.Description
            }
            console.log(data)

            addAward(data)
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
                        onChangeInput = {this.handleChange("name")}
                        compusory={true}
                    />

                    <BootstrapStyleSearchBox
                        label="Award Organization"
                        onChangeInput = {this.handleChange("organization")}
                    // compusory={true}
                    />

                    <BootstrapStyleSearchBox
                        label="Date"
                        compusory={true}
                        onChangeInput={this.handleChange("date")}
                    />

                    <BootstrapStyleSearchBox
                        label="Brief Description"
                        onChangeInput={this.handleChange("briefDescription")}
                    />

                    <Button style={{ color: 'red' }}>Add file</Button>
                    <br />
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

AwardModal.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(AwardModal);