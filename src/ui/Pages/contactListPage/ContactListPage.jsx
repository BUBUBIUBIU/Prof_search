//Dependencies
import React, { Component } from 'react';
import { Grid,Paper,Button,Menu,MenuItem,withStyles } from '@material-ui/core';
import Sort from '@material-ui/icons/Sort'

//UI
import ScholarProfileFilter from '../../reusableComponents/scholarProfileFilter/ScholarProfileFilter'
import SecondHeader from "../../reusableComponents/SecondHeader"
import MiniCard from './MiniCard'
import ContactCardContainer from './ContactCardContainer'


const tempProfiles = [
    {
        id:0,
        name:"Rui Zhang",
        title:"Professor",
        faculty:"Faulty of Engineering and IT",
        University:"University of Melbourne"
    },{
        id:0,
        name:"Trevor Cohn",
        title:"Associate Professor",
        faculty:"Faulty of Engineering and IT",
        University:"University of Melbourne"
    },{
        id:0,
        name:"Egeman Tanin",
        title:"Associate Professor",
        faculty:"Faulty of Engineering and IT",
        University:"University of Melbourne"
    }
]


const styles = theme =>({
    root:{
        paddingLeft:100,
        paddingRight:100,
        paddingTop:10,
        paddingBottom: 20,
        background:theme.palette.common.white,
        margin:0,
    },

});



class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        const {classes} = this.props;
        return(
            <div>
            <SecondHeader/>
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                    <ScholarProfileFilter/>
                    </Grid>
                    <Grid item xs={8}>
                    <Paper style={{width: "742px", height:"55px", padding:"5px 0 0 10px", backgroundColor:"#FFFFFF"}}>
                            <Sort style={{verticalAlign:"middle"}}/>
                            <Button >
                                Default
                            </Button>
                            <Menu id="simple-menu">
                                <MenuItem >Default Sort</MenuItem>
                                <MenuItem>Name</MenuItem>
                                <MenuItem >Number Of Publications</MenuItem>
                            </Menu>
                        </Paper>
                    <ContactCardContainer contactList = {tempProfiles}/>
                    </Grid>
                </Grid>
            </div>
            </div>
        )
    }
};

export default withStyles(styles)(ContactList);