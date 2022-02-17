import React, { Component } from 'react'
import RegisterHead from '../../components/RegisterHead'
import './index.css'
export default class index extends Component {
  render() {
    return (
      <div>
          <RegisterHead/>
          <p className='schedule-title'>恭喜</p>
          <div className='schedule1'></div>
          <p className='register1-title'>🍻已注册成功！</p>
          <p className='register3-title'>关于隐私政策🔏</p>
      </div>
    )
  }
}
