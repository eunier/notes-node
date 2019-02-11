console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

// console.log(_.isString(true));
// console.log(_.isString('andrew'));
var filteredArray = _.uniq(['yunier', 'yunier', 1, 2, 3, 4]);
console.log(filteredArray);


// var res = notes.addNote();
// var add = notes.add(2, 3);
// console.log(res);
// console.log(add);

// var user = os.userInfo();
// console.log(user);
// fs.appendFile(
//     'greetings.txt',
//     'Hello ' + user.username + '! Your are ' + notes.age + '.\n',
//     () => {}
// );
