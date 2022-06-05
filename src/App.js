import React, { useEffect } from 'react';
// import Container from '../src/pages/container/index'
// import AppRouter from './router/appRouter';
// import ConfigureStore from "../src/stores/configureStore";

// for pagination and searching imports
// import Dashbord from './paginationApp/pages/dashbord';
// import { Provider } from "react-redux";
// import store from './paginationApp/redux/store/storeConfiguration';



//for saga learning 2 application imports
// import { Provider } from "react-redux";
// import Dashboard from './learnSaga2/dashboard';
// import store from './learnSaga2/store/storeConfiguration';
//social media App
// import Dashboard from '../src/socialmediaApp/containers/dashboard/dashboard';
// import { Provider } from "react-redux";
// import store from './socialmediaApp/store/storeConfigurations';

// // material ui responsive without store and redux and saga also
// import Home from '../src/mui responsive/home/index'
// const App = () => {
//   return <>
//     <Home />
//   </>;
// };
// export default App;

//For wafer list
//...................
// const App = () => {
//   const store = ConfigureStore();
//   // console.log(store.getState(), "storeeee")
//   useEffect(() => {
//     store.subscribe(() => {
//       const state = store.getState();
//       // console.log(state.checkedInspectionList, "storeeeeee state")
//     });
//   }, [])

//   return (
//     <div>
//       <Provider store={store}>
//         <Container />
//       </Provider>
//     </div>
//   )
// }
// export default App;

//social media application
// const App = () => {
//   return <>
//     <Provider store={store}>
//       <Dashboard />
//     </Provider>
//   </>;
// };
// export default App;

// for new application for pagionation and searching

// const App = () => {
//   return <div>
//     <Provider store={store}>
//       <Dashboard />
//     </Provider>
//   </div>;
// };

// export default App;




//for saga learning application  imports
// import { Provider } from "react-redux";
// import SagaAppln from './learnSaga/sagaAppln';
// import store from './learnSaga/store/storeConfiguration';
// const App = () => {

//   return <div>
//     App component
//     <Provider store={store}>
//       <SagaAppln />
//     </Provider>

//   </div>;
// };
// export default App;




// for learning saga2 application


// const App = () => {

//   return <div>
//     App component
//     <Provider store={store}>
//       <SagaAppln />
//     </Provider>

//   </div>;
// };
// export default App;



// office management interview questions
import Router from '../src/office manager/router/router'
import { Provider } from "react-redux";
import store from './office manager/store/storeConfiguaration';
const App = () => {
  return <>
    <Provider store={store}>
      <Router />
    </Provider>
  </>
};
export default App;
