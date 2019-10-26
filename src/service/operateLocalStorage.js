
export const updateContactListInLocalStorage = (contactList) => {
    let newContactList = contactList.map( (item) => {
        return item.Expert.ID
      })
    window.localStorage.setItem("contactList",newContactList);   
}

export const removeContactListInLocalStorage = () =>{
    window.removeItem('contactList');  
}


export const checkIfInContactList = (id) =>{
    let conatctList = window.localStorage.getItem("contactList");
    return conatctList.indexOf(id) !== -1
}