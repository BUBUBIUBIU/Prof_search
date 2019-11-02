/**
 * @file this file is  publications section container
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description 
 * 
 */

import React, { Component } from 'react'
import { withStyles,Paper, Modal,} from '@material-ui/core';


//UI
import  CardHeader from '../CardHeader'
import PublicationModal from './PublicationModal'
import PublicationDetail from './PublicationDetail'

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
            expand: false,
            publication: this.props.publications
        };
    }

    componentDidUpdate() {
      if (this.props.publications != this.state.publication) {
        this.setState({
          publication: this.props.publications,
        })
      }
      console.log("publications Paper update")
    }

    handleOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
        this.props.UpdateFile();
    };

    handleOnclick = () =>{
        if (this.state.expand == false){
            this.setState({expand:true})
        }else{
            this.setState({expand:false})
        }
    }

    render(){
        const {publication} = this.state
        return(
            <div>
              <Paper style = {{ boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)"}}>
                <CardHeader title = {"Publication"} handleOpen ={this.handleOpen} isCompulsory= {false} buttonName = {"Add Publication"} editable = {this.props.editable}/>
                {/* Pop-up Modal */}

                {publication &&
                    <PublicationDetail publications = {publication} UpdateFile = {this.props.UpdateFile} identity={this.props.identity} editable = {this.props.editable} />
                }
            </Paper>

            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
              >
                <PublicationModal handleClose = {this.handleClose} identity = {this.props.identity}/>
                
            </Modal>

            </div>
        )
    }
    
    

}

export default withStyles(styles)(Publication);