import React from 'react'


const post = (props) => (
    <article className="uk-article">
        <h1 className="uk-article-title">{props.titre}</h1>
        <div className="uk-container uk-container-expand">
            <div className="uk-container uk-container-expand">Auteur</div>
        </div>
    </article>
);

export default post;
