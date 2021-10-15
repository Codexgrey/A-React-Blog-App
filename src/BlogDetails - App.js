import { useParams } from "react-router";
import useFetch from "./useFetch - Home";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, loading } = useFetch('http://localhost:8000/blogs/' + id)

    return ( 
        <div className="blog-details">
            { loading && <div>loading...</div> }
            { error && <div>{ error }</div>  }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;