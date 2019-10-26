//Define the initial state
const initialState = {
    professorVisibility: true,
    associateProfessorVisibility: true,
    doctorVisibility:true,
}

//reducer
const scholarProfileListVisibility = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SCHOLAR_VISIBILITY": {
      return Object.assign({},state,{
        professorVisibility: action.professorVisibility,
        associateProfessorVisibility: action.associateProfessorVisibility,
        doctorVisibility:action.doctorVisibility,
      })
    }
    case "BACK_TO_HOME":{
      return initialState
    } 
    default:{
      return state
    }
  }
};

export default scholarProfileListVisibility;