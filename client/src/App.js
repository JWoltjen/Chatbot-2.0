//importing dependencies
import './App.css';

//import redux components
import {Provider} from "react-redux"; 
import store from './store'; 

//import chat component 

//connect application to redux

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        I am neumann
     </div>
     </Provider>
  );
}

export default App;
