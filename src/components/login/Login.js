import './Login.css'
import {useState} from 'react'
import * as userApi from '../../api/UserApi'
export default function Login() {
  const [loginInfo, setLoginInfo] = useState({username : '', password : ''})
  const onChangeInput = (e) =>{
    const {name, value} = e.target
    setLoginInfo({
      ...loginInfo,
      [name] : value
    })
  }
  const submitLogin = async (e) =>{
    e.preventDefault()
     try {
        const result = await userApi.login({username : loginInfo.username, password : loginInfo.password})
        console.log(result)
        localStorage.setItem('jwt', result.data.jwtToken)
        window.location.reload()

        
     } catch (error) {
       console.log(error)
       window.alert('Login failed !')
     }

  }
  return (
    <div className='loginContainer'>
      
      <div className='login_title'>
       <i class="fa fa-facebook-square" aria-hidden="true"></i>
       <p>
          Facebook
        </p>
      </div>
     
      <form className='login_input'>
          <input className='login_input-username form-control' placeholder='username' value={loginInfo?.username} name='username' onChange={onChangeInput} />
          <input className='login_input-password form-control' type={'password'} value={loginInfo?.password}  placeholder = 'password' onChange={onChangeInput} name='password' />
          <button className='btn btn-outline-primary btn-login' onClick={submitLogin}>Login</button>
      </form>
    </div>
  )
}
