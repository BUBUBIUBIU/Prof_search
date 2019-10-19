/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Shaochuan Luo], [date:31th Aug 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles, Modal, Paper} from '@material-ui/core';



//Ui

import CardHeader from '../CardHeader'
import OngoingProjectDetail from './OngoingProjectDetail'
import OngoingProjectModal from './OngoingProjectModal'


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
});


class OngoingProjectPaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
      currentProj: this.props.projects
    };
  }

  componentDidUpdate(){
    if (this.props.projects !== this.state.currentProj) {
      this.setState({
        currentProj: this.props.projects,
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
    const projects = this.state.currentProj;
    return (
      <div>
        <Paper style = {{ boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)"}}>
        <CardHeader title={"OngoingProject"} handleOpen={this.handleOpen} isCompulsory={false} buttonName={"Add Project"} editable = {this.props.editable}/>
        
        {
          projects  &&
          <OngoingProjectDetail ongoingProjects={projects} UpdateFile = {this.props.UpdateFile} editable = {this.props.editable}/ >
        }
        
        </Paper>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <OngoingProjectModal handleClose={this.handleClose} />
        </Modal>
      </div>

    )
  }
}


OngoingProjectPaper.propTypes = {
  projects: PropTypes.object
};



export default withStyles(styles)(OngoingProjectPaper);