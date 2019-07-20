import { BottomNavigationAction } from "@material-ui/core";

export const recieveScholorInformation = (scholarProfileList) => ({
    type: 'RECIEVE_SEARCH_INFORMATION',
    scholarProfileList: scholarProfileList,
  })

  export const backToHomePage = () => ({
    type: 'BACK_TO_HOME_PAGE',
  })

  export const setScholarProfileVisibility = (visibility) => ({
    type:'SET_SCHOLAR_VISIBILITY',
    professorVisibility: visibility.professorVisibility,
    associateProfessorVisibility: visibility.associateProfessorVisibility,
    doctorVisibility:visibility.doctorVisibility,
  })

  export const setScholarProfileOrder = (sortBy) => ({
    type:'SET_SCHOLAR_ORDER',
    sortBy: sortBy
  })

  export const setSearchInfo = (searchInfo) => ({
    type: 'SET_SEARCH_INFO',
    searchText:searchInfo.searchText,
    location:searchInfo.location,
    score:searchInfo.score,
    scoreIn:searchInfo.scoreIn,
    graduateUniversity:searchInfo.graduateUniversity
  })


  
  export const changeLanguage = (language) => ({
    type: 'CHANGE_LANGUAGE',
    language:language
  })

  export const logIn = () => ({
    type:'LOG_IN',
  })


  // export const searchPhd_ScholarInformationClear = ()  => ({
  //   type: 'SEARCH_PHD_RECEIVE_SCHOLAR_INFORMATION',
  //   filter
  // })
  // export const searchResearchProject_ScholarInformationClear = ()  => ({
  //   type: 'SEARCH_Research_PROJECT_RECEIVE_SCHOLAR_INFORMATION',
  //   filter
  // })
  