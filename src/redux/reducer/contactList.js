const initialState = []

const contactList = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_CONTACT_LIST": {
            return action.contactList
        }
        default: {
            return state
        }
    }
}
  
export default contactList;