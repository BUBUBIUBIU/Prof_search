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
import { updateResearchGrant, deleteResearchGrant, deleteGrantFile, uploadGrantFile } from '../../../../api/personalProfileApi'

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

class ResearchGrantModal extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentResearchGrant;
        this.state.FileOrNot = false;
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

        deleteResearchGrant(data)
        .then(function (response) {
            temp.props.handleClose()
        }, function (err) {
            alert(err.message);
            console.log(err);
        })

    }

    submit = () => {
        if(this.researchGrantInfoCheck()){
            const data = {
                ID: this.state.ID,
                Title: this.state.Title,
                FromYear: parseInt(this.state.FromYear),
                ToYear: parseInt(this.state.ToYear),
                FundingBody: this.state.FundingBody,
                Description: this.state.Description,
                Url: this.state.Url
            }
            
            console.log('data is:', data);
            const that = this;
            updateResearchGrant(data)
                .then(function (response) {
                    if (that.state.FileOrNot) {
                        that.uploadFile(that.state.ID);
                    } else{
                        that.props.handleClose(); 
                    }
                }, function (err) {
                    alert(err.message);
                    console.log(err);
            })
        }else {
            alert("Some error with your input")
        }
    }

    researchGrantInfoCheck = () => {
        return this.titleValidate() && this.fromYearAndToYearValidate()
    }

    titleValidate = () =>{
        try{
            return this.state.Title.replace(/(^s*)|(s*$)/g, "").length !== 0;
        }catch(error){
            return false;
        }
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

    handleDeleteFile = () => {
        deleteGrantFile(this.state.ID);
        this.setState( {AttachmentName:''} );
    }

    fileChoosen = (event) => {
        let file = event.target.files[0];
        let url = window.webkitURL.createObjectURL(file);
        this.setState({file,url});
        this.setState({FileOrNot: true, AttachmentName: file.name });
    }

    uploadFile = (id) =>{
        const formObj =  document.getElementById("grantFile");
        // console.log('the formObj is :', formObj);
        const formData = new FormData(formObj);
        // console.log('the formData is:', formData);
        const that = this;
        uploadGrantFile(formData, id).
            then(function(response){
                // console.log('uploadgrantFile is activated');
                that.props.handleClose(); 
            },
            function(err){
                alert(err.message);
                console.log(err)
            }
            );
    }

    render() {
        const { classes} = this.props

        return (
            <div className={classes.modal}>

                <Paper className={classes.paper} style={{ padding: "20px 30px 0px 30px", marginBottom: "3px", height: "40px" }} >
                    <div>
                        <Typography variant="h1">
                            <div style={{ verticalAlign: "middle", height: "100%", float: "left" }}>
                                Add Research Grant
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
                        placeHolder="Grant Name"
                        onChangeInput={this.handleChange("Title")}
                        compusory={true}
                        value = {this.state.Title}
                    />

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            label="From Year"
                            isCompulsory = {true}
                            items={years}
                            onChangeSelect={this.handleChange("FromYear")}
                            value = {this.state.FromYear}
                        />

                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            label="To Year (or expected)"
                            isCompulsory = {true}
                            items={years}
                            onChangeSelect={this.handleChange("ToYear")}
                            value = {this.state.ToYear}
                        />
                    </div>

                    <BootstrapStyleSearchBox
                        label="Funding Body"
                        placeHolder="Briefly describe what grant is it"
                        onChangeInput={this.handleChange("FundingBody")}
                        compusory={false}
                        value = {this.state.FundingBody}
                    />

                    <BootstrapStyleSearchBox
                        label="Brief description"
                        placeHolder="Briefly describe what grant is it"
                        onChangeInput={this.handleChange("Description")}
                        compusory={false}
                        value = {this.state.Description}
                    />

                    <BootstrapStyleSearchBox
                        label="URL"
                        onChangeInput={this.handleChange("URL")}
                        compusory={false}
                        value = {this.state.Url}
                    />

                    {this.state.AttachmentName &&
                        <Button 
                            style={{ color: 'red' }}
                            onClick={this.handleDeleteFile}
                        >
                            {this.state.AttachmentName}
                        </Button>
                    }

                    <form id='grantFile' enctype="multipart/form-data">
                        <div>
                            <input
                                accept=".doc, .docx, .pdf"
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                name='grant'
                                type="file"
                                onChange={this.fileChoosen}
                            />
                            <label htmlFor="raised-button-file">
                                {! this.state.AttachmentName &&
                                    <Button
                                        color="primary"
                                        component="span"
                                    >
                                        Add file
                                    </Button>
                                }
                            </label>
                        </div> 

                        <div style={{ float: "right", marginLeft:20 }}>
                            <label htmlFor="submit-file">
                                <Button
                                    color="primary"
                                    style={{verticalAlign: "middle" }}
                                    size="small"
                                    onClick={this.submit}
                                    component="span"
                                    variant="contained"
                                >
                                    Save
                                </Button>
                            </label>
                        </div>

                        <div style={{ float: "right" }}>
                            <Button  size="small" onClick={this.handleDialogOpen} >
                                Delete
                            </Button>
                        </div>
                    </form>
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