import React, { Component } from 'react'
import axios from "axios";
import NouveauCommentaire from "./NouveauCommentaire";

class Modale extends Component {

    state = {
        loadedPost : null
    }

    componentDidUpdate(){
        console.log("mise a jour");
        if(this.props.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(reponse => {
                        console.log(reponse);
                        this.setState({loadedPost: reponse.data})
                    })
            }
        }
    }


    render () {

        return (
            this.state.loadedPost && this.props.toggle ?
            <div className="uk-container uk-container-expand" style={{backgroundColor: "lightgrey"}}>
                <h1 className="uk-heading-small">{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <NouveauCommentaire />
                <button className="uk-button uk-button-danger" onClick={this.props.cache}>Fermer</button>

            </div>
                : null

        )


    }
}

export default Modale;
