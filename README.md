# Project Structure
- src/api: All the api url and api methods
- src/config: config files
- src/locale: multi-language support
- src/redux: redux gobal store
- src/ui: all the ui files
  - src/ui/app: entry point and router
  - src/ui/pages: main pages
  - src/ui/reusableComponents: some reusable components


# Important dependencies

## Redux

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



