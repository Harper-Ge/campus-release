import React from 'react'

import './index.css'
export default function index() {
    
    function backClick () {
        this.props.history.go(-1)
   }
 
    return (
      <div className='register-bg'>
          <button className='register-return' onClick={backClick} ></button>
          <button className='register-close'></button>
          <span className='register-title'>注册组织账号</span>
      </div>
    )
}
