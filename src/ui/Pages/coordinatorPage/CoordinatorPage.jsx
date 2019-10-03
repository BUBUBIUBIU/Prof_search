/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:3th Oct 2019]
 */

 /*
    The pitfall for this file is managing the contact list 
 */




//Dependencies
import React, { Component } from 'react';
import { withStyles,Typography} from '@material-ui/core';


//UI
import Header from '../../reusableComponents/NewHeadNavigator'
import MUIDataTable from "mui-datatables";





const styles = theme =>({
    root:{
        paddingLeft:100,
        paddingRight:100,
        paddingTop:10,
        paddingBottom: 20,
        background:theme.palette.common.white,
        margin:0,
    },
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "2px 2px 4px 2px #d7d7d7",
        // width:"100%"
    },

});

const columns = ["User Name", "First Name", "Last Name", "Student ID", "Email", "Degree Name",  "Subject Code", "Project Start", "Project End", "Project Type", "Credit points","Supervisor name", "Email", "Co-supervisor", "Other information", "Project Title", "Project Description"];

const data = [
 ["dsa", "James", "Yonkers", "21446", "249232394@qq.com", "Master", "3231", "3.02", "6.2", "Good", "25","Rui zhang", "ssa@qq.com", "Rui", "Good", "search based on pro", "hhh"],
 ["Jxz", "James", "Yonkers", "214451", "249232394@qq.com", "Bachelor", "3231", "3.02", "6.2", "Good", "25","Rui zhang", "ssa@qq.com", "Rui", "Good", "search based on pro", "cdsaghjfva"],
 ["chenlsa", "James", "Yonkers", "214414", "249232394@qq.com", "Master", "3231", "3.02", "6.2", "Good", "25","Rui zhang", "ssa@qq.com", "Rui", "Good", "search based on pro", "hhh"],
 ["dsa", "James", "Yonkers", "21446", "249232394@qq.com", "Master", "3231", "3.02", "6.2", "Good", "25","Rui zhang", "ssa@qq.com", "Rui", "Good", "search based on pro", "hhh"],
 ["Jxz", "James", "Yonkers", "214451", "249232394@qq.com", "Bachelor", "3231", "3.02", "6.2", "Good", "25","Rui zhang", "ssa@qq.com", "Rui", "Good", "search based on pro", "cdsaghjfva"],
 ["chenlsa", "James", "Yonkers", "214414", "249232394@qq.com", "Master", "3231", "3.02", "6.2", "Good", "25","Rui zhang", "ssa@qq.com", "Rui", "Good", "search based on pro", "hhh"],
 ["dsa", "James", "Yonkers", "21446", "249232394@qq.com", "Master", "3231", "3.02", "6.2", "Good", "25","Rui zhang", "ssa@qq.com", "Rui", "Good", "search based on pro", "hhh"],
 ["Jxz", "James", "Yonkers", "214451", "249232394@qq.com", "Bachelor", "3231", "3.02", "6.2", "Good", "25","Rui zhang", "ssa@qq.com", "Rui", "Good", "search based on pro", "cdsaghjfva"],
 ["chenlsa", "James", "Yonkers", "214414", "249232394@qq.com", "Master", "3231", "3.02", "6.2", "Good", "25","Rui zhang", "ssa@qq.com", "Rui", "Good", "search based on pro", "hhh"],
 ["dsa", "James", "Yonkers", "21446", "249232394@qq.com", "Master", "3231", "3.02", "6.2", "Good", "25","Rui zhang", "ssa@qq.com", "Rui", "Good", "search based on pro", "hhh"],
 ["Jxz", "James", "Yonkers", "214451", "249232394@qq.com", "Bachelor", "3231", "3.02", "6.2", "Good", "25","Rui zhang", "ssa@qq.com", "Rui", "Good", "search based on pro", "cdsaghjfva"],
 ["chenlsa", "James", "Yonkers", "214414", "249232394@qq.com", "Master", "3231", "3.02", "6.2", "Good", "25","Rui zhang", "ssa@qq.com", "Rui", "Good", "search based on pro", "hhh"],
];

const options = {
  filterType: 'checkbox',
};




class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async componentDidMount(){

    }


    render(){
        return(
            <div>
                <Header/>
                <div style = {{maxWidth:1500, margin:"auto"}}>
                <MUIDataTable
                    title={"Application List"}
                    data={data}
                    columns={columns}
                    options={options}
                    style = {{background:"#white"}}
                />
                </div>
            </div>
       
        )
    }
};

export default withStyles(styles)(ContactList);