import React, { Component } from 'react'
import { Paper, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase  } from '@material-ui/core';
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox';

//api
import { addAvailablePosition } from '../../../../api/personalProfileApi';

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

class AvailablePositionPostDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
        };
    }

    submit = () => {
        if(this.positionPostDocInfoCheck()){
            const data = {
                Position: 4,
                Salary: parseInt(this.state.Salary), 
                Content: this.state.Content,
                Requirement: this.state.Requirement
            }
            const temp = this;
            addAvailablePosition(data)
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

    positionPostDocInfoCheck = () => {
        return true;
    }

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }

    handleCheck = (event) => {
        this.setState({ currentWorking: event.target.checked })
    }


    render(){
        const {classes} = this.props
        return(
            <Paper className ={classes.paper} style = {{ height:380}}>
                    
                    <BootstrapStyleSearchBox
                        label = "Scholarship Amount Per Year"
                        placeHolder = "Ex: $60000 per year"
                        onChangeInput={this.handleChange("Salary")}
                    />

                    <BootstrapStyleSearchBox
                        label = "Topic"
                        placeHolder = "Ex: Design"
                        onChangeInput={this.handleChange("Content")}
                    />


                    <BootstrapStyleSearchBox
                        label = "Requirement"
                        placeHolder = 'Briefly describe your requirement here '
                        onChangeInput={this.handleChange("Requirement")}
                    />

                    <Button style = {{color: 'red'}}>Add file</Button>
                    <br/>
                    <Button style= {{float: "right", marginBottom:"10px"}} onClick={this.submit} variant="contained" color="primary" size="small">
                        Save
                    </Button>
                </Paper>
        )
    }
}

export default withStyles(styles)(AvailablePositionPostDoc);

// "Position"    int `binding:"required"`  // 1 phd, 2 ta, 3 ra, 4 postdoc
// "Salary"      uint         `binding:"required,numeric"`
// "Content"     string       `binding:"required"`
// "Requirement" string


