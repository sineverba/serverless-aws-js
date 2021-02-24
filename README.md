Serverless AWS Node / JS Example
================================

| CI / CD | Status |
| ------- | ------ |
| Circle CI | [![CircleCI](https://circleci.com/gh/sineverba/serverless-aws-js.svg?style=svg)](https://circleci.com/gh/sineverba/serverless-aws-js) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/serverless-aws-js/branches/master.svg)](https://sineverba.semaphoreci.com/projects/serverless-aws-js) |

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