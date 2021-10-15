import { useState } from "react";

const Create = () => {
  // setting up states to track changes to fields
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')  
  const [author, setAuthor] = useState('Mario') 

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
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
            <option value="mario">Mario</option>
            <option value="yoshi">Yoshi</option>
          </select>
          <button>Add Blog</button>
        </form>
        {/* <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p> */}
    </div>  
  );
}
 
export default Create;