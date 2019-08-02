/**
 * @file this is otherMaterial section
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description    
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

class OtherMaterial extends Component {
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
    handleOpen = () => {
        
    }

    render(){
        return(
            <div>
            <CardHeader title = {"Other Material"} handleOpen ={this.handleOpen} isCompulsory= {false} buttonName = {"Add Material"}/>
            </div>
        )
    }
    
    

}

export default withStyles(styles)(OtherMaterial);