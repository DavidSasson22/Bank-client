import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'

const baseURL = 'https://david-bank-api.herokuapp.com/api/users';


export default function SingleUser(props) {

  const [userData, setUserData] = useState(null);
  const [url,] = useState(props.match.params.id)


  useEffect(() => {
    const getUserData = async () => {
      setUserData(await axios.get(`${baseURL}/${url}`));
    }
    getUserData()
  }, [url])


  const pageRender = () => {
    if (!userData) {
      return <h1>Hello user! Loading...</h1>
    }
    else {
      let { _id, firstName, lastName, user_id, credit, cash, isActive, } = userData.data;
      return (
        <div className="userPage">
          <div className="PageHeader">
            <h1>Hello {firstName} {lastName}!</h1>
          </div>
          <table className="userDetails">
            <thead>
              <tr>
                <th>ID</th>
                <th>Account number</th>
                <th>Status</th>
                <th>Cash</th>
                <th>Credit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user_id}</td>
                <td>{_id}</td>
                <td>{isActive ? 'Active' : 'Inactivate'}</td>
                <td>{cash}</td>
                <td>{credit}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  }



  return (
    <div>
      {pageRender()}
    </div>
  )
}

