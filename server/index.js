const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const fs = require("fs");

//Lister les posts

app.get('/listPosts', function (req, res) {
    fs.readFile( __dirname + "/" + "posts.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

// Ajouter un post

app.post('/addPost', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "posts.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["Lorem ipsum 4"] = post["post4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

//Post spécifique

app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "posts.json", 'utf8', function (err, data) {
        const posts = JSON.parse( data );
        const post = posts["post" + req.params.id]
        console.log( post );
        res.end( JSON.stringify(post));
    });
})

//Supprimer

app.delete('/deletePost', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "posts.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["post" + 2];

        console.log( data );
        res.end( JSON.stringify(data));
    });
})

server.listen(process.env.port || 5000, () => console.log(`Serveur en marche`));
