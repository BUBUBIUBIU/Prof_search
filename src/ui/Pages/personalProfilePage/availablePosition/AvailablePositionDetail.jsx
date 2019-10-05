/**
 * @file this file is for showing the list of publication detail
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description 
 *       
 */

//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper,Typography, withStyles, List, ListItem, Divider,Grid,IconButton, Modal } from '@material-ui/core';
import { Edit } from '@material-ui/icons/';

// UI
import AvailablePositionUpdateModal from './AvailablePositionUpdateModal'

const styles = theme => ({
    paper:{
      ...theme.mixins.gutters(),
      backgroundColor: theme.palette.common.white,
      borderRadius: "4px",
      boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
      // width:"100%"
    },
    purpleAvatar: {
        margin: 10,
        width: 40,
        height:40,
      },
});

class AvailablePositionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positions: this.props.positions,
            positionWaitingForUpdate:{},
            index:0,        
        };
    }

    componentDidUpdate(){
        if (this.props.positions !== this.state.positions) {
          this.setState({
            positions: this.props.positions,
          })
        }
    }

    openUpdateModal = index => event => {
        if (this.state.open !== true)
            this.setState({ index, positionWaitingForUpdate: this.state.positions[index], open: true});
    }

    handleCloseModal= () => {
        this.setState({open: false})
        this.props.UpdateFile()
    }
    
    render(){
        const {classes, positions} = this.props

        // Note: Here we directly use this.props.educationExperience, It might result in bug(no data update), use state instead
        const positionList = positions.map((position, index) =>
        <ListItem key={position._id} >
            <div style ={{width: "100%"}}>
            <Grid container spacing={3} style = {{flexGrow:1}}>
                    <Grid item xs={11}>

                    <div style ={{margin:"10px"}}>
                    <Typography variant ="h5">
                        {position.Position}
                    </Typography>
                    </div>

                    {/* subtitle */}
                    <div style ={{margin:"10px"}}>
                    <Typography variant ="body2">
                        Scholarship amount per year {position.Salary}
                    </Typography>
                    </div>

                    {/* subtitle */}
                    <div style ={{margin:"10px"}}>
                    <Typography variant ="body2">
                        Topic {position.Content}
                    </Typography>
                    </div>

                    {/* subtitle */}
                    <div style ={{margin:"10px"}}>
                    <Typography variant ="body2">
                        Requirement 
                    </Typography>
                    </div>

                    <br/>

                    {/* subtitle */}
                    <div style ={{margin:"10px"}}>
                    <Typography variant ="body2">
                        {position.requirement}
                    </Typography>
                    </div>

                    {positions.length -1 !== index && <Divider variant = "fullWidth"/>}
                    </Grid>

                    <Grid item xs={1}>
                        <IconButton onClick={this.openUpdateModal(index)} >
                                <Edit/>
                        </IconButton>
                    </Grid>

            </Grid>
            </div>
        </ListItem>
        );

        return(
            <div>
                <Paper className = {classes.paper} style ={{marginTop:"2px", padding:"20px 20px 20px 30px"}}>
                {/* title */}
                    <List>
                        {positionList}
                    </List>
                </Paper>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <AvailablePositionUpdateModal handleClose={this.handleCloseModal} currentPositions = {this.state.positionWaitingForUpdate}/>
                </Modal>
            </div>
            
        )

    }
};

//Todo 
AvailablePositionDetail.propTypes = {
    isCompulsory: PropTypes.bool,
    title: PropTypes.string,
}

export default withStyles(styles)(AvailablePositionDetail);