import React, { Component } from 'react';
import axios from "axios";

class nouveauCommentaire extends Component {

    state = {
        nom: '',
        commentaire: ''
    }

    postCommentaire= () => {
        const nouveauCommentaire = {
            nom: this.state.nom,
            commentaire: this.state.commentaire
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', nouveauCommentaire)
            .then(reponse => {
                console.log(reponse);
            })
        this.setState({
            nom: '',
            commentaire: ''
        })
    }

    render () {
        return (
            <div className="uk-container uk-container-expand">
                <form>
                    <fieldset className="uk-fieldset">

                        <legend className="uk-legend">Ajouter Commentaire</legend>

                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Nom" value={this.state.nom} onChange={(event) => this.setState({nom: event.target.value})} />
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Message" value={this.state.commentaire} onChange={(event) => this.setState({commentaire: event.target.value})}/>
                        </div>
                        <button className="uk-button uk-button-primary" onClick={this.postCommentaire}>Envoyer</button>

                    </fieldset>
                </form>
            </div>
        );
    }
}

export default nouveauCommentaire;
