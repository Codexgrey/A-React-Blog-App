import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import PageNotFound from './PageNotFound';

function App() {
   return (
    <Router>
      <div className="App">
        <Navbar /> 
        <div className="content">
          <Switch>
            <Route exact path="/React-Ninja-101---Blog-App/">
                <Home /> 
            </Route>

            <Route path="/create">
                <Create /> 
            </Route>

            <Route path="/blogs/:id">
                <BlogDetails /> 
            </Route>

            <Route path="*">
                <PageNotFound /> 
            </Route>
          </Switch>
        </div>
      </div>  
    </Router>
  );
}

export default App;

// The Navbar Comp is nested inside the Router Comp & is always gonna show up in each page, as it isn't nested inside the Switch Comp as well
// Thoroughly enjoyed building this study project.