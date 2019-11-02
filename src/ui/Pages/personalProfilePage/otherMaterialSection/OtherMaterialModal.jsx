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
import {addOtherMaterial, uploadOtherMaterialFile} from '../../../../api/personalProfileApi'

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

class OtherMaterialModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.FileOrNot = false;
    }

    submit = () => {
        //Check all requirement
        if (this.state.Title.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.Description.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.Url !== NaN
            && this.state.Year !== 0) {
            const data = {
                Title: this.state.Title,
                Year: parseInt(this.state.Year),
                Description: this.state.Description,
                Url: this.state.Url
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

    uploadFile = (id) =>{
        const formObj =  document.getElementById("otherMaterialFile");
        // console.log('the formObj is :', formObj);
        const formData = new FormData(formObj);
        // console.log('the formData is:', formData);
        const that = this;
        uploadOtherMaterialFile(formData, this.props.identity, id).
            then(function(response){
                that.props.handleClose(); 
            },
            function(err){
                alert(err.message);
                console.log(err)
            }
            );
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
                        onChangeInput = {this.handleChange("Title")}
                    // compusory = {true}
                    />

                    <SelectorOne
                        label="Year"
                        styles={{ width: "600px" }}
                        items={years}
                        isCompulsory={true}
                        onChangeSelect={this.handleChange("Year")}
                    />

                    <BootstrapStyleSearchBox
                        label="Brief Description"
                        compusory={true}
                        onChangeInput={this.handleChange("Description")}
                    />

                    <BootstrapStyleSearchBox
                        label="URL"
                        compusory={false}
                        onChangeInput={this.handleChange("Url")}
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
                                name='material'
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