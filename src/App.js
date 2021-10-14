import Navbar from './Navbar - App';
import Home from './Home - App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
   return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div> 
  );
}

export default App;
