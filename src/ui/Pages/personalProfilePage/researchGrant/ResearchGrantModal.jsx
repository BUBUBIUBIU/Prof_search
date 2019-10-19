/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Shaochuan Luo], [date:31th Aug 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Button, withStyles, FormControl, NativeSelect, InputBase } from '@material-ui/core';
import { Close } from 'mdi-material-ui';
//Ui
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'
import SelectorOne from '../../../reusableComponents/textField/SelectorOne.jsx';

//api
import { addResearchGrant } from '../../../../api/personalProfileApi';

//config
import { years } from '../../../../config/years'

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
        margin: "12px 0 6px 0",
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

    },
});


class ResearchGrantModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    submit = () => {
        if(this.researchGrantInfoCheck()){
            const data = {
                Title: this.state.Title,
                FromYear: parseInt(this.state.FromYear),
                ToYear: parseInt(this.state.ToYear),
                FundingBody: this.state.FundingBody,
                Description: this.state.Description,
                Url: this.state.Url
            }
            // console.log(data)
            const temp = this;
            addResearchGrant(data)
                .then(function (response) {
                    // console.log(response.message)
                    temp.props.handleClose()
                }, function (err) {
                    alert(err.message);
                    console.log(err);
            })
        }else {
            alert("Some error with your input")
        }
    }

    researchGrantInfoCheck = () => {
        return this.titleValidate() && this.fromYearAndToYearValidate()
    }

    titleValidate = () =>{
        try{
            return this.state.Title.replace(/(^s*)|(s*$)/g, "").length !== 0;
        }catch(error){
            return false;
        }
    }

    fromYearAndToYearValidate = () =>{
        if (this.state.ToYear === this.state.FromYear) {
            return (this.state.FromMonth !== 0
            && this.state.ToMonth !== 0
            && this.state.FromMonth <= this.state.ToMonth) 
        }else {
            return (this.state.FromYear !== 0
            && this.state.ToYear !== 0
            && this.state.FromYear <= this.state.ToYear)   
        }
    }

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }

    render() {
        const { classes } = this.props

        return (
            <div className={classes.modal}>

                <Paper className={classes.paper} style={{ padding: "20px 30px 0px 30px", marginBottom: "3px", height: "40px" }} >
                    <div>
                        <Typography variant="h1">
                            <div style={{ verticalAlign: "middle", height: "100%", float: "left" }}>
                                Add Research Grant
                </div>
                            <Button style={{ float: "right", verticalAlign: "middle", color: "#000000" }} size="small" onClick={this.props.handleClose}>
                                <Close />
                            </Button>
                        </Typography >
                    </div>
                </Paper>

                <Paper className={classes.paper} style={{ padding: "50px 30px" }}>
                   
                    <BootstrapStyleSearchBox            
                        label="Title"
                        placeHolder="Grant Name"
                        onChangeInput={this.handleChange("Title")}
                        compusory={true}
                    />

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            label="From Year"
                            isCompulsory = {true}
                            items={years}
                            onChangeSelect={this.handleChange("FromYear")}
                            value = {this.state.FromYear}
                        />

                        <SelectorOne
                            style={{ flexGrow: 1 }}
                            label="To Year (or expected)"
                            isCompulsory = {true}
                            items={years}
                            onChangeSelect={this.handleChange("ToYear")}
                            value = {this.state.ToYear}
                        />
                    </div>

                    <BootstrapStyleSearchBox
                        label="Funding Body"
                        placeHolder="Briefly describe what grant is it"
                        onChangeInput={this.handleChange("FundingBody")}
                        compusory={false}
                    />

                    <BootstrapStyleSearchBox
                        label="Brief description"
                        placeHolder="Briefly describe what grant is it"
                        onChangeInput={this.handleChange("Description")}
                        compusory={false}
                    />

                    <BootstrapStyleSearchBox
                        label="URL"
                        onChangeInput={this.handleChange("URL")}
                        compusory={false}
                    />

                    <Button style = {{color: 'red'}}>Add File</Button>
                    <br/>
                    <div style={{ float: "right" }}>
                        <Button variant="contained" color="primary" size="small" onClick={this.submit} >
                            Save
                        </Button>
                    </div>

                </Paper>
            </div>
        )
    }
}

ResearchGrantModal.propTypes = {
    handleClose: PropTypes.object
}

export default withStyles(styles)(ResearchGrantModal);


