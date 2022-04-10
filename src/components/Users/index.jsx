import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard'
import { Grid } from '@mui/material'
const axios = require('axios').default

// Make a request for a user with a given ID

const Users = () => {
  const [userlist, setUserlist] = useState([])
  useEffect(() => {
    const axiosPosts = async () => {
      const response = await axios('https://jsonplaceholder.typicode.com/users')
      setUserlist(response.data)
    }
    axiosPosts()
  }, [])

  useEffect(() => {
    console.log(userlist)
  }, [userlist])

  return (
    <Grid container>
      {userlist.map((user) => (
        <Grid item sm={3} xs={12} style={{ display: 'flex' }}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Users
