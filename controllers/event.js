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
    res.render('events-show', { event: event, title: event.title })
  }).catch((err) => {
    // event not found!
    console.log(err.message);
    res.redirect('/');
  })
};

exports.editOne = (req, res) => {
  models.Event.findByPk(req.params.id).then((event) => {
    res.render('events-edit', { event: event, title: "Edit" });
  }).catch((err) => {
    // event not found!
    console.log(err.message);
    // res.redirect('/')
  })
};

exports.updateOne = (req, res) => {
  models.Event.findByPk(req.params.id).then(event => {
    event.update(req.body).then(event => {
      res.redirect(`/events/${req.params.id}`);
    }).catch((err) => {
      console.log(err);
    });
  }).catch((err) => {
    // event not found!
    console.log(err);
  });
};

exports.deleteOne = (req, res) => {
  models.Event.findByPk(req.params.id).then(event => {
    event.destroy();
    res.redirect(`/`);
  }).catch((err) => {
    console.log(err);
  });
};
