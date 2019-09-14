/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [shaochuan Luo], [date:20th Aug 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Button, withStyles, FormControl, NativeSelect, InputBase } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Close } from 'mdi-material-ui';
import Description from '@material-ui/icons/Description';


//api
import {uploadCV} from '../../../../api/personalProfileApi'

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
        };
    }


    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }

    uploadCV = (e) =>{
        e.preventDefault();
        let formData = new FormData(e.target);
        const temp = this;
        uploadCV(formData).
            then(function(response){
                temp.props.handleClose();
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
                                Add Award
                </div>
                            <Button style={{ float: "right", verticalAlign: "middle", color: "#000000" }} size="small" onClick={this.props.handleClose}>
                                <Close />
                            </Button>
                        </Typography >
                    </div>
                </Paper>



                <Paper className={classes.paper} style={{ padding: "50px 30px" }}>
                    <form onSubmit={this.uploadCV} id = "file-form">
                    <div style = {{display: "flex", justifyContent:"center"}}>             
                        <div style = {{flex: "0 1 auto"}}>
                            <input
                            accept=".doc,.docx, .pdf"
                            // className={classes.input}
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            name="cv" 
                            // multiple
                            type="file"
                            />

                        <label htmlFor="raised-button-file">
                            <Button 
                                color="primary" 
                                style= {{marginRight: "20px",float: "right",verticalAlign:"middle"}} 
                                size="small" 
                                component="span"
                            >
                                Choose File
                            </Button> 
                        </label>
                    </div>

                    <div style = {{flex: "0 1 auto"}}>
                        <input type="submit" value="Upload" id="submit-file" style={{ display: 'none' }}/>
                        <label htmlFor="submit-file">
                            <Button 
                                color="primary" 
                                style= {{marginRight: "20px",float: "right",verticalAlign:"middle"}} 
                                size="small" 
                                onClick = {this.props.uploadCV}
                                component="span"
                            >
                                Upload
                            </Button> 
                        </label>

                    </div>
                    </div>
                    </form> 
                    {document.getElementById("file-form") &&
                    <div style = {{margin: "0 auto"}}>
                        <Button>
                            <Description color = "primary"/> PDF
                        </Button>
                    </div>
                    }
                
                </Paper>
                
            </div>

        )
    }

}

AwardModal.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(AwardModal);