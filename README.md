# Project Structure
- src/api: All the api url and api methods
- src/config: config files
- src/locale: multi-language support
- src/redux: redux gobal store
- src/ui: all the ui files
  - src/ui/app: entry point and router, global theme is inside router file
  - src/ui/pages: main pages
  - src/ui/reusableComponents: some reusable components

# Programming standard

Through the project, although some coding style are inconsistent, but it is worth to standardize the the coding style

### Naming Rule
  1.  Methods/ Variable name:
       -  State, Props, variables Should be camelCase
       - include PropTypeCheck in each of the class, [Click Here for Guidance](https://reactjs.org/docs/typechecking-with-proptypes.html)
       - include defualt prop type!
       - All the api methods should follow PascalCase to distinguish from normal methods

  2. API Address
      -  All the API address should all in UPPERCASE and with underscore to separate each word
  3. File name
      - All the JSX file should be in PascalCase
      - All the other files should use camelCase
      - Folder name should use camelCase 

### JSX File format
  1. All the file should start with a copy write signature
  2. Check protoType at the end for each JSX file


### Api Writing rule


### JSS writing rule
1. In this project, most css styles are directly write inside the html element (not sure if it is a good writing style)
2. For highly reusable elements, we can directly override the global theme (to override, go to /src/ui/app/rendeRouter), check this [override](https://material-ui.com/customization/components/#global-css-override) document.
      - for example, for "Paper" element, we basically use our customize style and define a style in every file, but it can actually be overridden, it's one drawback of this project
      - Another example is MuiTypography, we override all the Typography style. (check /src/ui/app/rendeRouter)
3. To achieve the layout provided by designer, two ways are highly recommended 
      - [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). This is raw css3 new features, very powerful
      - [Grid](https://material-ui.com/components/grid/). Material-ui provided a encapsulated version, but please note, this is a encapsulated version of original [css3 grid](https://css-tricks.com/snippets/css/complete-guide-grid/)


# Important dependencies

## Redux
In redux, we mainly have two things:
1. action
2. Reducer

Action is used to change the global state(i.e. reducer)
Reducer is the global state

In current project, only two reducers are still actively in use, userInfo and scholarProfileList
- userInfo
This is used to store the current userInfo, data structure:
```
{
  status: 0/1,
  firstName:"Chenyang",  
  lastName:"Lu",
  email: "email"
  identity: "student"/"expert"
}
```
- scholarProfileList
This 
- contactList
This is maintained for user's (only students identity's) contactList. It is mainly used for checking if  the professors in searching result already in contactList or not.
  - Two actions are used in contactList state： updateContactList, and AddToContactList
      - UpdateContactList is used in renderRouter page line 190-200, call this method only if there's the contactList Array is empty
      - AddToContactList is used in src/browsePage/professorMiniCar and src/searchResult/ScholarProfileCard




#### some pitfall for redux
1. In reducer, when return a new state, never do any operation on original state, otherwise, the page will not render as expected.
      - If your state is an object, use object.assign()
      - If your state is an array, use concat (don't use push...)




## React router
Tutorial available at https://reacttraining.com/react-router/web/guides/quick-start.
It is worth take about 3 hours go through the tutorial.
After went through react router tutorial, I think you can comes out with a better solution for where we put the header (i.e. src/ui/resuableComponents/NewHeadNavigator)....
### Redirect (i.e. Link to another page) using react router
Take src/ui/reusableComponents/NewHeadNavigator.jsx as an example, when we want to redirect:
1. Set a new state (e.g. line 91)
2. redirect (In "render lifecycle", Check the state, then use redirect to redirect to another page) sample code shown below:
```
    if(this.state.toAnotherPage === "home"){
      if (window.location.pathname !== "/" && window.location.pathname != "/search"){
      return <Redirect push to ="/" /> 
      }
    }
``` 
Please Note, We can choose to use either:
-  ``` <Redirect push to = '/pathname' />> ``` 
-  ``` <Redirect to = '/pathname' />> ``` 
if we use push to, it means the previous page will be put in history (so when we click back arrow in browser, we can go back to previous page)
if we use to, it means the current page will be replaced (so when we click back arrow in browser, we will not go back to previous page)





## Material-UI
All the components are based on material-ui.
We have also developed some other resuable components but they are also based on material-ui
JSS (css based on javascript) is also based on material-ui


# Authentication system

## Overview
The autentication system is achieved by

Same login api (src/authenAPI/Login), Same LoginCheck api(src/authenAPI/LoginCheck) are applied for both expert identity and student identity. 

## Some relative API
1. Login ApI
request with "email" and "password"
response with {"message": success, "content":{id:15, token:"", FirstName:"", LastName:"", identity:""}}

2. LoginCheck Api
request with "id" and "token" 
response with:{"message": success, "content":{id:15, token:"", FirstName:"", LastName:"", identity:""}}

### User Identity
In current system (2019.09.10), we have two different user identity including student and expert.

Different identity results in different page display. In current system, only two page displayed differently:
- Edit profile page (/src/ui/pages/persoProfilePage)
- Contact List page (src/pages/contactListPage)


## Redux and router cooperation
### Login
1. Once login, will execute redux action (src/redux/action/index/loginSuccess)
2. Then the redux reducer, userInfo will be updated to the current user's name, user's identity, and login status:1 

### CheckLogin
   CheckLogin is only executed in renderRooter.jsx (src/ui/app/renderRouter.jsx). The reson doing that is:
- renderRouter is the parnts component of all other pages, so it make sure the redux reducer will be updated to the newest state.
- React router can check the user current login state, to ensure if they have the authority to access protected routes. (i.e. authentication with router), the sample code is as below:

```
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    userInfo.status === 1
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

```
- So inside router:
```
<PrivateRoute path='/protected' component={Protected} />
```

### Authority based on identity




## Security potential improvment

1. avoiding xss attack
- filter script, a, img tag in input
- limite the length of input text
- econding '<' and '>'

2. avoiding crsf attack 
- add referer in http request header
- avoid using get to update data
- add unique token for each form 




# Programming-standard
1. State, Props, variables Should be camelCase
2. include PropTypeCheck in each of the class, [Click Here for Guidance](https://reactjs.org/docs/typechecking-with-proptypes.html)
3. include defualt prop type!




# Issues of this project
## Performance issues

- For some dynamically created components through list, key are not assigned, this will result in some performance issues, due to react diff algorithm
- For stateful react component, shouldComponentUpdate() should be introduced to improve performance.
- For some reusable components, its better to make them stateless (create by function) to improve performance

## Lack of using FormData
In this project, nearly all the components are controlled [components](https://reactjs.org/docs/forms.html#controlled-components),thus, we hardly use from data to submit inputs to the server. It introduce a lot of redundancy codes. Still not sure if it is a good practice or not.



# Reusable Component

Demo of BootstrapStyleSearchBox
```
    <BootstrapStyleSearchBox
        label="Degree" //Input Label, optional
        placeHolder="Ex. Bachelor of Engineering" //placeHolder compulsory
        onChangeInput={this.handleChange("Degree")}  //pass function here
        compusory={true} // if true, a '*' before label, default false
    />
```

# Contact List

Status 0 : added
Status 1: pending
status 2: expert offered
status 3 : expert reject
status 4: student accept
status 5 : student reject 


# CSS Layout
CSS3 provide two powerful features for layout organization, in this project, we mainly use Flexbox but Grid is another way to do the layout organization
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Grid](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)