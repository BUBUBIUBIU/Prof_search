//Define the initial state
const initialState = []

//reducer
const scholarProfileList = (state = initialState, action) => {
  switch (action.type) {
    case "RECIEVE_SEARCH_INFORMATION": {
      return action.scholarProfileList
    }
    case "BACK_TO_HOME":{
      return initialState
    }
    default:{
      return state
    }
  }
};

export default scholarProfileList;