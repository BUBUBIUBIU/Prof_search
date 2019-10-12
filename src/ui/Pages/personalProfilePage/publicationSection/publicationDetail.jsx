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
import PublicationUpdateModal from './PublicationUpdateModal'

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

class EducationDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publication: this.props.publications,
            publicationWaitingForUpdate:{},
            index:0,        
        };
    }

    componentDidUpdate(){
        if (this.props.publications !== this.state.publication) {
          this.setState({
            publication: this.props.publications,
          })
        }
    }

    openUpdateModal = index => event => {
        if (this.state.open !== true)
            this.setState({ index, publicationWaitingForUpdate: this.state.publication[index], open: true});
    }

    handleCloseModal= () => {
        this.setState({open: false})
        this.props.UpdateFile()
    }
    
    render(){
        const {classes, publications} = this.props

        // Note: Here we directly use this.props.educationExperience, It might result in bug(no data update), use state instead
        const publicationList = publications.map((publication, index) =>
        <ListItem key={publication._id} >
            <div style ={{width: "100%"}}>
            <Grid container spacing={3} style = {{flexGrow:1}}>
                    <Grid item xs={11}>

                    <div style ={{margin:"10px"}}>
                    <Typography variant ="h5">
                    ({publication.PublicationYear}) {publication.Title}
                    </Typography>
                    </div>

                    {/* subtitle */}
                    <div style ={{margin:"10px"}}>
                    <Typography variant ="body2">
                    {publication.Authors}
                    </Typography>
                    </div>

                    <div style ={{margin:"10px"}}>
                        <Typography variant ="body2">
                            {publication.PublicationName && `${publication.PublicationName} `}{publication.Volumn && `(${publication.Volumn}) `}{publication.Pages && `${publication.Pages} `}{publication.Publisher && `${publication.Publisher} `}
                        </Typography>
                    </div>
                  
                    {publications.length -1 !== index && <Divider variant = "fullWidth"/>}
                    
                    </Grid>
                    {this.props.editable && 
                    <Grid item xs={1}>
                        <IconButton onClick={this.openUpdateModal(index)} >
                                <Edit/>
                        </IconButton>
                    </Grid>}

            </Grid>
            </div>
        </ListItem>
        );

        return(
            <div>
                <Paper className = {classes.paper} style ={{marginTop:"2px", padding:"20px 20px 20px 30px"}}>
                {/* title */}
                    <List>
                        {publicationList}
                    </List>
                </Paper>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <PublicationUpdateModal handleClose={this.handleCloseModal} currentPublications = {this.state.publicationWaitingForUpdate} identity={this.props.identity}/>
                </Modal>
            </div>
            
        )

    }
};

//Todo 
EducationDetailComponent.propTypes = {
    isCompulsory: PropTypes.bool,
    title: PropTypes.string,
}

export default withStyles(styles)(EducationDetailComponent);