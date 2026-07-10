import React, {useEffect, useContext} from 'react'
import {NewsContext} from '../../context/NewsAppContext'


const NewsApi = () => {
  
  const {input, setNews, setError, language} = useContext(NewsContext)
  useEffect(()=>{
    async function getNews(){
      try {
        const news = await fetch(`https://gnews.io/api/v4/search?q=${input}&lang=${language}&apikey=2d01e84d423d1d7c4a948e4f49ff6c2c`)
        const newsData = await news.json()
        setNews(newsData)
      } catch (error) {
        setError(error)
      }
    }
    getNews()
  },[input, language, setError, setNews])
  return (
    <></>
  )
}

export default NewsApi
