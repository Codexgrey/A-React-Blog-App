import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import PageNotFound from './PageNotFound';

function App() {
   return (
    <Router>
      <div className="App">
        <Navbar /> 
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/blogs/:id" element={<BlogDetails />} />
            <Route exact path="*" element={<PageNotFound />} />
            {/* old way  of using Route
              <Route exact path="/"> <Home /> </Route>
              <Route path="/blogs/:id"> <BlogDetails /> </Route>
              <Route path="*"> <PageNotFound /> </Route> 
            */}
          </Routes>
        </div>
      </div>  
    </Router>
  );
}

export default App;

// The Navbar Comp is nested inside the Router Comp & is always gonna show up in each page, as it isn't nested inside the Switch Comp as well
// Thoroughly enjoyed building this study project.


