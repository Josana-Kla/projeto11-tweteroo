import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const tweteroo = [];

app.get('/tweets', (req, res) => {
    res.status(200).send(tweteroo);
});

app.post('/sign-up', (req, res) => {
    if(!req.body.username || !req.body.avatar) {
        res.status(400).send("Preencha todos os campos!");
        return;
    }

    tweteroo.push({
        ...req.body,
        id: tweteroo.length + 1
    });

    res.send(tweteroo);
});

app.listen(5000);
