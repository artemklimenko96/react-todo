var moment = require('moment');
var now = moment();
console.log("current time", now.unix());
var timestamp = 1491760125;
var currentmoment = moment.unix(timestamp);
console.log(currentmoment.format('MMMM Do, YYYY @ HH:mm A'));