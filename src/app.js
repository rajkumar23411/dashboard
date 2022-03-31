const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const port = 2000;
const dbLink = 'mongodb://0.0.0.0:27017/Travel&Tourism';

const user_Register = require('../public/schema/userSchema');
const query = require('../public/schema/querySchema');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
        secret: 'My Secret Key',
        saveUninitialized: true,
        resave: false
    })
);
app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

mongoose.connect(dbLink).then(() => {
    app.listen(port, () => {
        console.log(`Listing to the server at ${port}`);
        console.log(`Database Connected`);
    });
}).catch((err) => {
    console.log(`Error Occured`, err);
});


const staticPath = path.join(__dirname, '../public');
app.set('view engine', 'ejs');
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.render('login');
});

const adminSchema = mongoose.Schema({
    username: String,
    password: String
});

const admin = mongoose.model('admin', adminSchema);


app.post('/dashboard', async(req, res) => {
    const { username: username, password: password } = req.body;
    const temp = await admin.findOne({ username, password });

    if (temp == null) {
        req.session.message = {
            type: 'danger',
            message: 'Invalid username or password'
        };
        res.redirect("/");
    } else {
        req.session.message = {
            type: 'success',
            message: '',
        }

        // user_Register.find({}, function(err, users) {
        //     res.render('dashboard', {
        //         userList: users
        //     })
        // });

        const user = await user_Register.find();
        const queries = await query.find();
        res.render('dashboard', { user, queries })
    }
});