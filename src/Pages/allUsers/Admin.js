import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'

const baseURL = 'https://david-bank-api.herokuapp.com/api/users/';


export default function Admin() {

  const [userData, setUserData] = useState(null);


  const refreshPage = () => {
    window.location.reload(false);
  }

  
  const deleteUserHandler = async (e) => {
    console.log(e.target.id);
    let res = await axios.delete(`${baseURL}`, {
      data: {
        user_id: e.target.id,
      }
    });
    console.log(res);
    if (res.status === 200) {
      refreshPage();
    }
  }

  useEffect(() => {
    const getUserData = async () => {
      setUserData(await axios.get(`${baseURL}`));
    }
    getUserData()
  }, [])


  const pageRender = () => {
    if (!userData) {
      return <h1>Hello Admin! Loading...</h1>
    }
    else {
      return (
        <table className="userDetails">
          <thead>
            <tr>
              <th>ID</th>
              <th>Account number</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Status</th>
              <th>Cash</th>
              <th>Credit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData.data.map((user, i) => {
              let { _id, firstName, lastName, user_id, credit, cash, isActive, } = user;
              return (
                <tr key={i}>
                  <td>{user_id}</td>
                  <td>{_id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{isActive ? 'Active' : 'Inactivate'}</td>
                  <td>{cash}</td>
                  <td>{credit}</td>
                  <td><input type="button" value="X" id={user_id} 
                  onClick={(e) => deleteUserHandler(e)}/></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )
    }
  }


  const addUserEvent = async (event) => {
    event.preventDefault();

    let user = {
      firstName: event.target.fname.value,
      lastName: event.target.lname.value,
      user_id: event.target.id.value,
      cash: event.target.cash.value,
      credit: event.target.credit.value,
    }
    let newData = await axios.post(`${baseURL}`, user);
    console.log(newData);
    if (newData.status === 201) {
      refreshPage()
    }
  }



  return (
    <div>
      <div>
        {pageRender()}
      </div>
      <div className="adminActions">
        <br />
        <hr />
        <br />
        <h2>Add user</h2>
        <form onSubmit={addUserEvent}>
          <label htmlFor="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" /><br />
          <label htmlFor="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" /><br />
          <label htmlFor="id">ID:</label><br />
          <input type="text" id="id" name="id" maxLength="9" minLength="9" /><br />
          <label htmlFor="cash">Cash:</label><br />
          <input type="text" id="cash" name="cash" min="0" /><br />
          <label htmlFor="credit">Credit:</label><br />
          <input type="text" id="credit" name="credit" min="0" /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

