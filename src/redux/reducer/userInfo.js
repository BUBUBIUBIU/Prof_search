/**
 * @file this redux state is for checking user login status
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description status == 1 : logged in 
                status == 0: not logged in
                name       
 */

const initialState = {status:0, name:""}

const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS": {
            console.log("redux login success" + action.name)
            return Object.assign({},state,{
                status:1,
                name:action.name,
              })
            }
        case "LOGIN_FAIL": {
            return initialState
        }
        case "LOG_OUT": {
            return initialState
        }
        default: {
            return state
        }
    }
}
  
export default userInfo;