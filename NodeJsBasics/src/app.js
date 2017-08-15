// TeamTreeHouse Project: Get user badge count and JavaScript points!
const profile = require('./profile.js');
const users = process.argv.slice(2);

if (process.argv.length == 2) {
    console.log("Usage: app.js USERNAME [USERNAME 2, ...]");
}

users.forEach(profile.get);
