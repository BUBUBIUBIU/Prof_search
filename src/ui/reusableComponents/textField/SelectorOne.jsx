//Dependencies
import React, { Component } from 'react';
import {NativeSelect, withStyles, Typography, Paper} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
    root:{
        backgroundColor: theme.palette.common.white,
        display: 'flex',
        height: "40px",
        marginBottom:"10px",
        border:"solid 0.5px #cccccc",
        // borderColor:"#fffff"
    },
    inputLabel:{
        margin: "10px 0 6px 0",
        display: 'inline-block',
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
        padding: "0px 0 0px 11px",
        borderRadius: 4,
        border: '1px solid #cccccc',
        width:"90%"

    },
});


class SelectorOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: this.props.items[0]
        };
    }

    

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
        this.props.onChangeSelect(event);

    }


    render(){

        const options = this.props.items.map((item) =>
        <option value={item}>
        {item}
        </option>
        );
        const {classes, isCompulsory} = this.props
        return(

        <div style ={{width:"100%"}}>
            <Typography variant="h3" color="inherit">
                <p className={classes.inputLabel}>
                    {isCompulsory && <span style={{ color: "#E4554D" }}> *</span>} {this.props.label}
                </p>
            </Typography>
            <Paper className={classes.root} elevation={0}>
            <NativeSelect value={this.state.years} onChange={this.handleChange("years")}
                className={classes.typeSelectBox} variant="outlined">
                    {options}
            </NativeSelect>
            </Paper>
        </div>

        );
    }
}

//Todo 
SelectorOne.propTypes = {
    items: PropTypes.array,
    onChangeSelect: PropTypes.func
}

export default withStyles(styles)(SelectorOne);