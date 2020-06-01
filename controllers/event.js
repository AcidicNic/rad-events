var events = [
  { title: "Clown Meetup", desc: "A great event that is super fun to look at and good", imgUrl: "https://www.bouncepros.com/wp-content/uploads/eshop-prod-images/Entertainers/Clowns/partyclown.jpg" },
  { title: "I am your second event", desc: "A great event that is super fun to look at and good", imgUrl: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn" },
  { title: "I am your third event", desc: "A great event that is super fun to look at and good", imgUrl: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn" }
];

exports.getAll = (req, res) => {
  res.render('viewEvents', { events: events, title: 'Explore' });
};

exports.addForm = (req, res) => {
  res.render('...', { title: '' });
};

exports.create = (req, res) => {
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
