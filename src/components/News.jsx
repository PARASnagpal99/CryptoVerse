import React from 'react'
import { Select , Typography , Row , Col , Avatar , Card} from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
const {Text , Title} = Typography ;
const {Option} = Select ;

const News = ({simplifed}) => {
 // const {data : cryptoNews} = useGetCryptoNewsQuery({newsCategory : 'Cryptocurrency' , count : simplifed ? 10 : 100 })
 // console.log(cryptoNews)
  return (
    <div>
      Bing Search API is dead . Sorry ;
    </div>
  )
}

export default News