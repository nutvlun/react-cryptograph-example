import React from 'react';
import { useState,useEffect } from 'react';
import { BChart } from "./components/Chart";
 


function App() {
    
  
    useEffect(() => {
      const fetchPrices = async () => {
        const res = await fetch("https://api.coincap.io/v2/assets/?limit=10")
        const data = await res.json()
        setChartData({
          labels: data.data.map((crypto) => crypto.name),
          datasets: [
            {
              label: "MarketCap in USD",
              data: data.data.map((crypto) => crypto.marketCapUsd),
              backgroundColor: [
                "#ffbb11",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
                "#ddbb11",
                "#22f0f1",
                "#65AF95",
                "#f8ba2f",
                "#8971d0"
              ]
            }
          ]
        });
      };
      fetchPrices()
    }, []);
    
    let chartData2 = {
    labels: [ 'Lunc', 'SHIB', 'WIN'],
    datasets: [
      {
        label: "Price in USD",
        data: [ '0.00009975', '0.00001174', '0.00012'],
        backgroundColor: [
              "#ffbb11",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ]
      }]
    };
    const [chartData, setChartData] =  useState('');
    //console.log("External ==>",chartData);
    
    
    return (
     
      <div style={{height: "700px", width: "600px"}}>
        
        <BChart datasetIdKey={1} chartData={chartData2}/>
        {(chartData) ?
         <BChart datasetIdKey={2} chartData={chartData}/>
         :'loading...'
        }
      </div>
      
    );

  
  
}

export default App;
