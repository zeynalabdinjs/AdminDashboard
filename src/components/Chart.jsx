
import React from 'react';
import datas from '../data/data.json'
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
import { Bar } from 'react-chartjs-2';

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
                display: false,
                drawBorder: false,
                scaleShowLabels: false,
            },
            ticks: {
                display: false,
            },
            stacked: true,
            barPercentage: 0.1,
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
            stacked: false,
        }
    },

};


export const data = {
    labels: [1, 2, 3, 4, 5, 1, 2, 3,],
    datasets: [
        {
            label: 'Kar',
            data: [70, 80, 50, 70, 80, 50, 90, 90],
            backgroundColor: '#ff9329',
            borderRadius: 12,

        },
        {
            data: [100, 100, 100, 100, 100, 100, 100, 100],
            backgroundColor: '#eee',
            borderRadius: 12,
        },
    ],
};
const Chart = () => {
    return (
        <div>
            <Bar options={options} data={data} />
        </div>
    )
}

export default Chart