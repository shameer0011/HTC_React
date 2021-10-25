// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { createStore, combineReducers } from 'redux';
// import * as serviceWorker from './serviceWorker';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import { Provider } from 'react-redux'
// import counterReducer from './store/CounterReducer';
// import LoginauthReducer from './store/LoginauthReducer';


// // const rootReducer = combineReducers({
// //   countReducer: counterReducer,
// //   Loginauth: LoginauthReducer
// // })

// const store = createStore(rootReducer);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
