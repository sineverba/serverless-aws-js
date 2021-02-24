# Serverless AWS Node / JS Example

## Setup

```shell
$ npm install
```

### Serverless main command

With prepending `npm run` we can use SLS installed per-project, instead than globally.

```shell
$ npm run serverless invoke test # launch tests # OR... npm run test
$ npm run serverless deploy # deploy to aws
$ npm run sls offline # launch offline deploy. Call http://localhost:3000/dev/ping
```