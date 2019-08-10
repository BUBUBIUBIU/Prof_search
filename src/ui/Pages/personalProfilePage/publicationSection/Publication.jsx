/**
 * @file this file is  publications section container
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description 
 *       
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper,Typography,Collapse, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase  } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus, Close } from 'mdi-material-ui';


//UI
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'
import  CardHeader from '../CardHeader'
import PublicationModal from './PublicationModal'
import PublicationDetail from './publicationDetail'

const styles = theme => ({
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        marginTop:"20px",
        borderRadius: "4px",
        height:"200px",
        padding:"20px 0px 0 30px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
      },
      modal: {
        position: 'absolute',
        width: "800px",
        backgroundColor: theme.palette.common.white,
        boxShadow: theme.shadows[5],
        outline: 'none',
        top:"20px"  ,
        left:"300px",
        borderRadius: "4px"
      }
  });


  const publications = [
    {
      title: "publication1",
      authors: "Chenyang Lu, Chunyao Wang",
      year: "2018",
      magzine: "IEEE"
  
    },
    {
        title: "publication2",
        authors: "Chenyang Lu, Chunyao Wang",
        year: "2019",
        magzine: "Robot"
  
    }
  ]

class Publication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false

        };
    }

    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

    handleOnclick = () =>{
        if (this.state.expand == false){
            this.setState({expand:true})
        }else{
            this.setState({expand:false})
        }
    }

    render(){
        return(
            <div>
            <CardHeader title = {"Publication"} handleOpen ={this.handleOpen} isCompulsory= {false} buttonName = {"Add Publication"}/>
            {/* Pop-up Modal */}
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
              >
                <PublicationModal handleClose = {this.handleClose}/>
                
            </Modal>

            <PublicationDetail publications = {publications}/>

            </div>
        )
    }
    
    

}

export default withStyles(styles)(Publication);