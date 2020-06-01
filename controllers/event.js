const models = require('../db/models');

exports.getAll = (req, res) => {
  models.Event.findAll({ order: [['createdAt', 'DESC']] }).then(events => {
    console.log(events);
    res.render('events-view', {events: events, title: 'Explore'})
  })
};

exports.addForm = (req, res) => {
  res.render('events-new', { title: 'Create' })
};

exports.create = (req, res) => {
  models.Event.create(req.body).then(event => {
    res.redirect('/');
  }).catch((err) => {
    console.log(err)
  });
};

exports.getOne = (req, res) => {
  res.render('...', { title: '' });
};

exports.editOne = (req, res) => {
  res.render('...', { title: '' });
};

exports.updateOne = (req, res) => {
};

exports.deleteOne = (req, res) => {
};
