import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter,Redirect} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import createBrowserHistory from 'history/createBrowserHistory';

//Redux Dependencies
import { connect } from 'react-redux'
import {loginSuccess} from '../../redux/actions/index'
// import { createStore } from 'redux'
// import { Provider } from "react-redux";
// import {rootReducer} from '../../redux/reducer/index.js'


//local dependencies
import {FormattedMessage, addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zh_CN from '../../locale/zh_CN.js';
import en_US from '../../locale/en_US.js';


//Ui
// import HomePage from '../../ui/page/HomePage.jsx';
import NotFoundPage from '../Pages/notFoundPage/NotFoundPage';
import SearchPhdPage from '../Pages/searchPhdPage/SearchPhdPage';
import SearchResearchProjectsPage from '../Pages/searchResearchProjectsPage/SearchResearchProjectsPage'
import SearchExpertPage from '../Pages/searchExpertPage/SearchExpertPage'
import AdvancedSearchExpertPage from '../Pages/advanceSearchExpertPage/AdvancedSearchExpertPage'
import AdvancedSearchPhdPage from '../Pages/advanceSearchPhdPage/AdvancedSearchPhdPage'
import PersonalProfilePage from '../Pages/personalProfilePage/PersonalProfilePage'
import ContactListPage from '../Pages/contactListPage/ContactListPage'
import MessagePage from '../Pages/messagePage/MessagePage'

import LoginPage from '../Pages/authPage/LoginPage'
import SignUpPage from '../Pages/authPage/SignUpPage'

import NewSearchPage from '../Pages/newSearchPage/NewSearchPage'

//api
import {LoginCheck} from '../../api/authApi'


const theme = createMuiTheme({
  palette: { 
    primary: { main: '#E4554D' }, 
    secondary: { main: '#fafafa' }, 
    paperBackground: { main: "#F8FCFF" }, 
    appBar: { main: 'linear-gradient(45deg, #D4145A 30%, #FBB03B 90%)' }, 
    background:{
        paper:"#F8FCFF",
        card: "#ffffff",
    }
  },
  typography: { 
      fontFamily: 'Montserrat',
      useNextVariants: true,
  },
  overrides: {
      MuiTypography: {
          root: {
              fontFamily: 'Montserrat'
            },
          h1: {
              fontSize: 24,
              fontWeight: 400
          },
          h2: {
              fontSize: 16,
              fontWeight: 600
          },
          h3: {
              fontSize: 14,
              fontWeight: 400
          },
          h4: {
              fontSize: 12,
              fontWeight: 300
          },
          subtitle1:{
              fontSize: 20,
          },
          h5: {
            fontSize: 18,
            fontWeight: 600
        },
          subtitle2:{
              fontSize: 12,
          },
          body1:{
              fontSize: 18,
              fontWeight: 350
          },
          body2:{
              fontSize: 18,
          },
          button:{
              fontSize: 14,
              fontWeight: 800
          },
          caption:{
              fontSize: 10,
          }
  
      },
      MuiButton: {
          root: {
            fontFamily: 'Montserrat',
            textTransform: "capitalize",
            // boxShadow: "none"
          },
          contained:{
            boxShadow: "none"
          }
      },
      MuiFormLabel: {
          root: {
            fontFamily: 'Montserrat',
            fontSize:14
          },
      },
    },
});

addLocaleData([...en, ...zh]);



// const store = createStore(rootReducer);

const browserHistory = createBrowserHistory();


class RenderRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        language: 'zh'
    };
  }

  componentDidMount(){
    // Check Login status
    const loginSuccessful = (name, identity) => this.props.loginSuccess(name,identity);

    console.log("Check login")
    LoginCheck()
      .then(function(response){
        let name = response.content.FirstName +" " + response.content.LastName;
        console.log("Check log in ")
        console.log(response)
        loginSuccessful(name, response.content.Identity);
      },function(err){
        console.log("not logged in")
      }
      )
      
  }


  componentDidUpdate(){
    console.log("app re-render")
  }

  render(){
      // from redux, language has two value, 'en' or 'zh'
        const {
          language,
          userInfo
        } = this.props; 

        let locale;
        let messages;
        if (this.props.language === 'zh') {
          locale = 'zh';
          messages = zh_CN;
        } else if (this.props.language  === 'en') {
          locale = 'en';
          messages = en_US;
        }
      

      // For private routes, if not logged in, navigate to login page
      const PrivateRoute = ({ component: Component, ...rest }) => (
          <Route {...rest} render={(props) => (
            userInfo.status === 1
              ? <Component {...props} />
              : <Redirect to='/login' />
          )} />
        )

    return(
      <IntlProvider locale={locale} messages={messages}>
        <MuiThemeProvider theme={theme}>
          {/* <Provider store={store}> */}
            <BrowserRouter >
              <Switch>
                <Route exact path="/" component={NewSearchPage} />
                <Route exact path="/search" component={NewSearchPage} />
                <Route exact path="/search/searchResult" component={AdvancedSearchExpertPage} />
                <Route exact path="/login" component={ props => <LoginPage authValue = "login"/>} />
                <Route exact path="/signup" component={ props => <SignUpPage authValue = "signup"/>} />
                <Route exact path="/personalProfile" component= { props => <PersonalProfilePage identity = {userInfo.identity} editable = {true}/>} />
                <Route exact path="/contactList" component={ContactListPage} />
                <Route path="*" component={NotFoundPage} />

                
                {/* ----------------Pages below are reserved for furture use -------------------------------*/}
                {/* <Route exact path="/message" component={MessagePage} /> */}
                {/* <Route exact path="/SearchPhdPosition/advancedSearchPhd" component={AdvancedSearchPhdPage} /> */}
                {/* <Route exact path="/SearchPhdPosition" component={SearchPhdPage} />
                <Route exact path="/SearchResearchProjects" component={SearchResearchProjectsPage} /> */}
                {/* <Route exact path="/authsingle" component={AuthSinglePage} /> */}
              </Switch>
            </BrowserRouter>
          {/* </Provider> */}
        </MuiThemeProvider>
    </IntlProvider>
    )
  }
}



const mapStateToProps = state => ({
  language: state.language,
  userInfo: state.userInfo

})

const mapDispatchToProps = dispatch => ({
  loginSuccess: (name, identity)=> dispatch(loginSuccess(name,identity)),
  dispatch
});


export default connect(mapStateToProps,mapDispatchToProps)(RenderRouter);
