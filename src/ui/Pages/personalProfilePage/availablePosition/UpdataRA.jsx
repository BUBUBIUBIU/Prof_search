import React, { Component } from 'react'
import { Paper, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase  } from '@material-ui/core';
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox';

//api
import { updateAvailablePosition, deleteAvailablePosition } from '../../../../api/personalProfileApi';
import ConfirmationDialog from '../../../reusableComponents/Dialog/ConfirmationDialog';

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

class UpdateRA extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentRA;
    }

    submit = () => {
        if(this.positionRAInfoCheck()){
            const data = {
                ID: this.state.ID,
                Position: 3,
                Salary: parseInt(this.state.Salary), 
                Content: this.state.Content,
                Requirement: this.state.Requirement
            }
            const temp = this;
            updateAvailablePosition(data)
                .then(function (response) {
                    temp.props.handleClose()
                }, function (err) {
                    alert(err.message);
                    console.log(err);
            })
        }else {
            alert("Some error with your input")
        }
    }

    positionRAInfoCheck = () => {
        return true;
    }

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
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

        deleteAvailablePosition(data)
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
        const {classes} = this.props;
        // console.log('In UpdateRA:', this.state);
        return(
            <div>
            <Paper className ={classes.paper} style = {{ height:380}}>
                    
                    <BootstrapStyleSearchBox
                        label = "Scholarship Amount Per Year"
                        placeHolder = "Ex: $60000 per year"
                        onChangeInput={this.handleChange("Salary")}
                        value = {this.state.Salary}
                    />

                    <BootstrapStyleSearchBox
                        label = "Topic"
                        placeHolder = "Ex: Design"
                        onChangeInput={this.handleChange("Content")}
                        value = {this.state.Content}
                    />


                    <BootstrapStyleSearchBox
                        label = "Requirement"
                        placeHolder = 'Briefly describe your requirement here '
                        onChangeInput={this.handleChange("Requirement")}
                        value = {this.state.Requirement}
                    />

                    <Button style = {{color: 'red'}}>Add file</Button>
                    <br/>
                    <Button style= {{float: "right", marginBottom:"10px"}} onClick={this.submit} variant="contained" color="primary" size="small">
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

export default withStyles(styles)(UpdateRA);




