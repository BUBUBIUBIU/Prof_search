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
import { DataGrid } from 'tubular-react';
import { ColumnModel } from 'tubular-common';

//UI
import Header from '../../reusableComponents/NewHeadNavigator'






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


const columns = [
    new ColumnModel('OrderID'),
    new ColumnModel('CustomerName'),
    new ColumnModel('ShipperCity')
  ];


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
                <DataGrid
                    columns={columns}
                    dataSource={'https://tubular.azurewebsites.net/api/orders/paged'}
                    gridName='Grid'
                />
                </div>
            </div>
       
        )
    }
};

export default withStyles(styles)(ContactList);