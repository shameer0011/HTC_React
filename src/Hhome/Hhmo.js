import React, { Component,useEffect,useState } from "react";
import axios from "axios";

const Home =() =>{

    const [posts,setposts]=useState([]);

    useEffect(()=>{
        console.log('React Hook');
        axios.get("http://localhost:8000/rehome/").then((res)=>{
            console.log(res);
            let data=res.data;
            setposts(data);
           
        })
    },[]);

    return(
            <div className="container">
                <br/><br/>
                <br/><br/>
                {
                    posts.map((row, index) => {
                    return(   
                        <article class="media content-section">
                            <div class="media-body">
                                <div class="article-metadata">
                                    
                                    <a class="mr-2" key={index} href="#">{ row.author }</a>
                                    <small class="text-muted">{ row.date_posted }</small>
                                </div>
                                <h2><a class="article-title" href="{% url 'Post-Details' post.id %}">{ row.title }</a></h2>
                                <p class="article-content">{ row.content }</p>
                        
                            </div>
                        </article>
                        )
                        })
                }
            </div>

    );

}
export default Home;
// class Home extends Component{

//     state={
//         posts:[]
//     }

//     componentDidMount(){
//         axios.get("http://localhost:8000/rehome/").then((res)=>{
    //         console.log(res)
    //         let data=res.data;
    //         this.setState({
    //             posts:data
    //         })
    //     })
    // }

    // render(){
    //     return(
    //         <div className="container">
    //             <br/><br/>
    //             <br/><br/>
    //             {
    //                 this.state.posts.map((row, index) => {
    //                 return(   
    //                     <article class="media content-section">
    //                         <div class="media-body">
    //                             <div class="article-metadata">
                                    
    //                                 <a class="mr-2" key={index} href="#">{ row.author }</a>
    //                                 <small class="text-muted">{ row.date_posted }</small>
    //                             </div>
    //                             <h2><a class="article-title" href="{% url 'Post-Details' post.id %}">{ row.title }</a></h2>
    //                             <p class="article-content">{ row.content }</p>
                        
    //                         </div>
    //                     </article>
    //                     )
//                         })
//                 }
//             </div>
//         );

//     }

// } 
// export default Home;