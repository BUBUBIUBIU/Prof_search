import { combineReducers } from "redux";
import scholarProfileList from './scholarProfileList';
import scholarProfileListOrder from './scholarProfileListOrder';
import scholarProfileListVisibility from './scholarProfileListVisibility';
import scholarProfileSearchInfo from './scholarProfileSearchInfo'
import language from './language'
import userInfo from './userInfo'
import contactList from './contactList'



export const rootReducer = combineReducers({
    scholarProfileList,
    scholarProfileListOrder,
    scholarProfileListVisibility,
    scholarProfileSearchInfo,
    language,
    userInfo,
    contactList
});


/*
*Global state structure:
*
*{
*    visibilityForSearchExperts: DEFAULT,
*    visibilityForSearchPhdPositions: DEFAULT,
*    visibilityForSearchResearchProjects: DEFAULT,
*    scholarProfileFromSearchExperts:[],
*    searchExperts:[],
*    searchPHD:[],
*    searchResearchProject:[],
*    user: 0 || 1
*}
*/