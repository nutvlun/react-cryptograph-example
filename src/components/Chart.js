import React from "react"; 
import ReactDOM from 'react-dom';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';


export const BChart = ({datasetIdKey,chartData}) => {
    // console.log('inside component',{chartData});
    return (
      <div>
        <Bar
            datasetIdKey={datasetIdKey}
            data={chartData}
            options={{
                plugins: {
                    title: {
                    display: true,
                    text: "Cryptocurrency prices"
                    }
                },
                legend: {
                    display: true,
                    position: "bottom"
                }
            
            }}
        />
      </div>
    );
  };