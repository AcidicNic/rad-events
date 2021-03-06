'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    imgUrl: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  Event.associate = function(models) {
    Event.hasMany(models.Rsvp);
  };
  return Event;
};
