import React, {useState,useEffect} from 'react'
import {Box} from "@pankod/refine-mui";
import { NewsBox } from 'components';
import finance from "../assets/finance.jpg"

interface NewsArticle{
  source:{
    id: string;
    name: string
  };
  author:string|null;
  description: string;
  title: string;
  urlToImage: string;
  url: string;
  publishedAt: string;
  content:string;
}

const News = () => {
  let articles: NewsArticle[] =[]
  const [Articles, setArticles] = useState(articles);
  
  const updateNews = async ()=> {
    const url = `https://newsapi.org/v2/everything?q=business&apiKey=3d6c57e7cf6d4522868c25411aeb963a`;
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles)
};

useEffect(() => {
    updateNews();
}, [])

  return (
    <Box display="flex" flexWrap="wrap" gap={10} p={4} flexDirection="row" justifyContent="center" margin={-3}>
      {
        Articles.map(element=>{
          return (
            <NewsBox key={element.source.id + element.source.name} title={element.title.slice(0,30)} description={element.description.slice(0,120)} URLimage={element.urlToImage? element.urlToImage: finance} newsURL={element.url}/>
          )
        })
      }
    
   

    </Box>
  )
}

export default News