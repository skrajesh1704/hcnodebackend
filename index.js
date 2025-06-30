import express from 'express';
import dotenv from 'dotenv';
const app = express()

// const port = 5213
dotenv.config();

const githubData = {
    "login": "skrajesh1704",
    "id": 130813008,
    "node_id": "U_kgDOB8wMUA",
    "avatar_url": "https://avatars.githubusercontent.com/u/130813008?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/skrajesh1704",
    "html_url": "https://github.com/skrajesh1704",
    "followers_url": "https://api.github.com/users/skrajesh1704/followers",
    "following_url": "https://api.github.com/users/skrajesh1704/following{/other_user}",
    "gists_url": "https://api.github.com/users/skrajesh1704/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/skrajesh1704/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/skrajesh1704/subscriptions",
    "organizations_url": "https://api.github.com/users/skrajesh1704/orgs",
    "repos_url": "https://api.github.com/users/skrajesh1704/repos",
    "events_url": "https://api.github.com/users/skrajesh1704/events{/privacy}",
    "received_events_url": "https://api.github.com/users/skrajesh1704/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Sk Rajesh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-04-15T03:04:50Z",
    "updated_at": "2025-06-30T18:54:11Z"
};

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/twitter', (req, res) => {
    res.send('rajesh');
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at node backend</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>We are at Youtube</h2>')
})

app.get('/github', (req, res) => {
    res.json({ githubData });
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);

})