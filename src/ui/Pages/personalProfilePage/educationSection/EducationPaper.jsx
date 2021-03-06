/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:20th Aug 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles, Modal, Paper} from '@material-ui/core';



//Ui

import CardHeader from '../CardHeader'
import EducationModal from './EducationModal'
import EducationDetail from './EducationDetail'




const styles = theme => ({
  paper: {
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
    top: "20px",
    left: "300px",
    borderRadius: "4px",
  },
  inputLabel: {
    margin: "28px 0 6px 0",
    display: 'inline-block',
  },
  inlineWord: {
    // margin: "18px 0 5px 0",
    verticalAlign: "middle",
    textAlign: "center",
    paddingTop: "15px"

  },
  inputBoxroot: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.common.white,
    height: "40px",
    padding: "0 5px 0 11px",
    borderRadius: 4,
    border: '1px solid #ced4da',
  },
  universityBox: {
    width: "333px",
  },
  typeSelectBox: {
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

  }
});


class EducationPaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
      currentEducations: this.props.educations,
      who: true
    };
    console.log(this.props.educations)
    console.log(this.state.currentEducations)
  }

  componentDidUpdate(){
    if (this.props.educations != this.state.currentEducations) {
      this.setState({
        currentEducations: this.props.educations,
      })
    }
  }


  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.UpdateFile();
  };


  render() {
    const { currentEducations } = this.state;
    console.log(currentEducations)
    return (
      <div className='section-education'>
        <Paper style = {{ boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)"}}>
        <CardHeader title={"Education"} handleOpen={this.handleOpen} isCompulsory={true} buttonName={"Add Degree"} editable = {this.props.editable}/>

        
        {currentEducations &&
          <EducationDetail educationExperience={currentEducations} UpdateFile = {this.props.UpdateFile} identity = {this.props.identity} editable = {this.props.editable}/>
        }
        </Paper>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <EducationModal handleClose={this.handleClose} identity = {this.props.identity}/>
        </Modal>
      </div>

    )
  }

}


EducationPaper.propTypes = {
  educations: PropTypes.object,
  who: PropTypes.string
};



export default withStyles(styles)(EducationPaper);