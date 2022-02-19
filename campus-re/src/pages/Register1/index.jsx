import React, { useState } from 'react'
import RegisterHead from '../../components/RegisterHead'
import './index.css'
import axios from 'axios'

export default function Register1() {
  
  const[club_name, setClubname] = useState('');
  const[club_id, setClubid] = useState('');
  const[invitation_code, setInvitationcode] = useState('');
  

  function onSubmit (e) {
    e.preventDefault();
    axios.post('./register', {user: this.state}).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
  
  

    return (
      <div>
          <RegisterHead/>
          <p className='schedule-title'>步骤 1/3 </p>
          <div className='schedule1'></div>
          <p className='register1-title'>填写基本信息及邀请码</p>
        <form onSubmit={ onSubmit } >
          <input className='register1-input' type="text" name='club_name' placeholder='输入组织名称' value={club_name} onChange={(e) => {setClubname(e.target.value)}} />
          <input className='register1-input' type="text" name='club_id' placeholder='输入账号名' value={club_id} onChange={(e) => {setClubid(e.target.value)}}/>
          <input className='register1-input' type="text" name='invitation_code' placeholder='输入邀请码' value={invitation_code} onChange={(e) => {setInvitationcode (e.target.value)}} />
          <button className='next1'>下一步</button>
        </form>
        
      </div>

    )
  }
