import React, { Component } from 'react'
import { Paper, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase  } from '@material-ui/core';
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox';
import { addPublication } from '../../../../api/personalProfileApi';

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
        this.state = {
            expand: false,
            title: '',
            authors: '',
            publicationDate: '',
            journal: '',
            volumn: '',
            issue: '',
            pages: '',
            publisher: '',
            url: '',
        };
    }

    // "Type":"Journal",
    // "Title":"title",
    // "PublicationDate":"date",     `optional`
    // "PublicationName":"string",     `optional`
    // "Volumn":"string",     `optional`
    // "Issue":"string",     `optional`
    // "Pages":"string",     `optional`
    // "Publisher":"string",     `optional`
    // "Url": "url",     `optional`
    // "Authors": "Parker"

    handleSubmit = () => {

        //Check all requirement
        if (this.state.authors.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.title.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.url !== NaN) {

            const data = {
                Type: "Journal",
                Title: this.state.title,
                PublicationDate: null,
                PublicationName: "string",
                Volumn: this.state.volumn,
                Issue: this.state.issue,
                Pages: this.state.pages,
                Publisher: this.state.publisher,
                Url: this.state.url,
                Authors: this.state.authors
            }

            console.log(data)
            const temp = this
            addPublication(data)
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

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }

    handleCheck = (event) => {
        this.setState({ currentWorking: event.target.checked })
    }


    render(){
        const {classes} = this.props
        return(
            <Paper className ={classes.paper} style = {{ height:500, overflowY: "scroll"}}>
                    
                    <BootstrapStyleSearchBox
                        label = "Title"
                        placeHolder = "Publication Name"
                        onChangeInput={this.handleChange("title")}
                        compusory = {true}
                    />

                    <BootstrapStyleSearchBox
                        label = "Authors"
                        placeHolder = "EX: John"
                        onChangeInput={this.handleChange("authors")}
                        compusory = {true}
                    />

                    <BootstrapStyleSearchBox
                        label = "Publication date"
                        onChangeInput={this.handleChange("publicationDate")}
                        placeHolder = "EX: 2013-3"
                    />

                    <BootstrapStyleSearchBox
                        label = "Journal"
                        onChangeInput={this.handleChange("journal")}
                    />

                    <BootstrapStyleSearchBox
                        label = "Volumn"
                        onChangeInput={this.handleChange("volumn")}
                    />

                    <BootstrapStyleSearchBox
                        label = "Issue"
                        onChangeInput={this.handleChange("issue")}
                    />

                    <BootstrapStyleSearchBox
                        label = "Pages"
                        onChangeInput={this.handleChange("pages")}
                    />

                    <BootstrapStyleSearchBox
                        label = "Publisher"
                        onChangeInput={this.handleChange("publisher")}
                    />

                    <BootstrapStyleSearchBox
                        label = "URL"
                        onChangeInput={this.handleChange("url")}
                    />

                    <Button style = {{color: 'red'}}>Add file</Button>
                    <br/>
                    <Button style= {{float: "right", marginBottom:"10px"}} onClick={this.handleSubmit} variant="contained" color="primary" size="small">
                        Save
                    </Button>
                </Paper>
        )
    }
}

export default withStyles(styles)(PublicationJournal);


