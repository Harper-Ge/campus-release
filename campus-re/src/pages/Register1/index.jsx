import React, { Component } from 'react'
import RegisterHead from '../../components/RegisterHead'
import './index.css'
export default class index extends Component {
  render() {
    return (
      <div>
          <RegisterHead/>
          <p className='schedule-title'>步骤 1/3 </p>
          <div className='schedule1'></div>
          <p className='register1-title'>填写基本信息及邀请码</p>
        <div>
          <input className='register1-input' type="text" placeholder='输入组织名称'/>
          <input className='register1-input' type="text" placeholder='输入账号名'/>
          <input className='register1-input' type="text" placeholder='输入邀请码'/>
        </div>
        
      </div>

    )
  }
}
