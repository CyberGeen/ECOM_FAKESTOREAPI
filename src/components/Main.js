import {
    Routes,
    Route
  } from "react-router-dom"

import { useState } from "react" 
import Contact from "./Contact"
import Actual from "./Actual"
import Error404 from './Error404';
import Article from './Article';
import Panier from './Panier';
import Navbar from "./Navbar";
import { ThemeContext } from './../context/cartContext';
import SignIn from './SignIn';

  
  function Main() {

    // router 
    
    const routes = [
      {
          key:0,
          path:"/",
          element: <Actual/>
      },
      {    
          key:1,
          path:"/Contact",
          element: <Contact/>
      },
      {
          key:2,
          path:"/article/:id",
          element: <Article/>
      },
      {
          key:3,
          path:"/Panier",
          element: <Panier/>
      },
      {
          key:4,
          path:"/signin",
          element: <SignIn/>
      },
      {
          key:5,
          path:"*",
          element: <Error404/>
      }
    ]

  
    
    const [cart, setCart] = useState([])
    const [auth, setAuth] = useState(false)
    const [data, setData] = useState([])
    

    const addOnCart = (data) => {
      const {id,title,price,description,category,image,rating,count} = {...data}
      let found = false

      cart.forEach(item => {
        if(item.id==id){
          item.cart += 1
          found = true
        }
      });

      if(found==false){
        data.cart = 1
        setCart([data,...cart])
      }else{
        let tempCart = cart
        setCart([...tempCart])
      }

    }
    
    const deleteFromCart = (idcart) => {
      const temp = cart.filter( (item) => item.id != idcart )
      setCart([...temp])
    }

    const decreaseCartItem = (idcart) => {
      cart.forEach(item => {
        if(item.id==idcart){
          if(item.cart !=0){
            item.cart -= 1
          }
        }
      } )
      let temp2 = cart
      setCart([...temp2])
    }

    return (
      <div className="main" >
        <ThemeContext.Provider value={{cart,setCart,auth,setAuth,data,setData,addOnCart,deleteFromCart,decreaseCartItem}} >

          <Navbar />
          <Routes>
            {
              routes.map((e)=><Route path={e.path} element={e.element}  />)
            }
          </Routes>
      
        </ThemeContext.Provider>
        
      </div>
    )
  }
  
  export default Main