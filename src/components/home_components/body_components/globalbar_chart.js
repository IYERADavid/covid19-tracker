import React from 'react';
import { Bar } from 'react-chartjs-2';

function GlobalstaticsBar({data}) {

  const big = Math.max.apply(null,data) 
  const datas = data.map((item) => {
    let formated_data = 10 * item / big;
    if (formated_data < 0.1){
      formated_data = big * 0.1 / 10
      return formated_data
    }
    return item
  })
  
  const chart_data = {
    labels: ['cases', 'tests', 'recovered', 'deaths'],
    datasets: [
      {
        label: ' Total : ',
        data: datas,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            suggestedMin: 0
          },
        },
      ],
    },
    plugins: {
      tooltip: {
          callbacks: {
              label: function(context) {
                  var label = context.dataset.label
                  if (context.parsed.y !== null) {
                    label += data[context.parsed.x]
                  }
                  return label;
              }
          }
      }
  }
  };
  return(
  <>
    <Bar data={chart_data} options={options} />
  </>
  )
}

export default GlobalstaticsBar;