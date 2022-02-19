import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login/index'
import Register1 from './Register1/index'
export default class routed extends Component {
  render() {
    return (
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register1" element={<Register1/>} />
      </Routes>
    )
  }
}
