import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Post from './Post';
import { Table } from 'antd';


const columns = [
    {
        title: 'Post ID',
        dataIndex: 'id',
        key: 'postId',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Body',
        dataIndex: 'body',
        key: 'body',
    },
    {
        title: 'User ID',
        dataIndex: 'userId',
        key: 'userId', 
    },
    {
        title: 'Action',
        dataIndex: 'Supprimer',
        key: 'supprimer', 
    }
  ];

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

    const deletePost = (postId) => {
        console.log('deletePost')
        const nouveauTableau = posts.filter(post =>  post.id !== postId);
        setPosts(nouveauTableau);
    }

    const displayPosts = () => {
        console.log('columns = ', columns)
        const dataSource = posts.map((post, index)=> 
            <Post 
                key={post.id}
                id={post.id}
                index={index}
                userId={post.userId}
                body={post.body}
                title={post.title}
                posts={posts}
                setterPosts={setPosts}
                delete={deletePost}
            />
        );
        const filteredDataSource = dataSource.map(el => el.props);
        console.log('filterdataSource = ', filteredDataSource)

        console.log('dataSource = ', dataSource)
        return (
            <Table dataSource={filteredDataSource} columns={columns} />
            // <ul>
            //     {posts.map((post, index)=> 
            //         <Post 
            //             key={post.id}
            //             id={post.id}
            //             index={index}
            //             userId={post.userId}
            //             body={post.body}
            //             title={post.title}
            //             posts={posts}
            //             setterPosts={setPosts}
            //             delete={deletePost}
            //         />
            //     )}
            // </ul>
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