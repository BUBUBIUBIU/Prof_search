// Dependencies
import React, { Component } from 'react';
import {ClickAwayListener,Paper, Typography, withStyles, InputBase,InputLabel, IconButton, Divider, FormLabel } from '@material-ui/core';
import { injectIntl,FormattedMessage, intlShape, FormattedRelative } from 'react-intl';
import ExpandMore from '@material-ui/icons/ExpandMore'




const styles = theme =>({
    root:{
        backgroundColor: theme.palette.common.white,
        display: 'flex',
        height: "40px",
        width: "735px",
        marginBottom:20,
        border:"solid 1px #cccccc",
        borderColor:"#fffff"
    },
    inputLabel:{
        margin: "28px 0 6px 0",
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
    iconButton: {
        padding: 10,
      },
    // define the dropdown papper position, hardcode
    dropDown:{
        zIndex: 1250,
        position:"absolute",
        top: 270,
        width: "620px"
    },
});


class SearchByExpertiseBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            Dropdown: false,
            Dropdown2:false,
            input: '',
            instantSearchResult: [],

        }; 
        this.onClickDropdown = this.onClickDropdown.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onClickAwayHandle = this.onClickAwayHandle.bind(this);
    }

    onClickAwayHandle(event){
    }

    // On SearchBoxChange
    onChangeInput(event) {

    }

    onClickDropdown() {
        this.setState({Dropdown2: false});
        if(this.state.Dropdown == false)
            this.setState({Dropdown: true});
        else
            this.setState({Dropdown: false});
    }
    

    render(){
        const {classes, intl} = this.props;
        const search_by_location = intl.formatMessage({id: 'SearchExperts_locations'});
  
        return (
        <div>
            <div>
                <Typography variant="h3" color="inherit">
                    <p className={classes.inputLabel}>
                        <FormattedMessage id="SearchExperts_locatedIn" defaultMessage="Located in" />
                    </p>
                </Typography>
                <ClickAwayListener onClickAway={this.onClickAwayHandle}>
                    <Paper className={classes.root} elevation={0}>
                        <InputBase placeholder={search_by_location} className={classes.input}
                            onChange={this.onChangeInput} />
                        <IconButton className={classes.iconButton} aria-label="DropDown" onClick={this.onClickDropdown}>
                            <ExpandMore />
                        </IconButton>
                    </Paper>
                </ClickAwayListener>
            </div>
        </div>
        );
    }
}


export default injectIntl(withStyles(styles)(SearchByExpertiseBox));   