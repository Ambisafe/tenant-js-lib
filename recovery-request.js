var AmbiTenant = require('./index');
var ambiTenant = new AmbiTenant();
console.log(JSON.stringify(ambiTenant.recoveryRequest(process.argv[2], process.argv[3], process.argv[4])));
process.exit(0);
