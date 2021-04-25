import React from 'react'
import { BrowserRouter, Route, } from 'react-router-dom';
import SingleUser from './Pages/singleUser/SingleUser'
import Admin from './Pages/allUsers/Admin';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <>
        <Route path="/" exact component={Admin} />
        <Route path="/:id" exact component={SingleUser} />
        </>
      </BrowserRouter>
    </div>
  )
}
