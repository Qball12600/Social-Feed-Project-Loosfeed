import React, {useState} from 'react';

function CreatePostForm({ addPost}) {// form input values and error messages
    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {//handles submissions to form
        e.preventDefault();
// validation check makes sure body and name are not empty
        if (!name || !body) {
            setError( 'Both fields are required.');
            return;
        }
        // add new post and resets inputs and error messages
        addPost({ name,body});
        setName('');
        setBody('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{color: 'red '}}>{error}</p>}
            <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <textarea
            placeholder="Write your post..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit">Add Post</button>
            </form>
    );

    
}
export default CreatePostForm;