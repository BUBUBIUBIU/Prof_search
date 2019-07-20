import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import createBrowserHistory from 'history/createBrowserHistory';


//Redux Dependencies
import { connect } from 'react-redux'
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
import NotFoundPage from '../../ui/page/NotFoundPage.jsx';
import SearchPhdPage from '../searchPhdPage/SearchPhdPage';
import SearchResearchProjectsPage from '../searchResearchProjectsPage/SearchResearchProjectsPage'
import SearchExpertPage from '../searchExpertPage/SearchExpertPage'
import AdvancedSearchExpertPage from '../advanceSearchExpertPage/AdvancedSearchExpertPage'
import AdvancedSearchPhdPage from '../advanceSearchPhdPage/AdvancedSearchPhdPage'
import PersonalProfilePage from '../personalProfilePage/PersonalProfilePage'
import ContactListPage from '../contactList/ContactListPage'



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
            fontFamily: 'Montserrat'
          },
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

  componentDidUpdate(){
    console.log("app re-render")
  }

  render(){
      // from redux, language has two value, 'en' or 'zh'
        const {
          language
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

    return(
      <IntlProvider locale={locale} messages={messages}>
        <MuiThemeProvider theme={theme}>
          {/* <Provider store={store}> */}
            <BrowserRouter >
              <Switch>
                <Route exact path="/" component={SearchExpertPage} />
                <Route exact path="/SearchExpert" component={SearchExpertPage} />
                <Route exact path="/SearchPhdPosition" component={SearchPhdPage} />
                <Route exact path="/SearchResearchProjects" component={SearchResearchProjectsPage} />
                <Route exact path="/SearchExpert/advancedSearchExpert" component={AdvancedSearchExpertPage} />
                <Route exact path="/SearchPhdPosition/advancedSearchPhd" component={AdvancedSearchPhdPage} />
                <Route exact path="/personalProfile" component={PersonalProfilePage} />
                <Route exact path="/contactList" component={ContactListPage} />
                <Route path="*" component={NotFoundPage} />
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

})

export default connect(mapStateToProps,null)(RenderRouter);
