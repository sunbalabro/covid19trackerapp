import React from 'react';
import { Bar } from 'react-chartjs-2';




const StateChart = ({ report, loading , state}) => {
    if (loading) {
        return "Loading"
    }
    const changeToNum = (val) => {
        if (loading) {
            return 0
        }
        var arry = val.split(',');
        var concatNum = arry.join("");
        if (concatNum === "") {
            return 0;
        } else {
            return parseInt(concatNum);
        }
    }
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    const data = {
        labels: ['Active Cases', 'New Cases', 'New Death Cases',
            'Total Cases', 'Total Death Cases', 'Total Recovered Cases'],
        datasets: [
         {
            label: 'Cases',
            backgroundColor: [
                'rgb(205, 92, 92)',
                '#6495ED',
                '#FF7F50',
                '#00A6B4',
                '#6800B4',
                '#DB7093'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F',
                '#C71585'
            ],

            data :[
                changeToNum(report[state]['Active Cases_text']),
                changeToNum(report[state]['New Cases_text']),
                changeToNum(report[state]['New Deaths_text']),
                changeToNum(report[state]['Total Cases_text']),
                changeToNum(report[state]['Total Deaths_text']),
                changeToNum(report[state]['Total Recovered_text']),
            ]
        }    
        
      ]
    };
console.log(report)
return (
    <div style={{marginBottom:'100px'}}>
        <div className='header' style={{marginTop:'200px'}}>
            <h1 className='title' style={{textAlign:'center',marginBottom:'200px'}}>Graphical Representation of Covid 19 Current State </h1>
        </div>
        <Bar data={data} options={options} height={80} />
    </div>
)};

export default StateChart;