import React, {useState} from 'react';
import HTMLReactParser from 'html-react-parser';
import {useParams} from 'react-router-dom';
import millify from 'millify';
import {Col, Row,Typography,Select} from 'antd';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
const { Title , Text} = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const {coinId} = useParams() ;
  const [timePeriod , setTimePeriod] = useState('7d');
  const [data , isFetching] = useGetCryptoDetailsQuery(coinId);
  if(isFetching) return "Loading";
  console.log(data);

  return (
    <div>CryptoDetails {coinId} </div>
  )
}

export default CryptoDetails