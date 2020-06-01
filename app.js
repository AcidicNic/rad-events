const express = require('express');
const hbs = require('express-handlebars');

const homeController = require('./controllers/home');
const eventController = require('./controllers/event');

const app = express();
const port = process.env.PORT || 420;

// handlebars setup
app.engine('hbs', hbs({
    extname: '.hbs',
    layoutDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');
app.use(express.static('public'));

// Routes
app.get('/', homeController.home);
app.get('/events', eventController.getAll);
app.get('/events/new', eventController.addForm);
app.post('/events', eventController.create);
app.get('/events/:id', eventController.getOne);
app.get('/events/:id/edit', eventController.editOne);
app.put('/events/:id', eventController.updateOne);
app.delete('/events/:id', eventController.deleteOne);

app.listen(port, () => {
  console.log(`App live at http://localhost:${port}!`);
});
