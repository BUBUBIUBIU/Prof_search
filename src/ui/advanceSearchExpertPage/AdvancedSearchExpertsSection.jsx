// Dependencies
import React, { Component } from 'react';
import { withStyles, Grid,Paper, Menu, Button, MenuItem} from '@material-ui/core';
import { FormattedMessage, injectIntl} from 'react-intl';
import Sort from '@material-ui/icons/Sort'

//redux Dependencies
import { connect } from 'react-redux'
import {setScholarProfileOrder} from '../../redux/actions/index'

//ui
import ScholarProfileContainer from '../reusableComponents/scholarProfileCard/ScholarProfileContainer'
import LeftPannel from './LeftPannel.jsx'

const styles = theme =>({ 
    root:{
        paddingLeft:100,
        paddingRight:100,
        paddingTop:10,
        paddingBottom: 20,
        background:theme.palette.common.white,
        margin:0,
        anchorEl: null
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
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <LeftPannel />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={7}>
                        <Paper style={{width: "742px", height:"55px", padding:"5px 0 0 10px", backgroundColor:"#FFFFFF"}}>
                            <Sort style={{verticalAlign:"middle"}}/>
                            <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true"
                                onClick={this.handleClick}>
                                {this.state.buttonName}
                            </Button>
                            <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)}>
                                <MenuItem onClick={() => this.handleChangeSortingClick("default", "Default Sort")}>Default Sort</MenuItem>
                                <MenuItem onClick={() => this.handleChangeSortingClick("name", "Name")}>Name</MenuItem>
                                <MenuItem onClick={() => this.handleChangeSortingClick("numberOfPublications" , "Number Of Publications")}>Number Of Publications</MenuItem>
                            </Menu>
                        </Paper>
                        <ScholarProfileContainer/>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </div>
            )
    }
} 



const mapDispatchToProps = dispatch => ({
    changeSorting: sortBy => dispatch(setScholarProfileOrder(sortBy)),
    dispatch
});

export default connect(null, mapDispatchToProps)(injectIntl(withStyles(styles)(AdvancedSearchExpertsSection)));   