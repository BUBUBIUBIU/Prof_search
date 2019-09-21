//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid,Paper,Typography, Button,withStyles } from '@material-ui/core';
import { Plus} from 'mdi-material-ui';

const styles = theme => ({
    paper:{
      ...theme.mixins.gutters(),
      backgroundColor: theme.palette.common.white,
      borderRadius: "4px",
      boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
      // width:"100%"
    }
});




class CardHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
    }


    render(){
        const {classes, isCompulsory, title,buttonName} = this.props
        return(
            <div>
                <Paper className = {classes.paper} style ={{marginTop:"20px", padding:"25px 20px 0 30px", height:"40px"}}>
                <div>
                <Typography variant ="h1">
                <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                {isCompulsory && <span style={{color:"#E4554D"}}> *</span>}{title}
                </div>
                </Typography >    

                {this.props.editable && 
                <Button color="primary" style= {{marginRight: "20px",float: "right",verticalAlign:"middle"}} size="small" onClick = {this.props.handleOpen}>
                <Plus/> {buttonName}
                </Button> 
                }
                </div>
            </Paper>
            </div>
        )

    }
};

//Todo 
CardHeader.propTypes = {
    isCompulsory: PropTypes.bool, // with * or not 
    title: PropTypes.string, // Header title
    handleOpen:PropTypes.object, // Button action
    buttonName:PropTypes.string // Name of the button

}

export default withStyles(styles)(CardHeader);