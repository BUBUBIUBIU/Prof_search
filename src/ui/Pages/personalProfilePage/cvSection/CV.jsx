/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:20th Aug 2019]
 */

import React, { Component } from 'react'
import { withStyles,Modal, Paper} from '@material-ui/core';

//UI
import  CardHeader from '../CardHeader'
import CVModal from './CVModal'
import FileButton from '../../../reusableComponents/button/FileButton'

//API 
import {uploadCV, deleteCV} from '../../../../api/personalProfileApi'

const styles = theme => ({
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        marginTop:2,
        borderRadius: "4px",
        height:"40px",
        padding:"20px 0px 0 30px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
      }
  });

class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false


        };
    }

    handleOnclick = () =>{
        if (this.state.expand === false){
            this.setState({expand:true})
        }else{
            this.setState({expand:false})
        }
    }

    
    handleClose = () => {
        this.setState({ open: false });
        this.props.UpdateFile();
    }

    handleOpen = () => {
        this.setState({ open: true });
    }

    handleUpload = () => {
        const file = document.querySelector('[type=file]');
        const formData = new FormData();
        formData.append("cv", file.files[0]);
        const temp = this;
        
        uploadCV(formData)
        .then(function (response) {
            console.log(response.message)
            temp.props.UpdateFile()
        }, function (err) {
            alert(err.message);
            console.log(err);
        })

    }

    handleDelete = () =>{
        deleteCV();
        this.props.UpdateFile()
    }

    render(){
        const {classes} = this.props
        return(
            <div>
            <Paper style = {{ boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)"}}>
            <CardHeader title = {"CV"} handleOpen ={this.handleOpen} isCompulsory= {false} buttonName = {"Add CV"} editable = {this.props.editable}/>
            {this.props.CV && 
            <Paper className={classes.paper} style ={{paddingBottom: 10, paddingLeft: 40}}>
                <FileButton
                name = {this.props.CVName}
                url = {this.props.CV}
                handleDelete = {this.handleDelete}
                editable = {this.props.editable}
                />
            </Paper>
            }
            
            </Paper>   
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
            >
            <CVModal handleClose ={this.handleClose} />
            </Modal>

            </div>
        )
    }
    
    

}

export default withStyles(styles)(CV);