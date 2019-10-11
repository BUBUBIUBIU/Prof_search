import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase  } from '@material-ui/core';
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox';
import { updatePublication, deletePublication } from '../../../../api/personalProfileApi';
import SelectorOne from '../../../reusableComponents/textField/SelectorOne.jsx';

//config
import { years } from '../../../../config/years'
import ConfirmationDialog from '../../../reusableComponents/Dialog/ConfirmationDialog'

const styles = theme => ({
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        marginTop:"20px",
        borderRadius: "4px",
        padding:"20px 0px 0 30px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
    },
});

class PublicationJournal extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentJournal;
    }

    handleSubmit = () => {

        //Check all requirement
        if (
            this.state.Title.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.Authors.replace(/(^s*)|(s*$)/g, "").length !== 0
            ) {

            const data = {
                ID: this.state.ID,
                Type: "Journal",
                Title: this.state.Title,
                Authors: this.state.Authors,
                PublicationYear: parseInt(this.state.PublicationDate),
                PublicationName: this.state.PublicationName,
                Volumn: this.state.Volumn,
                Issue: this.state.Issue,
                Pages: this.state.Pages,
                Publisher: this.state.Publisher,
                Url: this.state.Url
            }

            // console.log(data)
            // console.log('identity in update step:', this.props.identity);
            const temp = this
            updatePublication(data, this.props.identity)
                .then(function (response) {
                    temp.props.handleClose()
                }, function (err) {
                    alert(err.message);
                    console.log(err);
                })

        } else {
            alert("please fullfill all required files")
        }
    }

    handleDialogOpen= () => {
        this.setState({ModalOpen:true})
    }

    handleDialogClose = () =>{
        this.setState({ModalOpen:false})
    }

    handleAgreeAction = () => {
        this.handleDialogClose()
        this.handleDelete()
    }

    handleDelete = () => {
        const data = {
            ID: this.state.ID
        }
        const temp = this

        deletePublication(data, this.props.identity)
        .then(function (response) {
            temp.props.handleClose()
        }, function (err) {
            alert(err.message);
            console.log(err);
        })

    }

    // Old function
    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }

    render(){
        const {classes} = this.props
        return(
            <div>
            <Paper className ={classes.paper} style = {{ height:500, overflowY: "scroll"}}>
                    
                    <BootstrapStyleSearchBox
                        label = "Title"
                        placeHolder = "Publication Name"
                        onChangeInput={this.handleChange("Title")}
                        compusory = {true}
                        value = {this.state.Title}
                    />

                    <BootstrapStyleSearchBox
                        label = "Authors"
                        placeHolder = "EX: John"
                        onChangeInput={this.handleChange("Authors")}
                        compusory = {true}
                        value = {this.state.Authors}
                    />

                    <SelectorOne
                        style={{ flexGrow: 1 }}
                        label="Publication Year"
                        items={years}
                        onChangeSelect={this.handleChange("PublicationDate")}
                        value = {this.state.PublicationDate}
                    />

                    <BootstrapStyleSearchBox
                        label = "Volumn"
                        onChangeInput={this.handleChange("Volumn")}
                        value = {this.state.Volumn}
                    />

                    <BootstrapStyleSearchBox
                        label = "Issue"
                        onChangeInput={this.handleChange("Issue")}
                        value = {this.state.Issue}
                    />

                    <BootstrapStyleSearchBox
                        label = "Pages"
                        onChangeInput={this.handleChange("Pages")}
                        value = {this.state.Pages}
                    />

                    <BootstrapStyleSearchBox
                        label = "Publisher"
                        onChangeInput={this.handleChange("Publisher")}
                        value = {this.state.Publisher}
                    />

                    <BootstrapStyleSearchBox
                        label = "URL"
                        onChangeInput={this.handleChange("Url")}
                        value = {this.state.Url}
                    />

                    <Button style = {{color: 'red'}}>Add file</Button>
                    <br/>

                    <Button style= {{float: "right", marginBottom: "10px"}} onClick={this.handleSubmit} variant="contained" color="primary" size="small">
                        Save
                    </Button>

                    <Button style= {{float: "right", margin: "0 10px 10px 0"}} onClick={this.handleDialogOpen} size="small">
                        Delete
                    </Button>
            </Paper>
            
            <ConfirmationDialog 
                open = {this.state.ModalOpen}
                handleAgreeAction = {this.handleAgreeAction}
                handleClose = {this.handleDialogClose}
                text = "Are you sure you want to delete this degree?"
                header = "Notification"
            />
            </div>

        )
    }
}

PublicationJournal.propTypes = {
    handleClose: PropTypes.object
}

export default withStyles(styles)(PublicationJournal);


