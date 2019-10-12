//Dependencies
import React, { Component } from 'react';

//UI
import {Paper,Typography,ListItem,List, IconButton} from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox';
//Test data



function TabContainer(props) {
    return (
    <Typography variant = "body1">
        {props.children}
    </Typography>
    ); 
}



class BrowseSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            expand:{}
        };
    }

    generateProfessorList = (professors,width) => {
        const professorsList = professors.map((professor) =>
            <Paper style={{marginTop:"5px", padding:"15px 20px 0 30px", height:"40px",width:width, marginLeft:"auto"}}>
            <div style ={{display:"flex", alignItems:"center"}}>
                <Typography>
                    {professor.name}
                </Typography>
                <Typography>
                    {professor.project}
                </Typography>
            </div>
            </Paper> 
            );

            return professorsList

    }

    expand(name){
        const status= this.state.expand[name] ? false:true
        let expand = this.state.expand
        expand[name] = status
        this.setState({expand})

    }
            

    render(){
        const {fileds,level} = this.props
        console.log(fileds)
        console.log(this.props.level)
        let width = 750 - level * 50

        const tree = fileds.map((field) =>
                <div>
                <Paper style={{marginTop:"5px",padding:"12px,0", width:width, marginLeft:"auto"}}>
                <div style ={{display:"flex", alignItems:"center"}}>
                <IconButton onClick = { () => this.expand(field.name)}>
                <AddBox>
                    add_circle
                </AddBox>
                </IconButton>
                    <Typography>
                        {field.name}
                    </Typography>
                </div>
                </Paper> 
                {field.fields && this.state.expand[field.name] &&
                     <BrowseSection fileds={field.fields} level={level + 1} />}
                {field.professors && this.state.expand[field.name]  && this.generateProfessorList(field.professors,width-100)}
                </div>

        );


        return(
            <List>
                {tree}
            </List>


        )

    }
};

export default BrowseSection;