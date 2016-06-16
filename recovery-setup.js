var AmbiTenant = require('./index');
var ambiTenant = new AmbiTenant();
console.log(JSON.stringify(ambiTenant.recoverySetup(process.argv[2], process.argv[3])));
process.exit(0);
