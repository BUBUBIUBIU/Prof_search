// Dependencies
import React, { Component } from 'react';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { Button ,Typography, withStyles} from '@material-ui/core';
import {  injectIntl} from 'react-intl';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

//Redux Dependencies
import { connect } from 'react-redux'
import {recieveScholorInformation} from '../../../redux/actions/index.js'

//Router dependencies
import { Redirect } from 'react-router'

// UI
import BootstrapStyleSearchBox from '../../reusableComponents/BootstrapStyleSearchBox'
//API
// import {GetContactList} from '../../../api/contactAPI'
import {SearchExpert} from '../../../api/searchApi'



const styles = theme =>({
 label: {
        fontSize: '14px',
        fontFamily:'Montserrat',
        fontWeight:400
    },
    textField:{
        width: 500,
        height: 30,
        border: "0.5px solid black",
        borderRadius: 5,
        fontFamily: 5,
    },
    maxWidth:{
        maxWidth: 700,
        margin:"auto"
    },
    ButtonLabel:{
        textTransform: 'capitalize',
        // paddingLeft: 0,

    },
    ButtonRoot:{
        paddingLeft:0
    }

});

  

class SearchExpertsSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            expertExperties: '',
            redirectToAdvancedPage:false
        }; 
        this.handleOnclickSearch = this.handleOnclickSearch.bind(this);
        this.onChangeExpertExpertiseText = this.onChangeExpertExpertiseText.bind(this);
    }

    onChangeExpertExpertiseText(text) {
        this.setState({expertExperties: text});
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
    toAnotherPage = () => {
        this.setState({toAnotherPage: "browse"})
    }
    

    componentDidMount() {
        loadCSS(
          'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
          document.querySelector('#insertion-point-jss'),
        );
      }

    async handleOnclickSearch() {
            
        const request = this.state.expertExperties;
        const that = this;
        const profiles = await SearchExpert(request); //调用SearchExpert API向服务器请求数据 (api.jsx)
        // const response = await searchExpert(configObj);
        this.props.recieveScholorInformation(profiles)
        this.setState({redirectToAdvancedPage: true})

        // if (profiles != undefined && profiles != []) {
        //     this.props.recieveScholorInformation(profiles) //this action listened by two reducer, for detail info, please see redux documentation
        //     this.setState({redirectToAdvancedPage: true})
        // }
    };

    render(){

        if(this.state.redirectToAdvancedPage){
            return <Redirect push to ="/search/searchResult"/>
        }
        if(this.state.toAnotherPage === 'browse'){
            return <Redirect push to ="/browse"/>
        }

        const {classes} = this.props;


        return(
            <div style = {{width:"100%",marginTop:0, height:800}}>
            
                <div style = {{ padding:"100px  100px 0 100px"}} >
                    <Typography className ={classes.maxWidth}  
                        variant="body1" 
                        color="inherit"  
                        style = {{margin:"auto", fontSize:24, fontWeight:300}}
                    >

                        Search Projects/ Academics by keywords
                        
                    </Typography>


                    <div className ={classes.maxWidth} style = {{margin:"30px auto", display:"flex", alignItems:"center",justifyContent:"flex-start"}}>

                        <div style = {{flex:"0 1 auto", marginRight: 30, width:"100%" }}>
                            <BootstrapStyleSearchBox
                                placeHolder="Artificial intelligence, big data, nature langugae process" 
                                onChangeInput={this.handleChange("expertExperties")} 
                                compusory={false} 
                            />
                        </div>

                        <div  style = {{flex:"0 1 auto"}}>
                            <Button variant="contained"  color="primary" size = "large" onClick={this.handleOnclickSearch}>
                                Search 
                            </Button>
                        </div>
                    </div>
                    
                </div >

                <div className ={classes.maxWidth}>
                <Button 
                    color="primary" 
                    size = "large"
                    classes={{
                        root: classes.ButtonRoot, // override default root style
                        label: classes.ButtonLabel, //override default text style
                    }}
                    onClick = {this.toAnotherPage}
                    >
                    or Browse By Project Topics <ArrowRightIcon/>
                </Button>
                </div>
            </div>

        )
    }
}


const mapDispatchToProps = dispatch => ({
    recieveScholorInformation: (scholarProfileList) => dispatch(recieveScholorInformation(scholarProfileList)),
    // updateContactList: (contactList) => dispatch(updateContactList(contactList)),
    dispatch
});




export default connect(null,mapDispatchToProps)(injectIntl(withStyles(styles)(SearchExpertsSection)));   