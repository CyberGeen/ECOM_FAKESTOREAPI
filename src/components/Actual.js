import React , {useContext,useEffect} from 'react'
import { getApi } from '../services/httpServices'
import ProductOnList from './ProductOnList';
import { ThemeContext } from "../context/cartContext"
import { ColorRing } from  'react-loader-spinner'
import "../styles/actual.css";

function Actual() {
  const {data, setData} = useContext(ThemeContext)
  useEffect(() => {
    setTimeout(() => {
      getApi('').then(res => {
        setData(res.data)
      } )
    }, (1000));
  }, [])
  
  
  if(data.length == 0){
    return (<div className='article-container-louader' >
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
    </div>)
  }
  else {
    return <div className='actual-container' >
    {
      data.map( (x) => <ProductOnList data={x} />)
    }
    </div> 
  }
}

export default Actual