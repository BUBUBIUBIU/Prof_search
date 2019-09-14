/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Shaochuan Luo], [date:31th Aug 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Button, withStyles, ListItem, List, FormControl, NativeSelect, InputBase } from '@material-ui/core';
import { Close } from 'mdi-material-ui';
//Ui
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'

//api
import { addResearchInterest } from '../../../../api/personalProfileApi';

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


class ResearchInterestModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Interest: '',
            Interests: []
        };
    }


    handleSubmit = () => {

        //Check all requirement
        if (this.state.Interests.length !== 0) {
            const data = {
                Interests: this.state.Interests
            }
            console.log(data)
            const temp = this;
            addResearchInterest(data)
                .then(function (response) {
                    console.log(response.message)
                    temp.props.handleClose()
                }, function (err) {
                    alert(err.message);
                    console.log(err);
                })

        } else {
            alert("Some error with your input")
        }
    }

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }

    handleAddInterests = () => {
        const Interests = this.state.Interests;
        Interests.push(this.state.Interest)
        this.setState({ Interests })
        console.log(this.state.Interests);
    }

    handleDeleteInterests = (index) => {
        const Interests = this.state.Interests;
        Interests.splice(index, 1);
        this.setState({Interests});
        console.log(this.state.Interests);
    }

    render() {
        const { classes } = this.props

        const researchInterestList = this.state.Interests.map((interest, index) =>
            <ListItem key={interest+index.toString()} style = {{width: "auto", paddingLeft: "0"}} >
                <div style={{width: "100%" }}>
                    {/* ?颜色 */}
                    <Button variant="outlined" color="primary" onClick={this.handleDeleteInterests(index)}>
                        {interest}
                    </Button>
                </div>
            </ListItem>
        );

        return (
            <div className={classes.modal}>
                <Paper className={classes.paper} style={{ padding: "20px 30px 0px 30px", marginBottom: "3px", height: "40px" }} >
                    <div>
                        <Typography variant="h1">
                            <div style={{ verticalAlign: "middle", height: "100%", float: "left" }}>
                                Add Research Interest
                </div>
                            <Button style={{ float: "right", verticalAlign: "middle", color: "#000000" }} size="small" onClick={this.props.handleClose}>
                                <Close />
                            </Button>
                        </Typography >
                    </div>
                </Paper>

                <Paper className={classes.paper} style={{ padding: "0px 30px 50px 30px" }}>

                    <List style = {{display: 'flex', flexDirection:'row', justifyContent:"flex-start", flexWrap: 'wrap'}}>
                        {researchInterestList}
                    </List>

                    {/* 判断一次不可为空 */}
                    <BootstrapStyleSearchBox
                        onChangeInput={this.handleChange("Interest")}
                    />

                    <Button style={{ color: 'red' }} onClick={this.handleAddInterests}>
                        Add Interest
                    </Button>

                    <br/>
                    <div style={{ float: "right" }}>
                        <Button variant="contained" color="primary" size="small" onClick={this.handleSubmit} >
                            Save
                        </Button>
                    </div>

                </Paper>
            </div>

        )
    }

}

ResearchInterestModal.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(ResearchInterestModal);


