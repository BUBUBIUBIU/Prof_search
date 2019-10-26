/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:19th Oct 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper,withStyles, Modal } from '@material-ui/core';


//UI 
import  CardHeader from '../CardHeader'
import ProjectModal from './ProjectDetailModal'

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

class projectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
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
    }

    render(){

        return(
            <div>
            <Paper style = {{ boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)"}}>
            <CardHeader title={"Detail for course work master project"} 
                        handleOpen={this.handleOpen} 
                        isCompulsory={false} 
                        buttonName={"Fill Details"} 
                        editable/>
                    
            </Paper>

            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            >   
            <ProjectModal handleClose ={this.handleClose}/>
            </Modal>
            </div>
        )
    }
}

export default withStyles(styles)(projectDetail);