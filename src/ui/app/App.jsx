import React, { Component } from 'react';
//Redux Dependencies
import { createStore } from 'redux'
import { Provider } from "react-redux";
import {rootReducer} from '../../redux/reducer/index.js';


//UI
import RenderRouter from './renderRouter'
import {loginSuccess} from '../../redux/actions/index'




const store = createStore(rootReducer);

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    componentDidMount(){

      
    }


    render(){
      return(
        <Provider store={store}>
            <RenderRouter/>
        </Provider>
        )
    }
  }


export default App;
