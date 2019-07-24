import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper,Typography,Collapse, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase  } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus, Close } from 'mdi-material-ui';

import BootstrapStyleSearchBox from '../reusableComponents/BootstrapStyleSearchBox'

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

    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

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
            <Paper className = {classes.paper}>
                <div>
                <Typography variant ="h1">
                <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                 Publication
                </div>
                </Typography >    

                <Button color="primary" style= {{marginRight: "20px",float: "right",verticalAlign:"middle"}} size="small" onClick = {this.handleOpen}>
                <Plus/> Add Publication
                </Button>   
                </div>
            </Paper>

{/*             <Collapse  in = {this.state.expand} timeout="auto" unmountOnExit>
                <Paper>
                    something
                </Paper>
            </Collapse> */}

 <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            >
            <div className = {classes.modal}>
            <Paper className ={classes.paper} style ={{padding:"20px 30px 0px 30px", marginBottom:"3px",height:"40px"}} >
                <div>
                <Typography variant ="h1">
                <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                 Update Publication
                </div>
                <Button style= {{float: "right",verticalAlign:"middle", color:"#000000"}} size="small" onClick = {this.handleClose}>
                <Close/>
                </Button>
                </Typography >       
                </div>
            </Paper>

            <Paper className ={classes.paper} style ={{padding:"20px 30px"}}>
                <BootstrapStyleSearchBox
                    label = "Brief Description"
                    compusory = {true}
                    />

                <BootstrapStyleSearchBox    
                    label = "URL"
                    compusory = {true}
                    />
                
            </Paper>
            </div>
            </Modal> 
            </div>
        )
    }
    
    

}

export default withStyles(styles)(Publication);