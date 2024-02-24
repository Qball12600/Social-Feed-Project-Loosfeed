import React, {useState} from 'react';

import '../App.css';

function CreatePostForm({ addPost}) {// form input values and error messages
    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {//handles submissions to form
        e.preventDefault();
// validation check makes sure body and name are not empty
        if (!name.trim || !body.trim()) {
            setError('Both fields required.');
            return;
        } 
        addPost({ name,body,date: new Date().toLocaleString() });
        setName('');
        setBody('');
        setError( 'Both fields are required.');
        
        //add new post and resets inputs and error messages
        addPost({ name,body});
        setName('');
        setBody('');
        setError('');
    };

    return (
         
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                    {error && <p style={{color: 'red '}}>{error}</p>}
       
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Your Name" 
                         value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            
                <div className="textarea-container">
                    <textarea
                        placeholder="Write your post..."
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                    <button type="submit">Add Post</button>
                </form>
                </div>
         
    );

    
}
export default CreatePostForm;