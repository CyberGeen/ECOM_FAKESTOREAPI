import React , {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from "../context/cartContext"
import "../styles/productonlist.css";
import { RiStarFill } from "react-icons/ri";
import { LiaCartPlusSolid } from "react-icons/lia";

function ProductOnList({data}) {
    const {addOnCart} = useContext(ThemeContext)
    const {id,title,price,description,category,image,rating,count} = {...data}
    let navigate = useNavigate()
    
    return (
    <div className='product-list-item' >
        <img className='product-list-img' src={image} onClick={() => navigate("article/" + id) } />
        
        <div className='product-list-title' >{title}</div>
        
        <div className='rating-bot' >
          <div className='star-rate-container' >
            <RiStarFill className='star-rate-star'  size={20} color='gold'  />
            <div className='star-rate-rate' >{rating.rate}</div>
          </div>
          <div className='star-rate-count'>
            {price}$
          </div>
          <LiaCartPlusSolid className='product-list-item-btn' onClick={()=>addOnCart(data)}  size={30} color='#097969' />
        </div>


    </div>
  )
}

export default ProductOnList