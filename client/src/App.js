//importing dependencies
import './App.css';

//import redux components
import {Provider} from "react-redux"; 
import store from './store'; 

//import chat component 
import Chat from './components/chat/Chat'

//connect application to redux

const App = () => {
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
