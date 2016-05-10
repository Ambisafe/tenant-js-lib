var jwt = require('jsonwebtoken');
var uuid = require('node-uuid');

function AmbiTenant(keyId, keySecret) {
  this.keyId = keyId;
  this.keySecret = keySecret;
}

AmbiTenant.prototype.createPayload = function(sub) {
  return {
    iss: this.keyId,
    jti: uuid.v4(),
    sub: sub,
    aud: 'ambisafe',
    exp: (((new Date).getTime() / 1000 | 0) + (60 * 60)),   
  }
};

AmbiTenant.prototype.issueStorageToken = function() {
  var token = this.createPayload('storage');
  return jwt.sign(token, this.keySecret);
};

AmbiTenant.prototype.issueFaucetToken = function() {
  var token = this.createPayload('faucet');
  return jwt.sign(token, this.keySecret);
};

AmbiTenant.prototype.issueRecoveryToken = function() {
  var token = this.createPayload('recovery');
  return jwt.sign(token, this.keySecret);
};

AmbiTenant.prototype.issueCosignToken = function(msgData) {
  var token = this.createPayload('cosign');
  token.msgData = msgData;
  return jwt.sign(token, this.keySecret);
};

module.exports = AmbiTenant;