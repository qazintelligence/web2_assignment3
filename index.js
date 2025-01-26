const express = require('express');
const bodyParser = require('body-parser');
const collection = require('./db');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));


app.get('/', (req, res) => res.sendFile(__dirname + '/signup.html'));

app.post('/register', async (req, res) => {
    try {
        const existingUser = await collection.findOne({ name: req.body.username });

        if (existingUser) {
            return res.send('<h1>Username already taken.</h1>');
        }

        await collection.create({
            name: req.body.username,
            password: req.body.password,
        });

        res.redirect('/login');
    } catch (err) {
        res.send('<h1>Sign up failed. Try again.</h1>');
    }
});

app.get('/login', (req, res) => res.sendFile(__dirname + '/login.html'));

app.post('/login', async (req, res) => {
    try {
        const user = await collection.findOne({ name: req.body.username });
        if (user && user.password === req.body.password) {
            res.send(`<h1>Hii, ${user.name}!</h1>`);
        } else {
            res.send('<h1>Incorrect username or password</h1>');
        }
    } catch (err) {
        res.send('<h1>Login failed. Try again.</h1>');
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

