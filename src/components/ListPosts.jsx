import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Post from './Post';

const ListPosts = () => {

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
                {posts.map((post, index)=> 
                    <Post 
                        key={post.id}
                        id={post.id}
                        index={index}
                        userId={post.userId}
                        body={post.body}
                        title={post.title}
                        posts={posts}
                        setterPosts={setPosts}
                    />
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

export default ListPosts;