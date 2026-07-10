import React, {useEffect, useContext} from 'react'
import {NewsContext} from '../../context/NewsAppContext'


const NewsApi = () => {
  
  const {input, setNews, setError, language} = useContext(NewsContext)
  useEffect(()=>{
    async function getNews(){
      try {
        if (!input || input.trim() === '') return;
        const news = await fetch(`https://gnews.io/api/v4/search?q=${input}&lang=${language}&apikey=f3aafd86c52ba41037d6a3c9c2253b12`)
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
