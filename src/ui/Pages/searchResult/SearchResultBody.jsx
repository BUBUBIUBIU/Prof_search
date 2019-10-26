/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:26th March 2019]
 */

// Dependencies
import React, { Component } from 'react';
import { withStyles, Paper, Menu, Button, MenuItem, ListItem, List} from '@material-ui/core';
import Sort from '@material-ui/icons/Sort'

//redux Dependencies
import { connect } from 'react-redux'
import {setScholarProfileOrder} from '../../../redux/actions/index'

//api
// import {updateContactListInLocalStorage} from '../../../service/operateLocalStorage'
// import {GetContactList} from '../../../api/contactAPI'

//ui
import ScholarProfileCard from './ScholarProfileCard'
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


class SearchResultBody extends Component{
    constructor(props){
        super(props);
        this.state = {
            buttonName: "Default sorting",
            anchorEl: null
        }; 
    }


    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };

    handleChangeSortingClick = (sortBy,buttonName) => {
        console.log()
        this.setState({ anchorEl: null, buttonName });
      };s


    render(){
        console.log("get search result:")
        console.log(this.props.scholarProfileList)
        const {classes} = this.props;
        const { anchorEl } = this.state;

        const scholarProfileList = this.props.scholarProfileList.map((profile) =>
            <ListItem key={profile._id} style={{padding:"0 0 20px 0", width:"750px"}}>
                <ScholarProfileCard profile = {profile}/>
            </ListItem>
        );

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
                            <MenuItem onClick={() => this.handleChangeSortingClick("default", "Default Sort")}>Relevant</MenuItem>
                            <MenuItem onClick={() => this.handleChangeSortingClick("name", "Name")}>Name</MenuItem>
                            <MenuItem onClick={() => this.handleChangeSortingClick("numberOfPublications" , "Number Of Publications")}>Number Of Publications</MenuItem>
                        </Menu>
                    </Paper>


                    <div>
                        <List>
                            {scholarProfileList}
                        </List>
                    </div>
                </div>
            </div>
            )
    }
} 

const mapStateToProps = state => ({
    scholarProfileList: state.scholarProfileList,
})




export default connect(mapStateToProps, null)(withStyles(styles)(SearchResultBody));   