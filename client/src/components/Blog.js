import React, { Component } from 'react'
import Modale from './Modale';
import axios from "axios";
import Post from './Post';

class Blog extends Component {

    state = {
        posts: [],
        selectPostId: null,
        toggle: false
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(reponse =>{
                console.log(reponse);
                const articles = reponse.data.slice(0,10);
                const postCommentaire = articles.map(post => {
                    return{
                        ...post,
                        commentaire: 'Ceci est un commentaire'
                    }
                })
                this.setState({posts: postCommentaire})
            })
    }

    selectId = id =>{
        console.log(id);
        this.setState({selectPostId : id})
        this.setState({toggle: true})
    }

    toggleModale = () => {
        this.setState({toggle: false});
    }

    render () {

        const posts = this.state.posts.map(post =>{
            return <Post
                key={post.id}
                body={post.body}
                commentaire={post.commentaire}
                titre={post.title}
                clicked={() => this.selectId(post.id)}
            />
        })

        return (
            <div className="uk-container uk-container-expand">
                <section>

                </section>
                <h1 className="uk-heading-small">Les posts</h1>
                <Modale id={this.state.selectPostId} cache={this.toggleModale} toggle={this.state.toggle}/>
                <div className="uk-container uk-container-small">
                    {posts}
                </div>

            </div>
        );
    }
}

export default Blog;

