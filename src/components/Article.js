import React , {useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom';
import { getApi } from '../services/httpServices'
import { ThemeContext } from "../context/cartContext"
import { ColorRing } from  'react-loader-spinner'
import { RiStarFill } from "react-icons/ri";
import { FaSadTear } from "react-icons/fa";
import "../styles/article.css";

function Article() {
    const {id} = useParams();
    const [data, setData] = useState(null)
    const {cart,setCart,addOnCart} = useContext(ThemeContext)


  useEffect(() => {
    setTimeout(() => {
      
      getApi(id)
      .then(res => {
        setData(res.data)
      } )
      

    }, (1000));
  }, [])

  const onAddCart = () => {
    addOnCart(data)
  }
  
  const {title,price,description,category,image,rating,count} = {...data}

  if(data == null){
    return <div className='article-container-louader' >
    <ColorRing
      className='article-container-loader'
      visible={true}
      height="180"
      width="180"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#00FFFF', '#7FFFD4', '#088F8F', '#5F9EA0', '#AFE1AF']}
    />
    </div>
  }
  else if(data === ""){
    return <div className='article-container-louader' >
      <div className='article-not-found-container' >
      <FaSadTear size={120} color='#097969' />
      <div className='article-title' >No item Found</div>
      </div>
    </div>
  }
  else{
    return <div className='article-container' > 
    
    <div className='article-left' >
      <img className='product-list-img' src={image} />
      
      <div className='rating-bot' >
          <div className='star-rate-container' >
            <RiStarFill className='star-rate-star'  size={20} color='gold'  />
            <div className='star-rate-rate' >{rating.rate}</div>
          </div>
          <div className='star-rate-count'>
            {rating.count} Ratings
          </div>
      </div>
    </div>

    <div className='article-right' >
      <div className='article-title' >{title}</div>
      <div className='article-desc' >{description}</div>
      <div className='article-right-container' >
        <div className='article-price' >{price}$</div>
        <button className='article-btn' onClick={onAddCart} >Add to cart</button>
      </div>
    </div>

  </div>
  }
}

export default Article