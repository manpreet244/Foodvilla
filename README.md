# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### Why react need state variable like useState , and why cant we use normal variables   
Because react does not keep track of normal variable  . It keeps track of state variables to sync it up with the UI
useState hook is to keep track of variables    
example of useState hook :   
     const [title , setTitle ] = useState("food villa");   
 Here , title is variable to store the value , and setTitle is a function used to update title variable    
 #### -> When the variable title gets changed , whole component is rerendered , and variable is updated using diff algorithm   
 So the question is , only one variable is changing , will the whole component gets rerendered ?    
 Answer is Yes , It triggers the reconciliation process , which makes react faster   
 ![image](https://github.com/user-attachments/assets/3d08c309-b8db-447a-873e-9d13323011ed)

as in this image , there is old tree and a new tree , only the part(in red) that gets updated , get changed which makes React faster

