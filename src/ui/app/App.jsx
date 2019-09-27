/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:26th March 2019]
 */

import React, { Component } from 'react';
//Redux Dependencies
import { createStore } from 'redux'
import { Provider } from "react-redux";
import {rootReducer} from '../../redux/reducer/index.js';


//UI
import RenderRouter from './renderRouter'




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
