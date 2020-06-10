const express = require('express');
const methodOverride = require('method-override');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');
const moment = require('moment');


// controllers
const eventRouter = require('./controllers/event');
const rsvpRouter = require('./controllers/rsvp');

const app = express();
const port = process.env.PORT || 3000;

// handlebars setup
app.engine('hbs', hbs({
  extname: '.hbs',
  layoutDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  defaultLayout: 'main',
  helpers: {
    trimString: function (content) {
      if (content.length > 80) {
        content = content.substring(0,80) + "...";
      }
      return new handlebars.SafeString(content);
    },
    prettyDate: function (date) {
      return moment(date).add(1, 'days').format('dddd, MMMM D YYYY');
    },
    simpleDate: function (date) {
      return moment(date).format('MMMM D YYYY');
    },
  }
}));
app.set('view engine', 'hbs');

// Static files
app.use(express.static(__dirname + '/static'));

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// MethodOverride
app.use(methodOverride('_method'));

// Event Routes
app.get('/', eventRouter.getAll);
app.get('/events/new', eventRouter.addForm);
app.post('/events', eventRouter.create);
app.get('/events/:id', eventRouter.getOne);
app.get('/events/:id/edit', eventRouter.editOne);
app.put('/events/:id', eventRouter.updateOne);
app.delete('/events/:id', eventRouter.deleteOne);

// RVSP Routes
app.get('/events/:eventId/rsvps/new', rsvpRouter.addForm);
app.post('/events/:eventId/rsvps', rsvpRouter.create);
app.delete('/events/:eventId/rsvps/:id', rsvpRouter.delete);

app.listen(port, () => {
  console.log(`App live at http://localhost:${port}`);
});
