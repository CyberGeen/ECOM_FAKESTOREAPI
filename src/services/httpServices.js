import axios from 'axios'

const apiUrl = "https://fakestoreapi.com/products/"

const getApi = async (url) => {
    try {
        const res = await axios.get( apiUrl + url)
        return(res)
    }
    catch (error) {
        return (error)
    }
}


export{
    getApi
}