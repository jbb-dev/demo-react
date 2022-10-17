import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getPosts = () => {
        console.log('getPosts');  
        Axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
                setIsLoaded(true);
            })
            .catch(err => console.log("Erreur = ", err))
    };

    const displayPosts = () => {
        return (
            <ul>
                {posts.map(post=> 
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                )}
            </ul>
        );
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <button onClick={() => console.log(posts)}>POSTS</button>
            <h1>Liste des posts :</h1>
            <input type={'text'} />
            <button>VALIDER</button>
            {!isLoaded ? 
                <p>Chargement en cours...</p>
            :
                displayPosts()
            }
        </div>
    );
};

export default Posts;