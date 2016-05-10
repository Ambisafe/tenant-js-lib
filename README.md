# Ambisafe SaaS Tenant Library

This library allows to issue one-time, consumable bearer tokens that represent permissions to the Ambisafe SaaS services. Each Tentant (Business Customer of Ambisafe) can use this library, together with an active subscription and the derived API keys to delegate access to its users. 

**NOTICE: Abuse or loss of API keys can create undesired high cost on the SaaS bill of the tenant. Security of API keys is responsibility of the tenant. Only use this library on the backend, don't expose API keys to 3rd parties or in web or mobile applications.**

## Usage

Debug and validate tokens on [jwt.io](https://jwt.io/).

### Setup

```javascript
var Ambi = require('ambiTenant');
var ambi = new Ambi('api key id', 'api key secret');
```

### Faucet

```javascript
var token = ambi.issueFaucetToken();
```

### Storage

```javascript
var token = ambi.issueStorageToken();
//example token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIxMjMiLCJzdWIiOiJzdG9yYWdlIiwianRpIjoiNjU3NzhiNzQtZGE0Mi00ZGQ2LTlmNjgtYmUxZWJmNGU3MDUwIiwiYXVkIjoiYW1iaXNhZmUiLCJleHAiOjE0NjE5NDAwOTgsImlhdCI6MTQ2MTkzNjQ5OH0.sObUi2W7sZ85R6aVW0pPUlyYid88aqFoqAX9fUIV1Cw`

```

### Recovery

```javascript
var token = ambi.issueRecoveryToken();
```

### Co-Signing

```javascript
var msgData = '0x123';
var token = ambi.issueCosignToken(msgData);
```
