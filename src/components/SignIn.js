import React , { useContext, useEffect }  from 'react';
import { ThemeContext } from './../context/cartContext';
import {useLocation , useNavigate} from 'react-router-dom';
import { ColorRing } from  'react-loader-spinner'
import "../styles/signin.css";


function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}


function SignIn() {
 
  const url = useQuery()
  const {auth,setAuth} = useContext(ThemeContext)

  // ----------------- handle link to previous -----------------
  let customLink
  if(url.get('url') == null ){
    customLink = ""
  }else{
    customLink = url.get('url')
  }
  // const backPath = window.location.protocol +"//"+ window.location.hostname +":"+ window.location.port + customLink 
  let navigate = useNavigate()
  const redirectHandler = () => {
    navigate(customLink)
  } 

const handleSignIn = () => {
  setAuth(true)
  redirectHandler()
}


  //signout
  useEffect(() => {
    if(auth){
      setAuth(false)
      redirectHandler()
    }
  }, [])
  
if(auth == true){
  return(
    <div className='signin-container' >
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['white', 'green']}
      />
    </div>
  )
}
//signIn
else{
  return(
  <div className='signin-container' >
  <div className='signin-btn signin-custom '  >Join Us</div>
    <div className='signin-box' >
      <input className='signin-text' placeholder='Username' type='text' />
      <input className='signin-text' placeholder='password' type='password' />
        <button className='signin-btn'  onClick={handleSignIn} >
          sign in
        </button>
    </div>
  </div>
)}

  // return (
  // <div>
  //     <button onClick={redirectHandler} >
  //       redirect to where u came from
  //     </button>
  // </div>
  // )
}

export default SignIn

/*

save the panier even if logged out once press buy it send him to sign in 
we dont need inscription page
add state for authentication no need to verify or fetch anything -DONE
if he sign in we show authenticated and return to the cart  -DONE


*/