import { object } from "prop-types";

//Define the initial state
const initialState = "DEFAULT_SORT"

//reducer
const scholarProfileListOrder = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SCHOLAR_ORDER": {
      return action.sortBy
    }
    case "BACK_TO_HOME":{
      return initialState
    } default:{
      return state
    }
  }
};

export default scholarProfileListOrder;