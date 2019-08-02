/**
 * @file this file is for adding publications (publication Modal)
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description 
 *       
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper,Typography,Collapse, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase  } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus, Close } from 'mdi-material-ui';


//UI
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'
import  CardHeader from '../CardHeader'

const styles = theme => ({
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        marginTop:"20px",
        borderRadius: "4px",
        height:"200px",
        padding:"20px 0px 0 30px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
      },
      modal: {
        position: 'absolute',
        width: "800px",
        backgroundColor: theme.palette.common.white,
        boxShadow: theme.shadows[5],
        outline: 'none',
        top:"20px"  ,
        left:"300px",
        borderRadius: "4px"
      }
  });

class Publication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false

        };
    }


    render(){
        const {classes, profile} = this.props
        return(
            <div>
            <Paper className ={classes.paper} style ={{padding:"20px 30px 0px 30px", marginBottom:"3px",height:"40px"}} >
                <div>
                <Typography variant ="h1">
                <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                 Add Publication
                </div>
                <Button style= {{float: "right",verticalAlign:"middle", color:"#000000"}} size="small" onClick = {this.props.handleClose}>
                <Close/>
              
                </Button>
                </Typography >       
                </div>
            </Paper>

            <Paper className ={classes.paper} style ={{padding:"20px 40px"}}>
                <BootstrapStyleSearchBox
                    label = "Brief Description"
                    compusory = {true}
                    />

                <BootstrapStyleSearchBox    
                    label = "URL"
                    compusory = {true}
                    />

                <div style= {{float: "left"}}>
                <Button variant="text" color="primary" size="small" onClick ={this.handleSubmit} >
                    Add File
                </Button>
                </div>
                <div style= {{float: "right"}}>
                <Button variant="contained" color="primary" size="small" onClick ={this.handleSubmit} >
                    save
                </Button>
                </div>

            </Paper>
            </div>

        )
    }
}
Publication.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(Publication);