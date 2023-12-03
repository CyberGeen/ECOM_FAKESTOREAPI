import React from 'react'
import { ImBlocked } from "react-icons/im";
import "../styles/article.css";

function Error404() {
  return (
    <div className='article-container-louader' >
      <div className='article-not-found-container' >
      <ImBlocked size={120} color='#097969' />
      <div className='article-title' >This Page Doesn't Exist</div>
      </div>
    </div>
  )
}

export default Error404