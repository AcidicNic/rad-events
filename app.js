const express = require('express');
const methodOverride = require('method-override');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

const router = require('./controllers/event');

const app = express();
const port = process.env.PORT || 3000;

// handlebars setup
app.engine('hbs', hbs({
  extname: '.hbs',
  layoutDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

// Static files
app.use(express.static(__dirname + '/static'));

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// MethodOverride
app.use(methodOverride('_method'));

// Routes
app.get('/', router.getAll);
app.get('/events/new', router.addForm);
app.post('/events', router.create);
app.get('/events/:id', router.getOne);
app.get('/events/:id/edit', router.editOne);
app.put('/events/:id', router.updateOne);
app.delete('/events/:id', router.deleteOne);

app.listen(port, () => {
  console.log(`App live at http://localhost:${port}`);
});
