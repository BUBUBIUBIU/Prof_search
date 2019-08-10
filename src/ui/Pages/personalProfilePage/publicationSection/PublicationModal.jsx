/**
 * @file this file is for adding publications (publication Modal)
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description 
 *       
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Paper,Typography,Collapse, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase, AppBar, Tab, Tabs, Divider, CardContent} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus, Close } from 'mdi-material-ui';


//UI
import BootstrapStyleSearchBox from '../../../reusableComponents/BootstrapStyleSearchBox'
import  CardHeader from '../CardHeader'

const styles = theme => ({
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        marginTop:"20px",
        borderRadius: "4px",
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
        borderRadius: "4px",
    },
    cardAppBar:{
        backgroundColor: theme.palette.background.card,
        flexGrow: 1,
        // shadows: 0,
        boxShadow:'none',
    }, 
  });

function TabContainer(props) {
    return (
    <Typography variant = "body1">
        {props.children}
    </Typography>
    ); 
}

class Publication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            value: "Journal"
        };
    }

    handleTab = (event,value) => {
        this.setState({value});
    }

    render(){
        const {value} = this.state; 
        const {classes, profile} = this.props
        return(

            <div className = {classes.modal}>
                <Paper className ={classes.paper} style ={{padding:"20px 30px 0px 30px", marginBottom:"3px",height:"80px"}} >
                    <div>
                        <Typography variant ="h1">
                            <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                            Add Publication
                            </div>
                            <Button style= {{float: "right",verticalAlign:"middle", color:"#000000"}} size="small" onClick = {this.props.handleClose}>
                            <Close/>
                            </Button>
                        </Typography >   
                        <AppBar position="static" color="default" className={classes.cardAppBar}>
                            <Tabs variant="fullWidth" value={value} indicatorColor="primary" onChange={this.handleTab}>
                                <Tab label="Journal" value = "Journal" />
                                <Tab label="Conference" value = "Conference" />
                                <Tab label="Book" value = "Book"/>  
                            </Tabs>
                        </AppBar>
                    </div>
                </Paper> 

                {value === "Journal" && <Paper className ={classes.paper} style = {{ height:"600px", overflowY: "scroll"}}>
                
                    <BootstrapStyleSearchBox
                        label = "Title"
                        placeHolder = "Publication Name"
                        compusory = {true}
                    />

                    <BootstrapStyleSearchBox
                        label = "Authors"
                        placeHolder = "EX: John"
                        compusory = {true}
                    />

                    <BootstrapStyleSearchBox
                        label = "Publication date"
                        placeHolder = "EX: 2013-3"
                    />

                    <BootstrapStyleSearchBox
                        label = "Journal"
                    />

                    <BootstrapStyleSearchBox
                        label = "Volumn"
                    />

                    <BootstrapStyleSearchBox
                        label = "Issue"
                    />

                    <BootstrapStyleSearchBox
                        label = "Pages"
                    />

                    <BootstrapStyleSearchBox
                        label = "Publisher"
                    />

                    <BootstrapStyleSearchBox
                        label = "URL"
                    />

                    <Button style = {{color: 'red'}}>Add file</Button>
                    <br/>
                    <Button style= {{float: "right", marginBottom:"10px"}} variant="contained" color="primary" size="small">
                        Save
                    </Button>

                </Paper>
                }

                {value === "Conference" && <Paper className ={classes.paper} style = {{ height:"600px", overflowY: "scroll"}}>
                
                    <BootstrapStyleSearchBox
                        label = "Title"
                        placeHolder = "Publication Name"
                        compusory = {true}
                    />

                    <BootstrapStyleSearchBox
                        label = "Authors"
                        placeHolder = "EX: John"
                        compusory = {true}
                    />

                    <BootstrapStyleSearchBox
                        label = "Publication date"
                        placeHolder = "EX: 2013-3"
                    />

                    <BootstrapStyleSearchBox
                        label = "Conference"
                    />

                    <BootstrapStyleSearchBox
                        label = "Volumn"
                    />

                    <BootstrapStyleSearchBox
                        label = "Issue"
                    />

                    <BootstrapStyleSearchBox
                        label = "Pages"
                    />

                    <BootstrapStyleSearchBox
                        label = "URL"
                    />

                    <Button style = {{color: 'red'}}>Add file</Button>
                    <br/>
                    <Button style= {{float: "right", marginBottom:"10px"}} variant="contained" color="primary" size="small">
                        Save
                    </Button>
                </Paper>
                }

                {value === "Book" && <Paper className ={classes.paper} style = {{ height:"580px"}}>
                
                    <BootstrapStyleSearchBox
                        label = "Title"
                        placeHolder = "Publication Name"
                        compusory = {true}
                    />

                    <BootstrapStyleSearchBox
                        label = "Authors"
                        placeHolder = "EX: John"
                        compusory = {true}
                    />

                    <BootstrapStyleSearchBox
                        label = "Publication date"
                        placeHolder = "EX: 2013-3"
                    />

                    <BootstrapStyleSearchBox
                        label = "Volumn"
                    />

                    <BootstrapStyleSearchBox
                        label = "Pages"
                    />

                    <BootstrapStyleSearchBox
                        label = "URL"
                    />

                    <Button style = {{color: 'red'}}>Add file</Button>
                    <br/>
                    <Button style= {{float: "right", marginBottom:"10px"}} variant="contained" color="primary" size="small">
                        Save
                    </Button>
                </Paper>
                }
                
            </div>

        )
    }
}
Publication.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(Publication);