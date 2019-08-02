/**
 * @file this file is for adding CV
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description 
 *       
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper,Typography,Collapse, Button, withStyles,ToolBar } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus } from 'mdi-material-ui'

//UI
import  CardHeader from '../CardHeader'

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

class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false

        };
    }

    handleOnclick = () =>{
        if (this.state.expand == false){
            this.setState({expand:true})
        }else{
            this.setState({expand:false})
        }
    }

    render(){
        const {classes, profile} = this.props
        return(
            <div>
            <CardHeader title = {"CV"} handleOpen ={this.handleOpen} isCompulsory= {false} buttonName = {"Add CV"}/>
            
            </div>
        )
    }
    
    

}

export default withStyles(styles)(CV);