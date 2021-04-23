import React, { useEffect } from 'react'
import axios from 'axios'

const baseURL = 'https://david-bank-api.herokuapp.com/api/users/';

export default function SingleUser(props) {
  useEffect(() => {
    console.log('eseEffect activated');
    const getUserData = async () => {
      let userData = await axios.get(`${baseURL}${props.match.params.id}`);
      console.log(userData);
    }
    getUserData()
  }, [])
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

