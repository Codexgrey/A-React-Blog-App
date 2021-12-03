import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {  
    const { data: blogs, loading, error } = useFetch('http://localhost:8000/blogs'); //grab data but call it blogs here
 
    return ( 
        <div className="home">
          { error &&  <div>{ error }</div> }
          { loading && <div>loading...</div> }
          { blogs && <Bloglist blogs={blogs} title="All Blogs"/> }
        </div>
     ); 
}
 
export default Home;