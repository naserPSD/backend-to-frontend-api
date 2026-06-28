import React, { useEffect, useState } from 'react'

const App = () => {
  const [user, setUser] = useState([])

  const getUser = () => {
    fetch("/api/user")
      .then(res => res.json())       
      .then(json => 
        setUser(json)
      )
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
     {user.map((data)=>{
      return <h1>{data.title}</h1>
     })}
    </div>
  )
}

export default App