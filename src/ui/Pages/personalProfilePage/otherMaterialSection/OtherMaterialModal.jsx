/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Shaochuan Luo, Chenyang Lu], [date:29th Aug 2019]
 */


import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Button, withStyles, FormControl, NativeSelect, InputBase } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Close } from 'mdi-material-ui';
import SelectorOne from '../../../reusableComponents/textField/SelectorOne.jsx';
import { years } from '../../../../config/years'

//Ui
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'

//api
import {addOtherMaterial} from '../../../../api/personalProfileApi'

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

class OtherMaterialModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            year: 0,
            briefDescription: '',
            url: ''
        };
    }

    submit = () => {
        //Check all requirement
        if (this.state.title.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.briefDescription.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.url !== NaN
            && this.state.year !== 0) {
            const data = {
                Title: this.state.title,
                Year: parseInt(this.state.Year),
                Description: this.state.briefDescription,
                Url: this.state.url
            }
            console.log(data)
            
            const that = this;
            addOtherMaterial(data, this.props.identity)
                .then(function (response) {
                    if (that.state.FileOrNot) {
                        that.uploadFile(response.content.id);
                    } else{
                        that.props.handleClose(); 
                    }
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

    fileChoosen = (event) => {
        let file = event.target.files[0];
        let url = window.webkitURL.createObjectURL(file);
        this.setState({file,url});
        this.setState({FileOrNot: true});
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.modal}>
                <Paper className={classes.paper} style={{ padding: "20px 30px 0px 30px", marginBottom: "3px", height: "40px" }} >
                    <div>
                        <Typography variant="h1">
                            <div style={{ verticalAlign: "middle", height: "100%", float: "left" }}>
                                Add Material
                </div>
                            <Button style={{ float: "right", verticalAlign: "middle", color: "#000000" }} size="small" onClick={this.props.handleClose}>
                                <Close />
                            </Button>
                        </Typography >
                    </div>
                </Paper>


                <Paper className={classes.paper} style={{ padding: "50px 30px" }}>
                    <BootstrapStyleSearchBox
                        label="Title"
                        onChangeInput = {this.handleChange("title")}
                    // compusory = {true}
                    />

                    <SelectorOne
                        label="Year"
                        styles={{ width: "600px" }}
                        items={years}
                        isCompulsory={true}
                        onChangeSelect={this.handleChange("year")}
                    />

                    <BootstrapStyleSearchBox
                        label="Brief Description"
                        compusory={true}
                        onChangeInput={this.handleChange("briefDescription")}
                    />

                    <BootstrapStyleSearchBox
                        label="URL"
                        compusory={false}
                        onChangeInput={this.handleChange("url")}
                    />

                    {this.state.file &&
                        <div>
                            <Typography variant="h2" style={{ fontWeight: "normal", marginLeft: 5, color: "red" }}  >
                                {this.state.file.name + " has been uploaded, please click save"}
                            </Typography>
                        </div>
                    }

                    <form id='otherMaterialFile' enctype="multipart/form-data">
                        <div>
                            <input
                                accept=".doc, .docx, .pdf"
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                name='otherMaterial'
                                type="file"
                                onChange={this.fileChoosen}
                            />
                            <label htmlFor="raised-button-file">
                                {!this.state.file &&
                                    <Button
                                        color="primary"
                                        component="span"
                                    >
                                        Add file
                                    </Button>}
                            </label>
                        </div>

                        <div style={{ marginBottom: 20 }}>
                            <label htmlFor="submit-file">
                                <Button
                                    color="primary"
                                    style={{ marginRight: "20px", float: "right", verticalAlign: "middle" }}
                                    size="small"
                                    onClick={this.submit}
                                    component="span"
                                    variant="contained"
                                >
                                    Save
                                </Button>
                            </label>
                        </div>
                    </form>
                </Paper>
            </div>

        )
    }

}

OtherMaterialModal.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(OtherMaterialModal);