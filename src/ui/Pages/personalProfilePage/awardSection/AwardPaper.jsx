/**
 * @file this is otherMaterial section
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description    
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper,Typography,Collapse, Button, withStyles,ToolBar, Modal } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus } from 'mdi-material-ui'

//UI 
import  CardHeader from '../CardHeader'
import AwardModal from './AwardModal'

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

class Award extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
            // ？没有open这个property 啊
        };
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
    }

    render(){
        return(
            <div>
            <CardHeader title = {"Award"} handleOpen ={this.handleOpen} isCompulsory= {false} buttonName = {"Add Award"}/>

            {/* 没有detials */}
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            >   
            <AwardModal handleClose ={this.handleClose}/>
            </Modal>
            </div>
        )
    }
}

export default withStyles(styles)(Award);