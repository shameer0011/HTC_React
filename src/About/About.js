import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from './BarChart';

class About extends Component {

    state = {
        journal: this.getData(20)

    }

    getData(elements) {
        let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let data = [];
        for (var i = 0; i < elements; i++) {
            data.push({
                "label": names[i],
                "value": Math.round(20 + 80 * Math.random())
            });
        }
        return data;
    }


    componentDidMount() {
        var self = this;
        // console.log("React Hook Call journal..!!")
        axios.get("http://localhost:8000/chartview/").then((res) => {
            // console.log(res);
            // console.log("React inside journal..!!")

            let retData = JSON.parse(res.data)["data"];
            // console.log(retData);
            let data = [];
            for (var i = 0; i < retData.length; i++) {
                data.push({
                    "label": retData[i][0],
                    "value": retData[i][1]
                });

            }
            // console.log(data);
            self.setState({ journal: data });
        })
            .catch(function (error) {
                // console.log(error);
            })
    }

    render() {
        return (
            <div className="container">
                <br />
                <br />
                <br />
                <br />

                <BarChart
                    data={this.state.journal}
                    title="Barchat Trial"
                    color="#70CAD1"
                />

                {/* </BarChart> */}


            </div>

        );

    }

}
export default About;


// const About=()=>{

//     const [journal,setjournal]=useState([]);



//     useEffect(()=>{
//         console.log("React Hook Call journal..!!")
//         axios.get("http://localhost:8000/chartview/").then((res)=>{
//             console.log(res);

//             let retData = JSON.parse(res.data)["data"];
//             let data =[];
//             for (var i =0; i< retData.length; i++){
//                 data.push({
//                     "label": retData[i][0],
//                     "value": retData[i][1]
//                 });
//                 console.log(data);
//                 setjournal(data);
//             }
//         })
//         .catch(function(error){
//             console.log(error);
//         })


//     },[]);

//     return(
//         <div className="container">
//             <br/>
//             <br/>
//             <br/>
//             <br/>

//             <h2>About..!!</h2>
//             <BarChart 
//                 data={journal}
//                 title="Barchat Trial"
//                 color="#70CAD1"
//             />

//             {/* </BarChart> */}


//         </div>

//     );
// }


// useEffect(()=>{
//     console.log("React Hook Call journal..!!")
//     axios.get("http://localhost:8000/chartview/").then((res)=>{
//         console.log(res);
//         let data=res.data;
//         setjournal(data);
//     })


// },[]);

//  <table className="table table-striped summary">
// <thead>
//     <tr>
//         <th>Bday</th>
//         <th>Return%</th>

//     </tr>
// </thead>
// <tbody>
//     {
//         journal.map((row,index) => {
//             return(
//                 <tr key={index}>
//                     <td>{row.Bday}</td>
//                     <td>{row.Return}</td>

//                 </tr>
//             )
//         })
//     }
// </tbody>

// </table> 