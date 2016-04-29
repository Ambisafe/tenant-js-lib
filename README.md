# Ambisafe SaaS Tenant Library

## Usage

```javascript
var Ambi = require('ambiTenant');
var ambi = new Ambi('api key id', 'api key secret');
var token = ambi.getStorageToken();

```

example token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIxMjMiLCJzdWIiOiJzdG9yYWdlIiwianRpIjoiNjU3NzhiNzQtZGE0Mi00ZGQ2LTlmNjgtYmUxZWJmNGU3MDUwIiwiYXVkIjoiYW1iaXNhZmUiLCJleHAiOjE0NjE5NDAwOTgsImlhdCI6MTQ2MTkzNjQ5OH0.sObUi2W7sZ85R6aVW0pPUlyYid88aqFoqAX9fUIV1Cw`

validet tokens on [jwt.io](https://jwt.io/).