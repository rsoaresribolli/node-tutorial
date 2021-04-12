// Module is an Escapsulated Code (only share the minimum)
// NodeJS uses CommonJS, and by default every file is a modules
const names = require('./names');
const sayHi = require('./utils');
const data = require('./alternative-exports');
require('./mind-grenade');

sayHi(names.pri);
sayHi(names.ricardo);