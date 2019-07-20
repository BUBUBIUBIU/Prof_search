import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, Typography,FormattedMessage, AppBar,Tabs,Tab, List, ListItem,ExpansionPanel, ExpansionPanelSummary,ExpansionPanelDetails, CardContent, ListItemText, Avatar, withStyles, CardHeader, Button } from '@material-ui/core';
import ScholarProfileCard from "./ScholarProfileCard"
import { connect } from 'react-redux'



class ScholarProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "projects",
            previousscholarProfileListVisibility:this.props.scholarProfileListVisibility,
            previousscholarProfileListOrder:this.props.scholarProfileListOrder,
            previousScolorProfile:this.props.scholarProfileList,
            currentScholarProfile:[]
        };
    }

    componentDidMount(){
        this.updateState();
        console.log()
    }

    componentDidUpdate(){
        //Compare to previous prop to avoid infinite loop
        if(this.props.scholarProfileListVisibility != this.state.previousscholarProfileListVisibility || 
            this.props.scholarProfileListOrder != this.state.previousscholarProfileListOrder ||
            this.props.scholarProfileList != this.state.previousScolorProfile)
            {
            this.updateState();
            this.setState({ previousscholarProfileListVisibility:this.props.scholarProfileListVisibility,
                previousscholarProfileListOrder:this.props.scholarProfileListOrder,
                previousScolorProfile: this.props.scholarProfileList});
            
        }
        
        console.log("ScholarProfileContainer did update")
    }


    
    updateState(){
        var tempProfile = this.props.scholarProfileList.slice()

        if (!this.props.scholarProfileListVisibility.professorVisibility){
            console.log("Filter the professor")
            for(var i = tempProfile.length - 1; i>= 0; i--){
                if(tempProfile[i].position == "Professor"){
                    tempProfile.splice(i,1)
                }
            }
        }

        if (!this.props.scholarProfileListVisibility.associateProfessorVisibility){
            for(var i = tempProfile.length - 1; i>= 0; i--){
                console.log("Filter the assciate professor")
                if(tempProfile[i].position == "Associate Professor"){
                    console.log("remoee assciate professor")
                    tempProfile.splice(i,1)
                    }
            }
        }
        // if (!this.props.scholarProfileListVisibility.professorVisibility){
        //     tempProfile = tempProfile.filter(profile => {profile.position != "Professor" })
        // }

        // if(!this.props.scholarProfileListVisibility.associateProfessorVisibility){
        //     tempProfile = tempProfile.filter(profile => {!(profile.position == "Associate Professor") })
        // }

        
        if (!this.props.scholarProfileListVisibility.doctorVisibility){
            for(var i = tempProfile.length - 1; i>= 0; i--){
                if(tempProfile[i].position == "Doctor"){
                    tempProfile.splice(i,1)
                 }
            }
        }

        if(this.props.scholarProfileListOrder == "numberOfPublications" ){
            tempProfile.sort(function(obj1, obj2){
                return obj2.numOfPublications - obj1.numOfPublications //reverse sorting
            })
        }

        if(this.props.scholarProfileListOrder == "name" ){
            tempProfile.sort(function(obj1, obj2){
                var nameA = obj1.first_name.toUpperCase(); // ignore upper and lowercase
                var nameB = obj2.first_name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              
                // names must be equal
                return 0;
            })
        }

        this.setState({currentScholarProfile:tempProfile})
    }





    render() {
        const scholarProfileList = this.state.currentScholarProfile.map((profile) =>
        <ListItem key={profile._id} style={{padding:"0 0 20px 0", width:"750px"}}>
            <ScholarProfileCard profile = {profile}/>
        </ListItem>
        );
        

        return (
            <List>
                    {scholarProfileList}
            </List>
        );
    }
}

ScholarProfileContainer.propTypes = {
    scholarProfileList: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    scholarProfileList: state.scholarProfileList,
    scholarProfileListVisibility: state.scholarProfileListVisibility,
    scholarProfileListOrder:state.scholarProfileListOrder
})


export default connect(mapStateToProps, null)(ScholarProfileContainer);
