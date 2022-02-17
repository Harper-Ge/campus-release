import React, { Component } from 'react'
import RegisterHead from '../../components/RegisterHead'
import './index.css'
export default class index extends Component {
  render() {
    return (
        <div>
              <RegisterHead/>
              <p className='schedule-title'>步骤 2/3 </p>
              <div className='schedule1'></div>
              <p className='register1-title'>设置密码</p>
          <div>
              <input className='register1-input' type="text" placeholder='请输入密码'/>
              <input className='register1-input' type="text" placeholder='请确认密码'/>
          </div>
        </div>
      
    )
  }
}
