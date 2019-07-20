import { combineReducers } from "redux";
import scholarProfileList from './scholarProfileList';
import scholarProfileListOrder from './scholarProfileListOrder';
import scholarProfileListVisibility from './scholarProfileListVisibility';
import scholarProfileSearchInfo from './scholarProfileSearchInfo'
import language from './language'
import user from './user'



export const rootReducer = combineReducers({
    scholarProfileList,
    scholarProfileListOrder,
    scholarProfileListVisibility,
    scholarProfileSearchInfo,
    language,
    user
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