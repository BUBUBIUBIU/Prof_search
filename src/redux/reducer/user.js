

/**
 * @file his redux state is for checking user login status
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description status == 1 : logged in 
                status == 0: not logged in       
 */

const initialState = 0

const user = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS": {
            console.log("redux login success")
            return 1
        }
        case "LOGIN_FAIL": {
            return 0
        }
        default: {
            return state
        }
    }
}
  
export default user;