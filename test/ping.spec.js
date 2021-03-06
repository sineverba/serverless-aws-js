'use strict';

// tests for ping
// Generated by serverless-mocha-plugin

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('ping', '/ping.js', 'ping');

describe('ping', () => {
  before((done) => {
    done();
  });

  it('returns status sucess', async () => {
    const response = await wrapped.run({});
    const body = JSON.stringify({
      message: 'success',
    })
    expect(response.body).to.equal(body);
  });
});
