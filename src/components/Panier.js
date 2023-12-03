import { useContext } from "react"
import { ThemeContext } from "../context/cartContext"
import { LiaCartPlusSolid } from "react-icons/lia";
import { FaPlus , FaMinus , FaTrashAlt } from "react-icons/fa";
import { useLocation , useNavigate } from 'react-router-dom';
import "../styles/cart.css";

function Panier() {
  const {cart,setCart,auth,addOnCart,deleteFromCart,decreaseCartItem} = useContext(ThemeContext)
  let currentUrl = window.location.pathname;
  console.log("panier : " + useLocation().pathname);
  let navigate = useNavigate()
  const redirectHandler = () => {
    if(auth==true){
      setCart([])
    }else{
      navigate("/signin" +
      "?" +
      new URLSearchParams({ url: currentUrl }).toString() )
    }
  } 

  console.log(cart)

  const jsxCart = (data) => {
    const {id,title,price,description,category,image,rating,count,cart} = {...data}
    return(
      <div className="cart-item" >
        <div className="cart-item-left" >
          <img className="cart-item-img" src={image} />
        </div>
        <div className="cart-item-right" >
          <div className="cart-item-title" >{title}</div>
          <div className="cart-item-price" >{price * cart }$</div>
          <div className="cart-item-bot" >
            <div className="cart-item-bot-left" >
              <FaPlus onClick={()=>addOnCart(data)} color="#097969" />
              <div>{cart}</div>
              <FaMinus onClick={()=>decreaseCartItem(id)} color={ cart == 0 ? 'grey' : 'red' }/> 
            </div>
            <div className="cart-item-bot-right" >
            <FaTrashAlt onClick={()=>deleteFromCart(id)} color="red"  /> 
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  if(cart.length ==0){
    return(
      
      <div className='article-container-louader' >
        <div className='article-not-found-container' >
          <LiaCartPlusSolid size={120} color='#097969' />
          <div className='article-title' >You Have No Item In Your Cart</div>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className="cart-container" > 
        {cart.map(  (x) => jsxCart(x) )} 
        
        <button className="cart-order-btn" onClick={redirectHandler} >Order</button>
      </div>
    )
  }
}

export default Panier