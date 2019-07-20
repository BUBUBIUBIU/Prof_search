const initialState = 'en'

const language = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_LANGUAGE": {
            return action.language
        }
        default: {
            return state
        }
    }
}
  
export default language;