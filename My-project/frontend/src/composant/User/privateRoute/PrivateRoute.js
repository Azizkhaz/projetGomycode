import React, { useEffect} from 'react'
import {useNavigate} from 'react-router'
import {fetchAuthUser} from '../../../api/authApi'
import {useDispatch, useSelector} from 'react-redux'
import {setAuth} from '../../../redux/authSlice'



import Login from '../../Login/Login'
import User from '../User'
import Admin from '../../Admin/Admin'

function PrivateRoute(auth) {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const authUser = useSelector(state=>state.auth)
  console.log('authUser', authUser)

  const getAuth = async() =>{
    const data = await fetchAuthUser()
    console.log('data auth', data)
    dispatch(setAuth(data))
  }
  useEffect(()=>{
  getAuth()
  },[])

  // local storage bech na3ref est ce que authentifier wala lee yaani aandou jeton token 
  const token = localStorage.getItem('token')

  // function logout

  const Logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
    }
  return (
    <>
   {
  token ? (
    <div>
      
      
      {authUser.role === "admin" ? <Admin auth={auth} Logout={Logout}/> : <User auth={auth} Logout={Logout} />}
      
    </div>
  ) : (
    <Login />
  )
}

    </>
  )
}

export default PrivateRoute