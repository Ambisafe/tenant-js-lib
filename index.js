var jwt = require('jsonwebtoken');
var uuid = require('node-uuid');

function AmbiTenant(keyId, keySecret) {
  this.keyId = keyId;
  this.keySecret = keySecret;
}

AmbiTenant.prototype.getStorageToken = function() {
  return jwt.sign({
	  iss: this.keyId,
	  sub: "storage",
	  jti: uuid.v4(),
	  aud: "ambisafe",
	  exp: (((new Date).getTime() / 1000 | 0) + (60 * 60)),
	}, this.keySecret);
};

module.exports = AmbiTenant;