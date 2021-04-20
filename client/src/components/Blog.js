import React, { Component } from 'react'
import Modale from './Modale';
import axios from "axios";
import Post from './Post';

class Blog extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(reponse =>{
                console.log(reponse);
                this.setState({posts: reponse.data})
            })
    }

    render () {

        const posts = this.state.posts.map(post =>{
            return <Post key={post.id} titre={post.title} />
        })

        return (
            <div className="uk-container uk-container-expand">
                <section>

                </section>
                <h1 className="uk-heading-small">Les posts</h1>
                <Modale />
                <div className="uk-container uk-container-small">
                    {posts}
                </div>

            </div>
        );
    }
}

export default Blog;

