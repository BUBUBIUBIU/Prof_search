/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:26th March 2019]
 */

// Dependencies
import React, { Component } from 'react';
import { withStyles, Grid,Paper, Menu, Button, MenuItem} from '@material-ui/core';
import { FormattedMessage, injectIntl} from 'react-intl';
import Sort from '@material-ui/icons/Sort'

//redux Dependencies
import { connect } from 'react-redux'
import {setScholarProfileOrder} from '../../../redux/actions/index'

//ui
import ScholarProfileContainer from '../../reusableComponents/scholarProfileCard/ScholarProfileContainer'
import LeftPannel from './LeftPannel'

const styles = theme =>({ 
    root:{
        paddingLeft:100,
        paddingRight:100,
        paddingTop:30,
        paddingBottom: 20,
        background:theme.palette.common.white,
        margin:0,
        anchorEl: null,
        // maxWidth: 1200,
    },

});


class AdvancedSearchExpertsSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            buttonName: "Default sorting",
            anchorEl: null
        }; 
    }

    componentDidMount(){
        console.log("AdvancedSearchExpertsSection rendered")

    }

    componentDidUpdate(){
        console.log("AdvancedSearchExpertsSection re-rendered")
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };

    handleChangeSortingClick = (sortBy,buttonName) => {
        console.log()
        this.setState({ anchorEl: null, buttonName });
        this.props.changeSorting(sortBy) //redux action
      };


    render(){
        const {classes} = this.props;
        console.log("new Scholarprofiles state recieved in AdvancedSearchExpertSection")
        const { anchorEl } = this.state;
        return(
            <div className={classes.root}>
                    <div style = {{maxWidth: 1200, margin:"auto"}}>
                    <Paper style={{width: "742px", height:"55px", padding:"5px 0 0 10px", backgroundColor:"#FFFFFF"}}>
                        <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true"
                            onClick={this.handleClick}>
                                <Sort style={{verticalAlign:"middle"}}/>
                            {this.state.buttonName}
                        </Button>
                        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)}>
                            <MenuItem onClick={() => this.handleChangeSortingClick("default", "Default Sort")}>Default Sort</MenuItem>
                            <MenuItem onClick={() => this.handleChangeSortingClick("name", "Name")}>Name</MenuItem>
                            <MenuItem onClick={() => this.handleChangeSortingClick("numberOfPublications" , "Number Of Publications")}>Number Of Publications</MenuItem>
                        </Menu>
                    </Paper>
                    <ScholarProfileContainer/>
                </div>
            </div>
            )
    }
} 



const mapDispatchToProps = dispatch => ({
    changeSorting: sortBy => dispatch(setScholarProfileOrder(sortBy)),
    dispatch
});

export default connect(null, mapDispatchToProps)(injectIntl(withStyles(styles)(AdvancedSearchExpertsSection)));   