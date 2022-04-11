import datas from '../data/data.json'

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        drawBorder: false,
        scaleShowLabels: false,
        borderDash: [8, 8],
        color: "#373e54"
      },
      ticks: {
        display: false,
        beginAtZero: false,

      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },

      ticks: {
        display: false,
        beginAtZero: false,

      },
    }
  }
};


export const data = {
  labels: datas.map((item) => item.Ay),
  datasets: [
    {
      label: 'Kar',
      data: datas.map((item) => item.Kar),
      backgroundColor: '#16c5ff',
      borderColor: "#16c5ff",
      borderRadius: 2,
    },

  ],
};

export default function App() {
  return (
    <div className="App">
      <Line options={options} data={data} />
    </div>
  )

}
