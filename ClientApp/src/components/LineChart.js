import React from 'react'
import Chart from 'chart.js'

export function LineChart(props) {
    return (
        <div>
            {
                new Chart(props.ctx, {
                    type: 'line',
                    data: {
                        labels: props.labels,
                        datasets: [{
                            label: props.title,
                            backgorundColor: 'rgb(255,99,132)',
                            borderColor: 'rgb(255, 99, 132)',
                            data: props.data
                        }]
                    },
                })
            }

        </div>
    )
}