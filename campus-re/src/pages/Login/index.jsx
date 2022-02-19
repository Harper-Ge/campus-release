import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'
import logo from '../../img/bottomlogo.png'
export default class index extends Component {


  render() {
    return (
        <div className='login-background'>
            <div className='login-header'>
                <input type="button" className='return-btn' onClick={window.close()} />
                <span className='login-title1' >校园号</span>
            </div>

            <form className='login-body'>
                <h2 className='login-title2'>登录</h2>
                <p className='login-title3'>输入账号/组织名称</p>
                <input className='login-input' type="text" />
                <p className='login-title3'>输入密码</p>
                <input className='login-input' type="password" />
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <span style={{display:'inline-block'}}> <NavLink className='login-route' to="/register1" style={{marginLeft:'20px'}}>注册账号</NavLink></span>
                    <span style={{display:'inline-block'}}> <NavLink className='login-route' to="/" style={{marginRight:'20px',right:'0'}}>忘记密码？</NavLink></span>
                </div>
                
                <div>
                    <button className='login-btn'>登录</button>
                </div>
            </form>

            <div className='login-bottom'>
                <img src={logo}/>
            </div>
        </div>
        
    )
  }
}
