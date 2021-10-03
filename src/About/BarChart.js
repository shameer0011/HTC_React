import React, { Component, useEffect } from 'react';
import Chart from 'chart.js';

class BarChart extends Component{
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
      }


      componentDidMount(){
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'bar',
            options: {
              title: {
                display: true,
                text: 'Trade Summary',
                fontSize: 16,
                fontStyle: 'bold'
              },
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  ticks: {
                    min: 0,
                    fontSize: 16,
                    fontStyle: 'normal',
                  },
                  scaleLabel: {
                    display: true,
                    labelString: this.props.title,
                    fontSize: 14,
                    fontStyle: 'bold'
                  }
                }],
                xAxes: [{
                  ticks: {
                    maxRotation: 90,
                    minRotation: 45
                  }
                }],
              }
            },
            data: {
              labels: this.props.data.map(d => d.label),
              datasets: [{
                barPercentage: 0.75,
                label: this.props.title,
                data: this.props.data.map(d => d.value),
                backgroundColor: this.props.color
              }]
            }
          });
      }

      componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.label);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        this.myChart.update();
      }
      
      render(){
          return(
            <div className="Container">
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>BarChart...</h2>
                <canvas ref={this.canvasRef} />
            </div>
          );
      }
}
export default BarChart;

//  const BarChart =()=>{

//     useEffect(()=>{
//         myChart = new Chart(this.canvasRef.current, {
//             type: 'bar',
//             options: {
//               title: {
//                 display: true,
//                 text: 'Trade Summary',
//                 fontSize: 16,
//                 fontStyle: 'bold'
//               },
//               legend: {
//                 display: false
//               },
//               scales: {
//                 yAxes: [{
//                   ticks: {
//                     min: 0,
//                     fontSize: 16,
//                     fontStyle: 'normal',
//                   },
//                   scaleLabel: {
//                     display: true,
//                     labelString: this.props.title,
//                     fontSize: 14,
//                     fontStyle: 'bold'
//                   }
//                 }],
//                 xAxes: [{
//                   ticks: {
//                     maxRotation: 90,
//                     minRotation: 45
//                   }
//                 }],
//               }
//             },
//             data: {
//               labels: this.props.data.map(d => d.label),
//               datasets: [{
//                 barPercentage: 0.75,
//                 label: this.props.title,
//                 data: this.props.data.map(d => d.value),
//                 backgroundColor: this.props.color
//               }]
//             }
//           });
//     })

//     return(
//         <div className="Container">
//                 <h2>BarChart...</h2>
//         </div>

//     );

// }
// export default BarChart;