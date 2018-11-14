const supportsColor = require('supports-color');
const Chalk = require('chalk').constructor;
module.exports = new Chalk({ level: supportsColor.stderr.level });
