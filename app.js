const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 420;

// handlebars setup
app.engine('.hbs', exphbs({
    extName: '.hbs',
    defaultLayout: 'main.hbs',
    partialsDir: app.get('views') + '/partials',
    layoutDir: app.get('views') + '/layouts'
}));

app.get('/', (req, res) => {
  res.render('home.hbs', { msg: 'Handlebars are Cool!' });
});

app.listen(port, () => {
  console.log(`App live at http://localhost:${port}!`);
});
