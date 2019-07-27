import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper,Typography,Collapse, Button, withStyles,ToolBa, Modal, Checkbox, NativeSelect,FormControl,InputBase,FormControlLabel } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus,Close } from 'mdi-material-ui'

//Ui
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
        borderRadius: "4px",
      },
      inputLabel:{
        margin: "28px 0 6px 0",
        display: 'inline-block',
    }, inlineWord:{
        // margin: "18px 0 5px 0",
        verticalAlign: "middle",
        textAlign: "center", 
        paddingTop:"15px"

    },inputBoxroot:{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: theme.palette.common.white,
        height: "40px",
        padding: "0 5px 0 11px",
        borderRadius: 4,
        border: '1px solid #ced4da',
    },universityBox:{
        width: "333px",
    },  typeSelectBox:{
        backgroundColor: theme.palette.common.white,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        height: "40px",
        width: "128px",
        padding: "0px 0 0px 11px",
        borderRadius: 4,
        border: '1px solid #cccccc',

    },
  });

class WorkAndProjectExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            currentWorking: false,

        };
    }

    handleSubmit = () =>{
        const data = {
            UniversityID:this.state.email,
            Degree: this.state.password,
            Major:"test",
            FromYear: 2013,
            ToYear: 2017,
            Description:"test",
            GPA:"test",
            GPAType:"test"
        }
    }

    handleChange = field => input => {
        this.setState({[field]:input})
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
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      handleCheck = (event) =>{
        this.setState({currentWorking:event.target.checked})
      }


    render(){
        const {classes, profile} = this.props
        return(
            <div>
            <Paper className = {classes.paper}>
                <div>
                <Typography variant ="h1">
                <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                 Work/ Project Experience
                </div>
                </Typography >    

                <Button color="primary" style= {{marginRight: "20px",float: "right",verticalAlign:"middle"}} size="small" onClick = {this.handleOpen}>
                <Plus/> Add Experience
                </Button>   
                </div>
            </Paper>

            
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            currentWorking = {this.state.currentWorking}
            onClose={this.handleClose}
            >
            <div className = {classes.modal}>
            <Paper className ={classes.paper} style ={{padding:"20px 30px 0px 30px", marginBottom:"3px",height:"40px"}} >
                <div>
                <Typography variant ="h1">
                <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                 Add Experience
                </div>
                <Button style= {{float: "right",verticalAlign:"middle", color:"#000000"}} size="small" onClick = {this.handleClose}>
                <Close/>
                </Button>
                </Typography >       
                </div>
            </Paper>

            <Paper className ={classes.paper} style ={{padding:"50px 30px"}}>
                <BootstrapStyleSearchBox
                    label = "Company"
                    placeHolder = "Company Name"
                    onChangeInput = {this.handleChange("Company")}
                    compusory = {true}
                    />

                <BootstrapStyleSearchBox    
                    label = "Title"
                    placeHolder = "Ex. Project Manager"
                    compusory = {true}
                    />
                <BootstrapStyleSearchBox    
                    label = "Major"
                    placeHolder = "Ex. Design"
                    compusory = {true}
                    />
                <BootstrapStyleSearchBox    
                    label = "Location"
                    placeHolder = "Ex. Melbourne"
                    compusory = {true}
                    />

                <FormControlLabel
                    control={
                        <Checkbox checked={this.state.currentWorking} onChange={this.handleCheck} value="checkedA" />
                    }
                    label="I am currently working in this role"
                    />


                <BootstrapStyleSearchBox    
                    label = "Brief Description"
                    compusory = {false}
                    />

                <div style= {{float: "right"}}>
                <Button variant="contained" color="primary" size="small" onClick ={this.handleSubmit} >
                    Search
                </Button>
                </div>
                    
            </Paper>
            </div>
            </Modal>

            </div>
        )
    }
    
    

}

export default withStyles(styles)(WorkAndProjectExperience);