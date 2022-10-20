import React, { useState } from 'react';
import { Button } from 'antd';
import './post.css';
// import '~antd/dist/antd.css';

const Post = (props) => {

    const [isModified, setIsModified] = useState(false);
    const [newTitle, setTitle] = useState("");
    const [newBody, setBody] = useState("");

    // const deletePost = () => {
    //     const listePostsActuel = props.posts;
    //     const nouveauTableau = listePostsActuel.filter(post =>  post.id !== props.id);
    //     {props.setterPosts(nouveauTableau)};
    // };

    const updatePost = () => {
        setIsModified(!isModified);
    };

    const save = () => {
        const updatedPost = { 
            id: props.id, 
            body: newBody, 
            title: newTitle, 
            userId: props.userId
        };
        const nouveauTableau = [...props.posts];
        nouveauTableau[props.index] = updatedPost;
        {props.setterPosts(nouveauTableau)}  
        setIsModified(false);      
    };

    return (
        <div className='Post'>
            <h3>{props.title}</h3>
            <div className='Post_detail'>
                <p>{props.body}</p>
            </div>
            <button onClick={() => props.delete(props.id)}>Supprimer</button>
            <button onClick={updatePost}>Modifier</button>
            <br/>
            <br/>
            { isModified &&
                <div>
                    <div>
                        <label>Title</label>
                        <input 
                            type='text' 
                            value={newTitle}
                            onChange={event => setTitle(event.target.value)}  
                        />
                    </div>
                    <div>
                        <label>Body</label>
                        <input 
                            type='text' 
                            value={newBody}
                            onChange={event => setBody(event.target.value)}  
                        />
                    </div>
                    <Button 
                        type="primary" 
                        onClick={save}
                        size="large"
                        style={{ background: "red", border: "none" }}
                    >
                        Enregistrer
                    </Button>
                    {/* <button onClick={save}>Enregistrer</button> */}
                </div>
            }    
        </div>
    );
};

export default Post;