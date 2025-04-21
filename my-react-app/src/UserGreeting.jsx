import React from 'react'

const  UserGreeting = (props)=> {
  
    if(props.isLoggedIn){
        return (<h2>Welcome, {props.userName}</h2>)
    }else{
        return(
            <h2>Login To Continue</h2>
        )
    }
  
}

export default UserGreeting