import React, { Component } from 'react'
import { Paper, Button, withStyles, ToolBar, Modal, FormControl, NativeSelect, InputBase } from '@material-ui/core';
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox';
import { addPublication } from '../../../../api/personalProfileApi';
import SelectorOne from '../../../reusableComponents/textField/SelectorOne.jsx';

//config
import { years } from '../../../../config/years'
const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        marginTop: "20px",
        borderRadius: "4px",
        padding: "20px 0px 0 30px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
    },
});

class PublicationBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            Title: '',
            Authors: '',
            PublicationDate: '',
            Volumn: '',
            Pages: '',
            Url: '',
        };
    }

    handleSubmit = () => {

        //Check all requirement
        if (
            this.state.Title.replace(/(^s*)|(s*$)/g, "").length !== 0
            && this.state.Authors.replace(/(^s*)|(s*$)/g, "").length !== 0
            ) {
            const data = {
                Type: "Book",
                Title: this.state.Title,
                PublicationYear: parseInt(this.state.PublicationDate),
                Volumn: this.state.Volumn,
                Pages: this.state.Pages,
                Url: this.state.Url,
                Authors: this.state.Authors,
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

    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.paper} style={{ height: "580px" }}>

                <BootstrapStyleSearchBox
                    label="Title"
                    placeHolder="Publication Name"
                    onChangeInput={this.handleChange("Title")}
                    compusory={true}
                />

                <BootstrapStyleSearchBox
                    label="Authors"
                    placeHolder="EX: John"
                    onChangeInput={this.handleChange("Authors")}
                    compusory={true}
                />

                <SelectorOne
                        style={{ flexGrow: 1 }}
                        label="Publication Year"
                        items={years}
                        onChangeSelect={this.handleChange("PublicationDate")}
                        value = {this.state.PublicationDate}
                />

                <BootstrapStyleSearchBox
                    label="Volumn"
                    onChangeInput={this.handleChange("Volumn")}
                />

                <BootstrapStyleSearchBox
                    label="Pages"
                    onChangeInput={this.handleChange("Pages")}
                />

                <BootstrapStyleSearchBox
                    label="URL"
                    onChangeInput={this.handleChange("Url")}
                />

                <Button style={{ color: 'red' }}>Add file</Button>
                <br />
                <Button style={{ float: "right", marginBottom: "10px" }} onClick={this.handleSubmit} variant="contained" color="primary" size="small">
                    Save
            </Button>
            </Paper>
        )
    }
}

export default withStyles(styles)(PublicationBook);