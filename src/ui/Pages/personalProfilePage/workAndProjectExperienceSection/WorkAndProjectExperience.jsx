/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu, Shaochuan Luo], [date:24th Aug 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Collapse, Button, withStyles, ToolBa, Modal, Checkbox, NativeSelect, FormControl, InputBase, FormControlLabel } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus, Close } from 'mdi-material-ui'

//Ui
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'
import CardHeader from '../CardHeader'
import WorkExperienceModal from './WorkAndProjectModal'
import WorkProjectExperienceDetail from './WorkProjectExperienceDetail'


const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    backgroundColor: theme.palette.common.white,
    marginTop: "20px",
    borderRadius: "4px",
    height: "40px",
    padding: "20px 0px 0 30px",
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
  }, inlineWord: {
    // margin: "18px 0 5px 0",
    verticalAlign: "middle",
    textAlign: "center",
    paddingTop: "15px"

  }, inputBoxroot: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.common.white,
    height: "40px",
    padding: "0 5px 0 11px",
    borderRadius: 4,
    border: '1px solid #ced4da',
  }, universityBox: {
    width: "333px",
  }, typeSelectBox: {
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
      workAndExperience: this.props.workAndExp
    };
  }

  componentDidUpdate() {
    if (this.props.workAndExp != this.state.workAndExperience) {
      this.setState({
        workAndExperience: this.props.workAndExp,
      })
    }
    console.log("WorkAndExp Paper update")
  }

  handleOnclick = () => {
    if (this.state.expand == false) {
      this.setState({ expand: true })
    } else {
      this.setState({ expand: false })
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.UpdateFile();
  };

  handleCheck = (event) => {
    this.setState({ currentWorking: event.target.checked })
  }


  render() {
    const {workAndExperience} = this.state
    return (
      <div>
        <Paper style = {{ boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)"}}>
          <CardHeader title={"Work/Project Experience"} handleOpen={this.handleOpen} isCompulsory={false} buttonName={"Add Experience"} editable = {this.props.editable}/>

          {workAndExperience &&
            <WorkProjectExperienceDetail 
              workAndProjectExperiences = {workAndExperience} 
              UpdateFile = {this.props.UpdateFile}
              identity = {this.props.identity}
              editable = {this.props.editable}
            />
          }
        </Paper>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          currentWorking={this.state.currentWorking}
          onClose={this.handleClose}
        >
          <WorkExperienceModal handleClose={this.handleClose} identity = {this.props.identity} />
        </Modal>

      </div>
    )
  }
}

WorkAndProjectExperience.propTypes = {
  experience: PropTypes.object
};

export default withStyles(styles)(WorkAndProjectExperience);