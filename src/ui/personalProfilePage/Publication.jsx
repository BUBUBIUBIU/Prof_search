import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper,Typography,Collapse, Button, withStyles,ToolBar } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus } from 'mdi-material-ui'

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

class Publication extends Component {
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
            <Paper className = {classes.paper}>
                <div>
                <Typography variant ="h1">
                <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                 Publication
                </div>
                </Typography >    

                <Button color="primary" style= {{marginRight: "20px",float: "right",verticalAlign:"middle"}} size="small" onClick = {this.handleOnclick}>
                <Plus/> Add Publication
                </Button>   
                </div>
            </Paper>

            <Collapse  in = {this.state.expand} timeout="auto" unmountOnExit>
                <Paper>
                    something
                </Paper>
            </Collapse>
            </div>
        )
    }
    
    

}

export default withStyles(styles)(Publication);