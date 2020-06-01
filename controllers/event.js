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
    // redirect to the new event's page
    res.redirect(`/events/${event.id}`)
  }).catch((err) => {
    console.log(err)
  });
};

exports.getOne = (req, res) => {
  models.Event.findByPk(req.params.id).then((event) => {
    // if the event was found, load up single event template
    res.render('event-show', { event: event, title: event.title })
  }).catch((err) => {
    // event not found!
    console.log(err.message);
    res.redirect('/');
  })
};

exports.editOne = (req, res) => {
  res.render('...', { title: '' })
};

exports.updateOne = (req, res) => {
};

exports.deleteOne = (req, res) => {
};
