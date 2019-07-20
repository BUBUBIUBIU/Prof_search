import React, { Component } from 'react';
//Redux Dependencies
import { createStore } from 'redux'
import { Provider } from "react-redux";
import {rootReducer} from '../../redux/reducer/index.js'


//UI
import RenderRouter from './renderRouter'




const store = createStore(rootReducer);

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
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

