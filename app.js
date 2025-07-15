//set up express server with EJS view engine
let express = require('express');
const morgan = require('morgan');
let app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.render('pages/index', { title: 'Home Page' });
});
