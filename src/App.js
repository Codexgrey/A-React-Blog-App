import Navbar from './Navbar - App';
import Home from './Home - App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create - App';
import BlogDetails from './BlogDetails - App';

function App() {
   return (
    <Router>
      <div className="App">
        <Navbar /> 
        <div className="content">
          <Switch>
            <Route exact path="/">
                <Home /> 
            </Route>

            <Route path="/create">
                <Create /> 
            </Route>

            <Route path="/blogs/:id">
                <BlogDetails /> 
            </Route>
          </Switch>
        </div>
      </div>  
    </Router>
  );
}

export default App;

// The Navbar Comp is nested inside the Router Comp & is always gonna show up in each page, as it isn't nested inside the Switch Comp as well