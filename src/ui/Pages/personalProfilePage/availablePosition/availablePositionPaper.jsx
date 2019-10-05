/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Shaochuan Luo], [date:31th Aug 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles, Modal, } from '@material-ui/core';



//Ui

import CardHeader from '../CardHeader'
import AvailablePositionDetail from './AvailablePositionDetail'
import AvailablePositionModal from './AvailablePositionModal'


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


class AvailablePositionPaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
      positions: this.props.positions
    };
    // console.log(this.props.educations)
    // console.log(this.state.currentEducations)
  }

  componentDidUpdate(){
    if (this.props.positions !== this.state.positions) {
      this.setState({
        positions: this.props.positions,
      })
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    // this.props.UpdateFile();
  };


  render() {
    const { positions } = this.state;
    // console.log('positions in paper:', positions)
    // console.log('props in paper:', this.props)
    return (
      <div>
        <CardHeader title={"Available Position"} handleOpen={this.handleOpen} isCompulsory={false} buttonName={"Add Position"} />
        
        {
          positions &&
          <AvailablePositionDetail positions={positions} UpdateFile = {this.props.UpdateFile}/>
        }
        
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <AvailablePositionModal handleClose={this.handleClose} />
        </Modal>
      </div>

    )
  }
}


AvailablePositionPaper.propTypes = {
  educations: PropTypes.object
};



export default withStyles(styles)(AvailablePositionPaper);