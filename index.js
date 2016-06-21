var jwt = require('jsonwebtoken');
var uuid = require('node-uuid');
var ethUtil = require('ethereumjs-util');


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

AmbiTenant.prototype.issueFaucetToken = function(amount) {
  var token = this.createPayload('faucet');
  token.amount = amount;
  return jwt.sign(token, this.keySecret);
};

AmbiTenant.prototype.issueRecoveryToken = function() {
  var token = this.createPayload('recovery');
  return jwt.sign(token, this.keySecret);
};

AmbiTenant.prototype.issueCosignToken = function(msgData, sender) {
  var token = this.createPayload('cosign');
  token.msgData = msgData;
  token.sender = sender;
  return jwt.sign(token, this.keySecret);
};

AmbiTenant.prototype.generateKey = function() {

};

AmbiTenant.prototype.recoveryRequest = function(oldAddr, newAddr, signerKey) {
  var nonceBuffer = new Buffer(32);
  nonceBuffer.fill(0);
  uuid.v4(null, nonceBuffer, 16);

  var priv = new Buffer(signerKey, 'hex');
  var oldAddr = new Buffer(oldAddr, 'hex');
  var newAddr = new Buffer(newAddr, 'hex');

  var hash = ethUtil.sha3( Buffer.concat([oldAddr, newAddr, nonceBuffer]));

  var sig = ethUtil.ecsign(hash, priv);
  return {
    nonce: uuid.unparse(nonceBuffer, 16),
    r: sig.r.toString('hex'),
    s: sig.s.toString('hex'),
    v: sig.v
  };
};

AmbiTenant.prototype.recoverySetup = function(userAddress, signerKey) {
  var nonceBuffer = new Buffer(32);
  nonceBuffer.fill(0);
  uuid.v4(null, nonceBuffer, 16);

  var priv = new Buffer(signerKey, 'hex');
  var addr = new Buffer(userAddress, 'hex');

  var hash = ethUtil.sha3( Buffer.concat([addr, nonceBuffer]));

  var sig = ethUtil.ecsign(hash, priv);
  return {
    nonce: uuid.unparse(nonceBuffer, 16),
    r: sig.r.toString('hex'),
    s: sig.s.toString('hex'),
    v: sig.v
  };
}

module.exports = AmbiTenant;