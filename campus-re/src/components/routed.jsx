import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
export default class routed extends Component {
  render() {
    return (
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/regist" element={<Register/>} />
      </Routes>
    )
  }
}
