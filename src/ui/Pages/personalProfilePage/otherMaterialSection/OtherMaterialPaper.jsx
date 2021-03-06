/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:28th Aug 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper,withStyles, Modal } from '@material-ui/core';


//UI 
import  CardHeader from '../CardHeader'
import OtherMaterialModal from './OtherMaterialModal'
import OtherMaterialDetails from './OtherMaterialDetails'

const styles = theme => ({
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        marginTop:"20px",
        borderRadius: "4px",
        height:"40px",
        padding:"20px 0px 0 30px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
      }
  });

class OtherMaterial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            // ？没有open这个property 啊
            otherMaterials: this.props.otherMaterial
        };
    }

    componentDidUpdate() {
        if (this.props.otherMaterial != this.state.otherMaterials) {
          this.setState({
            otherMaterials: this.props.otherMaterial,
          })
        }
        console.log("otherMaterial Paper update")
    }

    handleOnclick = () =>{
        if (this.state.expand == false){
            this.setState({expand:true})
        }else{
            this.setState({expand:false})
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
        this.props.UpdateFile();
    }

    render(){
        const {otherMaterials} = this.state
  
        return(
            <div>
            <Paper style = {{ boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)"}}>
            <CardHeader title = {"Other Material"} handleOpen ={this.handleOpen} isCompulsory= {false} buttonName = {"Add Material"} editable = {this.props.editable}/>
            
            {otherMaterials &&
                <OtherMaterialDetails otherMaterials = {otherMaterials} UpdateFile = {this.props.UpdateFile} identity={this.props.identity} editable = {this.props.editable}/>
            }
            </Paper>
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            >   
            <OtherMaterialModal handleClose ={this.handleClose} identity={this.props.identity}/>
            </Modal>
            </div>
        )
    }
}

export default withStyles(styles)(OtherMaterial);