import React from 'react'
import { BrowserRouter, Route, } from 'react-router-dom';
import SingleUser from './Pages/SingleUser';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <>
        <Route path="/:id" exact component={SingleUser} />
        </>
      </BrowserRouter>
    </div>
  )
}
