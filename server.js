const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' }
]

app.use(bodyParser.json());


app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'succesfully got users, Nice!',
        users: mockUserData
    })
});

app.get('/users/:id', function (req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one year',
        user: req.params.id
    })
});

app.post('/login', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username == mockUsername && password == mockPassword) {
        res.json({
            success: true,
            message: 'password and username',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }

})


app.listen(8000, function () {
    console.log("server is running");
})