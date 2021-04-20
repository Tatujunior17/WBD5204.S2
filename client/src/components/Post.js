import React from 'react'


const post = (props) => (
    <article className="uk-article" onClick={props.clicked}>
        <h1 className="uk-article-title">{props.titre}</h1>
        <div className="uk-container uk-container-expand">
            <div className="uk-container uk-container-expand">{props.body}</div>
            <div className="uk-container uk-container-expand">{props.commentaire}</div>
        </div>
    </article>
);

export default post;
