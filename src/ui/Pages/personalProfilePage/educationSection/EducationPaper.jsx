/**
 * @file this file is for adding/editing/displaying exduaction experience
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description 
 *       
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {  withStyles, Modal, } from '@material-ui/core';



//Ui

import  CardHeader from '../CardHeader'
import EducationModal from './EducationModal'
import EducationDetail from './EducationDetail'




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


  
const educationExperience = [
  {
    universityName: "Melbourne University",
    degree: "Masters Degree, Information Technology",
    year: "2018-2020",
    description: "Obtain master's degree from university of Melbourne"

  },
  {
    universityName: "Monash University",
    degree: "Bachelor Degree, Civil Engineering",
    year: "2015 - 2018",
    description: "Obtain Bachelor's degree from university of Melbourne"

  }
]

class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            universityName:'',
            degree:'',
            major:'',
            fromYear:2013,
            toYear:2017,
            gpa:NaN,
            gpaType:0,
            description:""
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
            <CardHeader title = {"Education"} handleOpen ={this.handleOpen} isCompulsory= {true} buttonName = {"Add Degree"}/>
            <EducationDetail educationExperience = {educationExperience}/>
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            >
              
            <EducationModal handleClose ={this.handleClose}/>
            </Modal>
            </div>

        )
    }
    
}


export default withStyles(styles)(ProfileCard);