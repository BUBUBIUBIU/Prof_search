// Dependencies
import React, { Component } from 'react';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { Button ,Typography, withStyles} from '@material-ui/core';
import { FormattedMessage, injectIntl} from 'react-intl';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

//Redux Dependencies
import { connect } from 'react-redux'
import {recieveScholorInformation,setScholarProfileVisibility, setSearchInfo} from '../../../redux/actions/index.js'

//Router dependencies
import { Redirect } from 'react-router'

// UI
import BootstrapStyleSearchBox from '../../reusableComponents/BootstrapStyleSearchBox'
//API
import {searchExpert} from '../../../api/api.js'


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
            // expandAdvancedSearch : false,
            // professor: true,
            // assProfessor: true,
            // doctor: true,
            // lecturer: true,
            redirectToAdvancedPage:false
        }; 
        this.handleOnclickSearch = this.handleOnclickSearch.bind(this);
        this.onChangeExpertExpertiseText = this.onChangeExpertExpertiseText.bind(this);
    }

    onChangeExpertExpertiseText(text) {
        this.setState({expertExperties: text});
    }

    // handleAdvancedSearchClick = ()=> {
    //     if(this.state.expandAdvancedSearch == true)
    //     this.setState({expandAdvancedSearch: false});
    //     else
    //     this.setState({expandAdvancedSearch: true});
    // }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
        console.log(this.state.expertExperties)
      };
    

    componentDidMount() {
        loadCSS(
          'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
          document.querySelector('#insertion-point-jss'),
        );
      }

    async handleOnclickSearch() {    
        const request = this.state.expertExperties;
        const profiles = await searchExpert(request); //调用SearchExpert API向服务器请求数据 (api.jsx)
        // const response = await searchExpert(configObj);

        if (profiles != undefined && profiles != []) {
            this.props.setScholarProfileVisibility({
                professorVisibility:this.state.professor,
                associateProfessorVisibility:this.state.assProfessor,
                doctorVisibility:this.state.doctor })
            this.props.recieveScholorInformation(profiles) //this action listened by two reducer, for detail info, please see redux documentation
            this.props.setSearchInfo({
                searchText:this.state.expertExperties,
                location:"University of Melbourne",
                score:"",
                scoreIn:"",
                graduateUniversity:""
            })
            this.setState({redirectToAdvancedPage: true})
        }
    };

    render(){

        if(this.state.redirectToAdvancedPage){
            return <Redirect to ="/search/searchResult"/>
        }

        const {classes} = this.props;


        return(
            <div style = {{width:"100%",marginTop:0, height:800, background:"#F8FCFF"}}>
            
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
    setScholarProfileVisibility: filter => dispatch(setScholarProfileVisibility(filter)),
    setSearchInfo: searchInfo => dispatch(setSearchInfo(searchInfo)),
    dispatch
});


export default connect(null,mapDispatchToProps)(injectIntl(withStyles(styles)(SearchExpertsSection)));   