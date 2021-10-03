import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    postslist: [],
  };
  componentDidMount() {
    axios.get("http://localhost:8000/reacthome/").then((res) => {
      console.log(res);
      let data = res.data;
      console.log(data);
      this.setState({
        postslist: data,
      });
    });
  }

  render() {
    return (
        <div className="container">
            <br/>
            <br/>
            <table className="table table-striped summary">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Content</th><th>Data_Posted</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.postslist.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{row.id}</td>
                                    <td>{row.title}</td>
                                    <td>{row.content}</td>
                                    <td>{row.date_posted}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

  }
}
export default Home;

{
  /* <table class="table  table-striped">
//     <thead>
//         <tr>
//             <th>Name</th>
//             <th>Email</th>
            
//         </tr>
    return (
      <div className="container">
        <h2>Post Views..</h2>
        <h4>{this.state.postslist}</h4>
      </div>
    );
//     </thead> 
//     <tbody>
//         <tr>
//             <td>{{username}}</td>
//             <td>{{mail}}</td>
          
//         </tr>
//     </tbody>
// </table> */
}
