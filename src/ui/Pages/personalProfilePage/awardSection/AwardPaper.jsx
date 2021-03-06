/**
 * @file this is Award section
 * @author Shaochuan Luo(shaochuanl@student.unimelb.edu.au)
 * @description    
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, withStyles, Modal } from '@material-ui/core';

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
            award: this.props.awards
        };
    }

    handleOnclick = () =>{
        if (this.state.expand === false){
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
        if (this.props.awards !== this.state.award) {
          this.setState({
            award: this.props.awards,
          })
        }
        // console.log("WorkAndExp Paper update")
    }

    render(){
        const {award} = this.state
        return(
            <div>
            <Paper style = {{ boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)"}}>
                <CardHeader title = {"Award"} handleOpen ={this.handleOpen} isCompulsory= {false} buttonName = {"Add Award"} editable = {this.props.editable}/>

                {award &&
                    <AwardDetails awards = {award} UpdateFile = {this.props.UpdateFile} identity = {this.props.identity} editable = {this.props.editable}/>
                }
            </Paper>

            {/* 没有detials */}
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            >   
            <AwardModal handleClose ={this.handleClose} identity = {this.props.identity}/>
            </Modal>
            </div>
        )
    }
}

export default withStyles(styles)(Award);