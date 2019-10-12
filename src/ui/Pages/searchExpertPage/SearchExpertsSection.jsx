// Dependencies
import React, { Component } from 'react';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { Button ,Typography, withStyles, Collapse, FormGroup ,FormControlLabel, Checkbox} from '@material-ui/core';
import { FormattedMessage, injectIntl} from 'react-intl';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

//Redux Dependencies
import { connect } from 'react-redux'
import {recieveScholorInformation,setScholarProfileVisibility, setSearchInfo} from '../../../redux/actions/index.js'

//Router dependencies
import { Redirect } from 'react-router'

// UI
import SearchByExpertiseBox from '../../reusableComponents/searchBoxComponents/SearchByExpertiseBox'
import SearchLocationBox from '../../reusableComponents/searchBoxComponents/SearchLocationBox';

//API
import {searchExpert} from '../../../api/api.js'


const styles = theme =>({
    root:{
        paddingLeft:100,
        paddingRight:100,
        paddingTop:10,
        paddingBottom: 20,
        margin:0,
    }, label: {
        fontSize: '14px',
        fontFamily:'Montserrat',
        fontWeight:400
    }, 
    advancedSearch:{
        margin: "18px 0 5px 0",
        verticalAlign: "middle",
        textAlign: "center",
    },
    // How to solve inline block alignment problem: https://www.cnblogs.com/jiangzilong/p/6145157.html
    icon: {
        paddingLeft: "3px",
        verticalAlign: "middle",
        // fontSize: 32,
      },
    searchUnit: {
        marginTop: theme.spacing.unit*2,
        marginBottom:theme.spacing.unit*2,
        width: "80%",
        position: 'abosolute',
    },
    searchBoxHearder: {
        marginBottom: 0,
        marginTop: 25,
        paddingTop: 3,
        paddingBottom: 0,
    },
    searchBox: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    customSearchBox:{
        border: '1px solid #ced4da',
        backgroundColor: theme.palette.common.white,
        padding: '10px 12px',
        position: 'relative',
        borderRadius: 4,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    paperHeader:{
        marginTop: theme.spacing.unit*2,
        marginBottom:theme.spacing.unit*2,
    },
    pannel:{
        backgroundColor:"#F8FCFF",
        boxShadow: 'none',
        border:0,
        padding: 0,
        marginLeft:-30,
        borderTop: 'none',
        flexGrow: 2,
    },
    // define the dropdown papper position, hardcode
    dropDown:{
        zIndex: 1200,
        position:"absolute",
        top: 290,
        width: "69%"
    },
    dropDown1:{
        zIndex: 1250,
        position:"absolute",
        top: 290,
        width: "69%"
    },collapse:{
        marginBottom: "49px"
    }
});

  

class SearchExpertsSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            expertExperties: '',
            expandAdvancedSearch : false,
            professor: true,
            assProfessor: true,
            doctor: true,
            lecturer: true,
            redirectToAdvancedPage:false
        }; 
        this.handleOnclickSearch = this.handleOnclickSearch.bind(this);
        this.onChangeExpertExpertiseText = this.onChangeExpertExpertiseText.bind(this);
    }

    onChangeExpertExpertiseText(text) {
        this.setState({expertExperties: text});
    }

    handleAdvancedSearchClick = ()=> {
        if(this.state.expandAdvancedSearch == true)
        this.setState({expandAdvancedSearch: false});
        else
        this.setState({expandAdvancedSearch: true});
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
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
        console.info("Search result returned from Server")
        console.log(profiles)

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
            return <Redirect push to ="/SearchExpert/advancedSearchExpert"/>
        }

        const {classes, intl} = this.props;
        const search_by_Name_or_expertise = intl.formatMessage({id: 'SearchExperts_searchByNameOrExpertise'});
        const advanced_search = intl.formatMessage({id: 'global_advancedSearch'});
        const search_by_location = intl.formatMessage({id: 'SearchExperts_locations'});

        return(
            
            <div className = {classes.root}>
                    <Typography variant="body1" color="inherit">
                    <div style={{margin:"50px 0 5px 0"}}>
                        <FormattedMessage id="SearchExperts_getInformation" defaultMessage="Search global experts by name, expertise and locations" />
                    </div>
                    </Typography>

                <SearchByExpertiseBox 
                    onChangeExpertExpertiseText = {this.onChangeExpertExpertiseText} 
                    label = {search_by_Name_or_expertise}
                    scholarProfile ={true}
                    expertise ={true}
                    />
                <SearchLocationBox/>

                <div>
                    <Typography variant="h3" color="primary" paragraph= {true} component="div">
                    <div onClick = {this.handleAdvancedSearchClick}>
                    <span className = {classes.advancedSearch} >
                    <FormattedMessage id="global_advancedSearch" defaultMessage="Advanced Search" />
                    </span >
                    {!this.state.expandAdvancedSearch && <ArrowRightIcon className = {classes.icon}/>}
                    {this.state.expandAdvancedSearch && <ArrowDropDownIcon className = {classes.icon}/>}
                    </div>
                    </Typography>
 
                     <Collapse in = {this.state.expandAdvancedSearch} timeout="auto" unmountOnExit>
                     <div className = {classes.collapse}>
                     <Typography variant="h3">
                     Position
                     </Typography>
                     <Typography variant="h2" fontWeight ="500">
                     <FormGroup row>
                         <FormControlLabel
                        classes={{
                                label: classes.label, //override default label css
                              }}
                         control={ <Checkbox checked={this.state.checkedB}
                             onChange={this.handleChange('professor')} 
                             value="professor" 
                             color="primary" 
                             checked = {this.state.professor}/>
                         }
                         label="Professor"
                         />
                         <FormControlLabel 
                        classes={{
                            label: classes.label, //override default label css
                        }}
                         control={ <Checkbox checked={this.state.checkedB}
                             onChange={this.handleChange('assProfessor')} 
                             value="assProfessor" 
                             color="primary" 
                             checked = {this.state.assProfessor}/>
                         }
                         label="Ass.Professor"
                         />
                         <FormControlLabel 
                        classes={{
                            label: classes.label, //override default label css
                        }}
                         control={ <Checkbox checked={this.state.checkedB}
                             onChange={this.handleChange('doctor')} 
                             value="doctor" 
                             color="primary"
                             checked = {this.state.doctor} />
                         }
                         label="Doctor"
                         />
                         <FormControlLabel 
                        classes={{
                            label: classes.label, //override default label css
                        }}
                         control={ <Checkbox checked={this.state.checkedB}
                             onChange={this.handleChange('lecturer')} 
                             value="lecturer" 
                             color="primary" 
                             checked = {this.state.lecturer}/>
                         }
                         label="Lecturer"
                         />
                     </FormGroup>
                     </Typography>
                     </div>
                            
                     </Collapse>
                </div>

                <div>
                <Button variant="contained" color="primary" onClick={this.handleOnclickSearch} style = {{boxShadow: 'none',width:'169px',height:'52px'}}>
                <FormattedMessage id="Global_search" defaultMessage="Search" />
                </Button>
                </div>

                {/* <div>
                <ScholarProfileContainer profiles= {this.state.profileList} />
                </div> */}

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
 