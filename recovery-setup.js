var AmbiTenant = require('./index');
var ambiTenant = new AmbiTenant(process.argv[2], process.argv[3]);
console.log(JSON.stringify(ambiTenant.recoverySetup(process.argv[4], process.argv[5])));
process.exit(0);
