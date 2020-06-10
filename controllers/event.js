const models = require('../db/models');
const moment = require('moment');

exports.getAll = (req, res) => {
  models.Event.findAll({ order: [['createdAt', 'DESC']], raw: true }).then(events => {
    res.render('events-view', {events: events, title: 'Explore'})
  });
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
  models.Event.findByPk(req.params.id, { include: [{ model: models.Rsvp, raw: true, nest: true}], nest: true}).then(event => {
    res.render('events-show', { event: event.dataValues, title: event.title});
  }).catch((err) => {
    console.log(err.message);
  })
};

exports.editOne = (req, res) => {
  models.Event.findByPk(req.params.id, {raw: true}).then((event) => {
    let rawDate = null;
    if (event.date) {
      rawDate = moment(event.date).format('YYYY-MM-DD');
    }
    res.render('events-edit', { event: event, title: "Edit", rawDate: rawDate });
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
