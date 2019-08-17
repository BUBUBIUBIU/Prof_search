## Some important logic
### Login check
The web will automaically check the login status using token and ID, It is in ui/app/renderRouter --- componentDidMount()


## programming-standard
1. State, Props, variables Should be camelCase
2. include PropTypeCheck in each of the class, [Click Here for Guidance](https://reactjs.org/docs/typechecking-with-proptypes.html)
3. include defualt prop type!


##security risk
###xss attack
ways to resolve (Todo): <br/>
- filter <script>, <a>, <img> tag in input
- limite the length of input text
- econding '<' and '>'

###crsf attack 
ways to resolve: <br/>
- add referer in http request header
- avoid using get to update data
- add unique token for each form 