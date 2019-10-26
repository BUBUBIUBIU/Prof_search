

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

  export const loginSuccess = (content) => ({
    type:'LOGIN_SUCCESS',
    firstName:content.FirstName,
    lastName:content.LastName,
    email:content.Email,
    identity: content.Identity
  })

  export const loginFail = () => ({
    type:'LOGIN_Fail',
    
  })

  export const logout = () => ({
    type:'LOG_OUT',
  })

  export const updateContactList = (contactList) => ({
    type: 'UPDATE_CONTACT_LIST',
    contactList: filterContactListToIdList(contactList)
  })

  export const addToReduxContactList = (id) => ({
    type: 'ADD_TO_CONTACT_LIST',
    id: id
  })

  const filterContactListToIdList = (contactList) => {
    let contactIDList = contactList.map( (item) => {
      return item.Expert.ID
    })
    return contactIDList

  }



  