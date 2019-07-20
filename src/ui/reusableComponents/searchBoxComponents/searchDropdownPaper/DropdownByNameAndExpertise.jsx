import React, { Component } from 'react'
import {withStyles, Typography, List,Paper, ListItem, Divider} from '@material-ui/core';

//UI
import TinyCard from './TinyCard.jsx'


const styles = theme => ({
    root:{
        paddingTop:17,
        paddingLeft:15,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        postion: "absolute",
        overflow: 'auto',
        maxHeight:'400px'
    },
    branch: {
        marginLeft: 40,
        marginBottom: 2,
    },
    scholarList:{
        margin:0,
        padding: 0,
        color:theme.palette.primary
    },desciplineList:{
        margin:8,
        padding: 8,
        color:theme.palette.primary
    }
  });


class DropdownByNameAndExpertise extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: 'Hello!',

        };
        // this.handleScholarProfileClick = this.handleScholarProfileClick.bind(this);
        // this.handleDesciplineClick = this.handleDesciplineClick.bind(this);
    }


      handleScholarCardClick = (input) => {
        this.props.setSearchBoxText(input)


      };

    handleDesciplineClick = (input) => {
        this.props.setSearchBoxText(input)

      };


    render() { 
        const {classes} = this.props;
        const scholarSimpleProfileList = this.props.instantSearchResult.map((simpleProfie) =>
        <ListItem key={simpleProfie._id} className = {classes.scholarList} button onClick={() => this.handleScholarCardClick(simpleProfie.first_name + " " + simpleProfie.last_name )}>
            <TinyCard simpleProfie = {simpleProfie} />
        </ListItem>
        ); 
        const desciplines = this.props.instanceSearchResultOfDescipline.map((descipline) =>
        <ListItem key={descipline.name} className = {classes.desciplineList} button= {true} onClick = {() => this.handleDesciplineClick(descipline.name)}>
            {/* descipline has two keys - 1. displayString (contains the entire tree path), 2. name(the expertise Name)   */}
            {descipline.displayString} 
        </ListItem>
        );


        return(
            <div>
                <Paper className={classes.root} elevation={1}>
                {this.props.scholarProfile == true && 
                    <List>
                        {scholarSimpleProfileList}
                    </List>}
                    {this.props.scholarProfile == true && 
                    <Divider />}
                {this.props.expertise == true && 
                    <List>
                        {desciplines}
                    </List>}
                </Paper>
            </div>
        );
    }

}

export default withStyles(styles)(DropdownByNameAndExpertise);