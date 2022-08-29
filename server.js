import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];
const tweetero = [];

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body;

    if(!username || !avatar || typeof(username) !== 'string' || typeof(avatar) !== 'string') {
        res.status(400).send("Todos os campos são obrigatórios!");
        return;
    }

    users.push({
        username,
        avatar,
        id: users.length + 1
    });

    res.status(201).send("OK");
});

app.post('/tweets', (req, res) => {
    const { username, tweet } = req.body;

    if(!username || !tweet || typeof(username) !== 'string' || typeof(tweet) !== 'string') {
        res.status(400).send("Todos os campos são obrigatórios!");
        return;
    }

    tweets.push({
        username,
        tweet,
        id: tweets.length + 1
    });

    for(let i = 0; i < users.length; i++) {
        if(users[i].username === tweets[i].username) {
            console.log("user-signup: " + users[i].username);
            console.log("user-tweet: " + tweets[i].username);
            console.log("---------------------------");
            tweetero.push({username: tweets[i].username, avatar: users[i].avatar, tweet: tweet});
        } else {
            console.log("user-signup: " + users[i].username);
            console.log("user-tweet: " + tweets[i].username);
            console.log("---------------------------");
        }
    };

    res.status(201).send("OK");
});

app.get('/tweets', (req, res) => {
    const getTenTweetero = tweetero.slice(0, 10);

    res.status(200).send(getTenTweetero);
});

app.listen(5000);
