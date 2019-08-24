/**
 * @file this is Award section
 * @author Shaochuan Luo(shaochuanl@student.unimelb.edu.au)
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
import AwardDetails from './AwardDetails';

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
            expand: false,
            // ？没有open这个property 啊
            award: this.props.awards
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
        this.props.UpdateFile();
    }

    componentDidUpdate() {
        if (this.props.awards != this.state.award) {
          this.setState({
            award: this.props.awards,
          })
        }
        console.log("WorkAndExp Paper update")
    }

    render(){
        const {award} = this.state
        return(
            <div>
            <CardHeader title = {"Award"} handleOpen ={this.handleOpen} isCompulsory= {false} buttonName = {"Add Award"}/>

            {award &&
            <AwardDetails awards = {award} UpdateFile = {this.props.UpdateFile}/>
            }

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