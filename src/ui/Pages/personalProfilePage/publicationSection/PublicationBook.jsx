import React, { Component } from 'react'
import { Paper, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase  } from '@material-ui/core';
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox';

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

class PublicationBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            value: "Journal"
        };
    }

    render(){
        const {classes} = this.props
        return(
            <Paper className ={classes.paper} style = {{ height:"580px"}}>
                
            <BootstrapStyleSearchBox
                label = "Title"
                placeHolder = "Publication Name"
                compusory = {true}
            />

            <BootstrapStyleSearchBox
                label = "Authors"
                placeHolder = "EX: John"
                compusory = {true}
            />

            <BootstrapStyleSearchBox
                label = "Publication date"
                placeHolder = "EX: 2013-3"
            />

            <BootstrapStyleSearchBox
                label = "Volumn"
            />

            <BootstrapStyleSearchBox
                label = "Pages"
            />

            <BootstrapStyleSearchBox
                label = "URL"
            />

            <Button style = {{color: 'red'}}>Add file</Button>
            <br/>
            <Button style= {{float: "right", marginBottom:"10px"}} variant="contained" color="primary" size="small">
                Save
            </Button>
        </Paper>
        )
    }
}

export default withStyles(styles)(PublicationBook);