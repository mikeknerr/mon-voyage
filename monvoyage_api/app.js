const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const methodOverride = require('method-override');

const app = express();

//Load routes
const photos = require('./routes/photos');
const posts = require('./routes/posts');
const recs = require('./routes/recs');

// DB config
const db = require('./config/database');

//Connect to mongoose
mongoose.connect(db.mongoURI, {useNewUrlParser: true})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Method Override Middleware
app.use(methodOverride('_method'));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session Middleware
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  //cookie: {secure: true}

}));

//Allow requests from front end
app.use(cors({
  origin: 'http://localhost:3000'
}));


// Index Route
// app.get('/', (req, res) => {
//   const title = "welcome";
//   res.render('index', {
//     title: title
//   });
// });



//Router
app.use('/api/photos', photos);
app.use('/api/posts', posts);
app.use('/api/recs', recs);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
