//Define the initial state
const initialState = {
    searchText:"",
    location:"University of Melbourne",
    score:"3.9",
    scoreIn:"WAM",
    graduateUniversity:"University of Melbourne"
}

//reducer
const scholarProfileSearchInfo = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_INFO": {
      return Object.assign({},state,{
        searchText:action.searchText,
        location:action.location,
        score:action.score,
        scoreIn:action.scoreIn,
        graduateUniversity:action.graduateUniversity
      })
    }
    case "BACK_TO_HOME":{
      return initialState
    } default:{
      return state
    }
  }
};

export default scholarProfileSearchInfo;