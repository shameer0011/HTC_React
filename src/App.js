import React, { useEffect } from 'react';
import Container from '../src/pages/container/index'
import AppRouter from './router/appRouter';
import { Provider } from "react-redux";
import ConfigureStore from "../src/stores/configureStore";


const App = () => {
  const store = ConfigureStore();
  // console.log(store.getState(), "storeeee")
  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      console.log(state.breadcumbReducer, "storeeeeee state")
    });
  }, [])


  return (
    <div>
      <Provider store={store}>
        <Container />


      </Provider>
    </div>
  )
}
export default App;





