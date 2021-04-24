import React from 'react'
import { BrowserRouter, Route, } from 'react-router-dom';
import Admin from './Pages/allUsers/Admin';
import SingleUser from './Pages/singleUser/SingleUser';


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
