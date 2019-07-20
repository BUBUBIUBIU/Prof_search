import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper,Typography,Collapse, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase  } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus, Close } from 'mdi-material-ui';

//Ui
import BootstrapStyleSearchBox from '../reusableComponents/BootstrapStyleSearchBox'




const styles = theme => ({
      paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
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

class ProfileCard extends Component {
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

    render(){
        const {classes, profile} = this.props
        return(
            <div>
            <Paper className = {classes.paper} style ={{marginTop:"20px", padding:"20px 20px 0 30px", height:"40px",}}>
                <div>
                <Typography variant ="h1">
                <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                 <span style ={{color:"#E4554D"}}>* </span >Education
                </div>
                </Typography >    

                <Button color="primary" style= {{marginRight: "20px",float: "right",verticalAlign:"middle"}} size="small" onClick = {this.handleOpen}>
                <Plus/> Add Degree
                </Button>   
                </div>
            </Paper>


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
                 Add Degree
                </div>
                <Button style= {{float: "right",verticalAlign:"middle", color:"#000000"}} size="small" onClick = {this.handleClose}>
                <Close/>
                </Button>
                </Typography >       
                </div>
            </Paper>

            <Paper className ={classes.paper} style ={{padding:"20px 30px"}}>
                <BootstrapStyleSearchBox
                    label = "School"
                    placeHolder = "University Name"
                    compusory = {true}
                    />

                <BootstrapStyleSearchBox    
                    label = "Degree"
                    placeHolder = "Ex. Bachelor's"
                    compusory = {true}
                    />
                <BootstrapStyleSearchBox    
                    label = "Major"
                    placeHolder = "Ex. Design"
                    compusory = {true}
                    />
                <Typography variant="h3" color="inherit">
                    <p className={classes.inputLabel}>
                    <span style={{color:"#E4554D"}}> *</span> Average Score
                    </p>
                </Typography>
                <div style={{width:"100%"}}>
                        {/* score box */}
                        <FormControl style={{marginRight:"15px", width:"100px"}}>
                            <InputBase placeholder="3.9" classes={{
                        root: classes.inputBoxroot,
                        input: classes.scoreBox,
                        }} />
                        </FormControl>

                        {/* <span className={classes.inlineWord}> */}
                            <Typography variant="h3" color="inherit" inline>
                                <span className={classes.inlineWord}>
                                    in
                                </span>
                            </Typography>
                            {/* </span> */}

                        {/* select box */}
                        <FormControl style={{margin:"0 15px 0 15px"}}>
                            <NativeSelect value={this.state.age} onChange={this.handleChange}
                                className={classes.typeSelectBox} variant="outlined" native>
                                <option value="" />
                                <option value={10}>
                                    GPA
                                </option>
                                <option value={20}>
                                    WAM
                                </option>
                                <option value={30}>
                                    Percentage
                                </option>
                            </NativeSelect>
                        </FormControl>


                        <Typography variant="h3" color="inherit" inline>
                            <span className={classes.inlineWord}>
                                From
                            </span>
                        </Typography>


                        {/* University box */}
                        <FormControl style={{margin:"0 0 0 15px", width:"380px"}}>
                            <InputBase placeholder="University Name" classes={{
                        root: classes.inputBoxroot,
                        input: classes.universityBox,
                        }} />
                        </FormControl>
                </div>

                <BootstrapStyleSearchBox    
                    label = "Brief Description"
                    compusory = {false}
                    />

                <div style= {{float: "right"}}>
                <Button variant="contained" color="primary" size="small" >
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


export default withStyles(styles)(ProfileCard);