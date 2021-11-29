import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
  // setting up states to track changes to fields
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')  
  const [author, setAuthor] = useState('Codexgrey') 
  const [loading, setLoading] = useState(false) 
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setLoading(true)

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      console.log("New Blog Added");
      setLoading(false); 
      history.push("/")  // history.go(-1); useHistory re-directing us to the home page
    }) 
  } 

  return (  
    <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input type="text" 
            required
            value= { title }                          
            onChange={(e) => setTitle(e.target.value)} // getting value & tracking title input value
          />

          <label>Blog body:</label>
          <textarea 
          required 
          value={ body } 
          onChange={(e) => setBody(e.target.value)}>  {/* same as above */}
          </textarea>

          <label>Blog author:</label>
          <select value={ author } onChange={(e) => setAuthor(e.target.value)}>  {/*same as above*/}
            <option value="Codexgrey">Codexgrey</option>
            <option value="mario">Mario</option>
            <option value="yoshi">Yoshi</option>
          </select>
          { !loading && <button>Add Blog</button> }
          { loading && <button disabled>Adding Blog...</button> }
        </form>
        {/* <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p> */}
    </div>  
  );
}
 
export default Create;