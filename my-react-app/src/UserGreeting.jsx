import React from 'react'

const  UserGreeting = (props)=> {
  
 
        return (props.isLoggedIn ? <h2>Welcome {props.userName}</h2>:  <h2>Login To Continue</h2>
        )
   
          
        
    }
  


export default UserGreeting