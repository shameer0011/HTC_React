import React, { useEffect } from 'react';
// import Dashbord from './paginationApp/pages/dashbord';
// import Container from '../src/pages/container/index'
// import AppRouter from './router/appRouter';

// for pagination and searching imports
// import { Provider } from "react-redux";
// import store from './paginationApp/redux/store/storeConfiguration';

//for saga imports
import { Provider } from "react-redux";
import SagaAppln from './learnSaga/sagaAppln';
import store from './learnSaga/store/storeConfiguration';

// import ConfigureStore from "../src/stores/configureStore";

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



// for new application for pagionation and searching

// const App = () => {
//   return <div>
//     App component
//     <Provider store={store}>
//       <Dashbord />
//     </Provider>
//   </div>;
// };

// export default App;



// for learning saga application


const App = () => {

  return <div>
    App component
    <Provider store={store}>
      <SagaAppln />
    </Provider>

  </div>;
};
export default App;




