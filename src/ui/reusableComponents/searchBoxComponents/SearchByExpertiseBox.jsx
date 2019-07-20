// Dependencies
import React, { Component } from 'react';
import {ClickAwayListener,Paper, Typography, withStyles, InputBase,InputLabel, IconButton, Divider, FormLabel } from '@material-ui/core';
import { injectIntl,FormattedMessage, intlShape, FormattedRelative } from 'react-intl';
import ExpandMore from '@material-ui/icons/ExpandMore'

// UI
// import ScholarProfileComponent from './ScholarProfileComponent.jsx';
import DropdownWithoutInput from './searchDropdownPaper/DropdownWithoutInput.jsx';
import DropdownByNameAndExpertise from './searchDropdownPaper/DropdownByNameAndExpertise.jsx'


 

const styles = theme =>({
    root:{
        backgroundColor: theme.palette.common.white,
        display: 'flex',
        height: "40px",
        width: "735px",
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
        // position:"absolute",
        // top: 270,
        width: "735px"
    },
});

class SearchByExpertiseBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            Dropdown: false,// Control the dropdown of first search dropdown
            Dropdown2:false,// Control the dropdown of second search dropdown
            input: '',
            instantSearchResult: [],
            instanceSearchResultOfDescipline:[], // descipline data structure: {id: 0, name:"disc",nickName:"", pid:0,pidlist:[0]}

        }; 
        this.onClickDropdown = this.onClickDropdown.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onClickAwayHandle = this.onClickAwayHandle.bind(this);
        this.setSearchBoxText = this.setSearchBoxText.bind(this);
    }

    onClickAwayHandle(event){
        this.setState({Dropdown: false});
        this.setState({Dropdown2: false});
    }

    // On SearchBoxChange
    async onChangeInput(event) {
        this.props.onChangeExpertExpertiseText(event.target.value); 
        const desciplineInstantResult = [];
        this.setState({instanceSearchResultOfDescipline: desciplineInstantResult});
        event.persist();
        this.setState({Dropdown: false});
        this.setState({input: event.target.value});
        let Dropdown =false 
        let Dropdown2 = false;
        // Set the dropdown logic
        if (event.target.value != ''){
            Dropdown= false
            Dropdown2= true
        }
        // request instant search
        const request = event.target.value;
        const response = [];
        if(desciplineInstantResult.length == 0 && response.length == 0 ){
            Dropdown= false
            Dropdown2= false
        }
        if(response != undefined && response != []){
            this.setState({instantSearchResult: response});
        }
        this.setState({Dropdown});
        this.setState({Dropdown2});

        // alert(response[0].first_name)
        // console.log(response)
        //Lift state up, the actually state is stored in SearchExpertsSection Component
    }

    onClickDropdown() {
        this.setState({Dropdown2: false});
        if(this.state.Dropdown == false)
            this.setState({Dropdown: true});
        else
            this.setState({Dropdown: false});
    }

    setSearchBoxText(input) {
        this.props.onChangeExpertExpertiseText(input); //call back function
        this.setState({input});
        this.setState({Dropdown: false});
        this.setState({Dropdown2: false});
    }
    

    render(){
        const {classes, intl} = this.props;
        const search_by_expertise = intl.formatMessage({id: 'SearchExperts_expertises'});
  
        return (
        <div>
        <div>
                    <Typography variant="h3" color="inherit">
                        <p className={classes.inputLabel}>
                        {this.props.label}
                        </p>
                    </Typography>
                    {/* <ClickAwayListener onClickAway={this.onClickAwayHandle}> */}
                        <Paper className={classes.root} elevation={0}>
                            <InputBase placeholder={search_by_expertise} className={classes.input}
                                onChange={this.onChangeInput} value={this.state.input}/>
                            <IconButton className={classes.iconButton} aria-label="DropDown"
                                onClick={this.onClickDropdown}>
                                <ExpandMore />
                            </IconButton>
                        </Paper>
                    {/* </ClickAwayListener> */}
        </div>
        <div  className = {classes.dropDown}>
            {this.state.Dropdown && <DropdownWithoutInput/>}
            </div> 
                <div  className = {classes.dropDown}>
                        {
                        this.state.Dropdown2 && 
                        <DropdownByNameAndExpertise 
                        instantSearchResult = {this.state.instantSearchResult}
                        instanceSearchResultOfDescipline = {this.state.instanceSearchResultOfDescipline}
                        setSearchBoxText = {this.setSearchBoxText}
                        scholarProfile = {this.props.scholarProfile}
                        expertise ={this.props.expertise}
                        />
                        }
            </div> 
        </div>
        );
    }
}


export default injectIntl(withStyles(styles)(SearchByExpertiseBox));   