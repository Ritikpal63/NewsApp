import React, {useEffect, useContext} from 'react'
import {NewsContext} from '../../context/NewsAppContext'


const NewsApi = () => {
  
  const {input, setNews, setError, language} = useContext(NewsContext)
  useEffect(()=>{
    async function getNews(){
      try {
        if (!input || input.trim() === '') return;
        const news = await fetch(`https://api.mediastack.com/v1/news?access_key=3376c4991a739517704bbe02a7db183f&keywords=${input}&languages=${language}`)
        const newsData = await news.json()
        setNews(newsData.data)
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
