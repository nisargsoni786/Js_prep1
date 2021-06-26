import React,{useEffect,useState} from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login'

function App() {

  const [fullname, setfullname] = useState('')
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [namee, setnamee] = useState('User')
  const [isloggedin, setisloggedin] = useState(false)

  const changefullname=(e)=>{
    // console.log(fullname)
    setfullname(e.target.value)
  }
  const changeusername=(e)=>{
    setusername(e.target.value)
  }
  const changepassword=(e)=>{
    setpassword(e.target.value)
  }
  
  
  const changepwdtype=()=>{
    console.log('changedd')
    var x=document.getElementById('pwd').getAttribute('type')
    if(x=='password'){
      document.getElementById('pwd').setAttribute('type','text')
    }
    else{
      document.getElementById('pwd').setAttribute('type','password')
    }
  }

  const subb=(e)=>{
    e.preventDefault();
    console.log('sign up')    
    const registered={
      fullname:fullname,
      username:username,
      password:password
    }

    axios.post('http://localhost:9000/signup',registered)
    .then(response=> console.log(response.data))
    .catch(err => console.log(err))

  } 
  const logg=(e)=>{
    e.preventDefault();
    console.log('log in')    
    const registered={
      username:username,
      password:password
    }

    axios.post('http://localhost:9000/login',registered)
    .then(response=>{
       console.log(response.data)
       setnamee(username)
       setisloggedin(true)
       localStorage.setItem('token',"Bearer "+response.data.Token)
    })
    .catch(err => console.log(err))

  }

  const check=()=>{
    axios.get('http://localhost:9000/checkjwt',{
    headers:{ 
      "authorization":localStorage.getItem('token')
     }
    })
    .then(response=>{
      console.log(response.data)
    })
    .catch(err=>{
      console.log(err.data)
    })

  }

  const chego=()=>{
    fetch('http://github.com')
    .then(res=>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }



  const responseGoogle=(res)=>{
    console.log(res)
    console.log(res.profileObj)

  }


  return (
    <div>
      <h1>Hello {namee}</h1>
      <button onClick={changepwdtype} >EYE</button>
      <form onSubmit={subb}>
        <label>Full Name : </label>
        <input type="text" placeholder='Full Name' value={fullname} onChange={changefullname} />
        <br/>
        <br/>
        <label>UserName : </label>
        <input type="text" placeholder='User Name' value={username} onChange={changeusername} />
        <br/>
        <br/>
        <label>Password : </label>
        <input  id="pwd" type="password" placeholder='Password' value={password} onChange={changepassword} />
        <br/>
        <br/>
        <button type="submit">SUBMIT</button>
        <button onClick={logg}>Login</button>
      </form>
      <br/>
        <br/><br/>
        <button onClick={check}>check authentication</button>
        <button onClick={chego}>heyaa googlleee</button>
        {/* <button onClick={check}>check authentication</button> */}
        <GoogleLogin clientId="238133889361-dipuaad1g66529shv2sl4na6d1b5k2gr.apps.googleusercontent.com" buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={'single_host_origin'} />
      
      

    </div>
  )
}

export default App;
