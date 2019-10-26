/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [ Chenyang Lu], [date 18th Oct 2019]
 */

//Dependencies
import React, { Component } from 'react';

//UI
import {Paper,Typography,ListItem,List, IconButton} from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox';
import ProfessorMiniCard from './professorMiniCard'
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

//Test data


class BrowseSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            expand:{}
        };
    }

    generateProfessorList = (professors,width) => {
        const professorsList = professors.map((professor) =>
            <ProfessorMiniCard  width = {width} professor = {professor}  />
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
        const {fields,level} = this.props
        let width = 750 - level * 50

        // recursively display the component
        // 用递归的方法显示组件
        let tree;
        if (fields){
                tree = fields.map((field) =>
                        <div>
                        <Paper style={{marginTop:"5px",padding:"12px,0", width:width, marginLeft:"auto"}}>
                        <div style ={{display:"flex", alignItems:"center"}}>
                        <IconButton onClick = { () => this.expand(field.name)}>
                        {!this.state.expand[field.name] && <AddBox color = "primary"/>}
                        {this.state.expand[field.name] && <IndeterminateCheckBoxIcon color = "primary"/>}
                        </IconButton>
                            <Typography>
                                {field.name}
                            </Typography>
                        </div>
                        </Paper> 
                        {field.fields && this.state.expand[field.name] &&
                            <BrowseSection fields = {field.fields} level={level + 1} />}
                        {field.professors && this.state.expand[field.name]  && this.generateProfessorList(field.professors,width-100)}
                        </div>

                );
                }else{
                    tree = ""
                }


        return(
            <List>
                {tree}
            </List>


        )

    }
};

export default BrowseSection;