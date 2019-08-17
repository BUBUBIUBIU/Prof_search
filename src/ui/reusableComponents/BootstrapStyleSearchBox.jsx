// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Typography, withStyles,InputBase,Paper} from '@material-ui/core';
import { injectIntl,FormattedMessage, intlShape, FormattedRelative } from 'react-intl';
import ExpandMore from '@material-ui/icons/ExpandMore'




const styles = theme =>({
    root:{
        backgroundColor: theme.palette.common.white,
        display: 'flex',
        height: "40px",
        marginBottom:"10px",
        border:"solid 1px #cccccc",
        borderColor:"#fffff"
    },
    inputLabel:{
        margin: "10px 0 6px 0",
        display: 'inline-block',
    },
    input:{
        backgroundColor: theme.palette.common.white,
        padding: '9px 15px',
        // position: 'relative',
        borderRadius: 4,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        flex: 1,
    },
});


class BootStrapStyleSearchBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            input: '',
        }; 
        console.log(this.props);
        
    }

    // On SearchBoxChange
    onChangeInput = (event) => {
        this.props.onChangeInput(event);
    }



    render(){
        const {classes, intl} = this.props;

  
        return (
        <div >
            <Typography variant="h3" color="inherit">
                <p className={classes.inputLabel}>
                {this.props.compusory && <span style={{color:"#E4554D"}}> *</span>} {this.props.label}
                </p>
            </Typography>
            <Paper className={classes.root} elevation={0}>
                    <InputBase placeholder={this.props.placeHolder} className={classes.input}
                        onChange={this.onChangeInput} />
            </Paper>
        </div>
        );
    }
}



// BootStrapStyleSearchBox.propTypes = {
//     label: PropTypes.String,
//     placeHolder:PropTypes.String,
//     compusory:PropTypes.bool

//   };



export default injectIntl(withStyles(styles)(BootStrapStyleSearchBox));   