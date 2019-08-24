/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:24th Aug 2019]
 */

import React, { Component } from 'react';
import { withStyles, Button, Dialog,DialogTitle, DialogContent, DialogContentText, Typography,DialogActions} from '@material-ui/core';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
const styles = theme => ({
  });

  class ConfirmationDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        };
    }

    componentDidUpdate(){
        if(this.state.open !== this.props.open){
            this.setState({open: this.props.open})
        }
    }

    handleClickOpen = () =>{
        this.setState({open:true})
    }

    handleClose = () => {
        this.props.handleClose()
        // this.setState({open:false})
    }


    render(){

        
        return(
        <div>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">
                <Typography variant = "h1">
                        {this.props.header}
                </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant = "body1">
                        {this.props.text}
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose}  style ={{marginRight:30}}>
                        Disagree
                    </Button>
                    <Button onClick={this.props.handleAgreeAction} variant="contained" color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        )
    }
}

ConfirmationDialog.propTypes = {
    handleAgreeAction: PropTypes.object,
    handleClose:PropTypes.object,
    text:PropTypes.string,
    header:PropTypes.string
}




export default withStyles(styles)(ConfirmationDialog);