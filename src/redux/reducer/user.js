const initialState = 0

const user = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_IN": {
            return 1
        }
        default: {
            return state
        }
    }
}
  
export default user;