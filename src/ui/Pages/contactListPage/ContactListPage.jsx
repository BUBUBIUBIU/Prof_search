//Dependencies
import React, { Component } from 'react';
import { Grid,Paper,Button,Menu,MenuItem,withStyles,List,ListItem, Checkbox,FormControlLabel,Typography,Modal} from '@material-ui/core';
import Sort from '@material-ui/icons/Sort'

//UI
import ScholarProfileFilter from '../../reusableComponents/scholarProfileFilter/ScholarProfileFilter'
import SecondHeader from "../../reusableComponents/SecondHeader"
import MiniCard from './MiniCard'
import SearchBox from '../../reusableComponents/textField/SearchBox'
import MessageModal from './MessageModal'

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
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
    },

});



class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }


    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }

    handleCheck = name => event => {
        this.setState({ [name]: event.target.checked });
      };

    handleMessageClick = () =>{
        this.setState({open:true})
    }

    handleClose = () => {
        this.setState({open:false})
    }
    render(){
        const {classes} = this.props;
        const contactList = tempProfiles.map((simpleprofile) =>
        <ListItem key={simpleprofile._id} style = {{padding:"16px 0" }}>
            <MiniCard simpleprofile = {simpleprofile}/>
        </ListItem>
        );

        
        return(
            <div>
                <SecondHeader/>
                <div style = {{margin:"auto", maxWidth: 900}}>
                    <div style = {{display:"flex", }}>
                        <Paper className = {classes.paper} style = {{flex: "1 1 auto", display:"flex", height:60}}>
                                <div style = {{flex: "1 1 auto", maxWidth: 180, minWidth:110 }}>
                                <Sort style={{verticalAlign:"middle"}}/>
                                <Button >
                                    Default
                                </Button>
                                <Menu id="simple-menu">
                                    <MenuItem >Default Sort</MenuItem>
                                    <MenuItem>Name</MenuItem>
                                    <MenuItem >Number Of Publications</MenuItem>
                                </Menu>
                                </div>
                                <div  style = {{flex: "2 1 auto", marginRight:"auto", maxWidth:270, height:40}}>
                                <SearchBox/>
                                </div>

                                <div style ={{flex: "0 1 auto",paddingLeft:40}}>
                                <Button variant="contained" color="primary" onClick = {this.handleMessageClick}>
                                    Message selected
                                </Button>
                                </div>

                        </Paper>
                        <Paper className = {classes.paper} style ={{maxWidth:40,flex: "0 1 auto", display:"flex", flexDirection :"column", alignItems:"baseline", alignContent:"center"}} >
                            <Checkbox
                                color = 'primary'
                                checked={this.state.checkedA}
                                onChange={this.handleCheck('checkedA')}
                                value="checkedA"
                                inputProps={{
                                'aria-label': 'primary checkbox',
                                }}
                                style = {{flex:"auto"}}
                            />
                        </Paper>
                    </div>

                    <List style = {{width: "100%"}}>
                        {contactList}
                    </List>
                </div>

                <Modal
                    aria-labe lledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                <MessageModal handleClose = {this.handleClose}/>
                </Modal>

            </div>
        )
    }
};

export default withStyles(styles)(ContactList);