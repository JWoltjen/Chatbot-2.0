//importing dependencies
import React, {useEffect} from 'react'; 
import './App.css';

//import redux components
import {Provider} from "react-redux"; 
import store from './store'; 

//import chat component 
import Chat from './components/chat/Chat'

//import actions
import {createSession} from "./actions/watson"; 

import axios from 'axios'; 
//connect application to redux

const App = () => {
  useEffect(()=> {
    //check if there is a session
    if(!localStorage.session){
      store.dispatch(createSession())
    }
  })
  return (
    <Provider store={store}>
      <div className="App">
        I am neumann
        <Chat /> 
     </div>
     </Provider>
  );
}

export default App;
