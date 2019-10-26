const initialState = []

const contactList = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_CONTACT_LIST": {
            return action.contactList
        }
        case "ADD_TO_CONTACT_LIST": {

            return state.concat([action.id]) //使用concat对数组进行深拷贝，return新数组，否则页面不会重新渲染
        }
        default: {
            return state
        }
    }
}
  
export default contactList;
