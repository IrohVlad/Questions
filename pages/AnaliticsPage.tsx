import React from 'react';
import { Bar } from 'react-chartjs-2';
import Header from '../src/components/Header';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const AnaliticsPage = () => {
    const labels = ['Отвечают без ошибок', 'Отвечают с ошибками', 'Пропускают вопросы'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Analitics',
            data: [65, 59, 11],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
            ],
            borderWidth: 1
        }]
    };
    return (
        <>
            <Header/>
            <main>
                <div className="_container">
                    <Bar data={data} />
                </div>
            </main>
        </>
    );
};

export default AnaliticsPage;