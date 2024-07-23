import './index.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function LoginPage(){

   const[ userName , setUserName] = useState('')
   const[ password , setPassword] = useState('')
   const navigate = useNavigate()
   const userInfo = []


   function handleLogin(userName , password){
      if(userName === '' || password === ''){
         alert("fill all the information first")
      }else{
         userInfo.push({user : userName , pass: password})
         navigate('/dashboard')
         const user = JSON.stringify(userName)
         localStorage.setItem("username" , user)
      }
   }



 return <div className='h-screen w-screen bg-gray-200 flex justify-center items-center'>
    <div className=' h-96 w-72 bg-white rounded shadow-xl opacity-100'>
         <div className='flex justify-center'>
            <h3 className='font-bold p-8'>Welcome</h3>
         </div>
         <div className=' bg-black w-8 h-8  ml-32 flex justify-center items-center rounded'>
            <p className='text-white text-3xl '>A</p>
         </div>
         {/* input */}
         <div className='pt-12 pl-8 '>
            <input className='input' placeholder='UserName' value={userName} onChange={(e) => setUserName(e.target.value)}/>
         </div>
         <div className='pt-8 pl-8'>
            <input className='input' placeholder='password' value={password} onChange={(e) =>setPassword(e.target.value)}/>
         </div>
             {/* login button */}
         <div className='flex justify-center mt-4 w-28 ml-20 rounded-full bg-gray-200'>
          <button onClick={() => handleLogin(userName , password)}>Login</button>
        </div>
        
    </div>

    
 </div>
}

export default LoginPage