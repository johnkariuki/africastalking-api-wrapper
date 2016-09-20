const expect = require('chai').expect;
const nock = require('nock');
const SMS = require('../index')({
  apiKey: 'myApiKey',
  username: 'myUsername'
}).SMS;

const mockData = require('./mock-data');

nock(' https://api.africastalking.com')
  .post('/version1/messaging')
  .reply(201, JSON.stringify(mockData.newSMS))

describe('AfricasTalking SMS API tests', () => {
  describe('Sending a message', () => {
    it('Should send out a message succesfully', (done) => {
      SMS.send({
        to: '+254721949259',
        message: 'Andela is family.'
      }, (statusCode, response) => {
        expect(statusCode).to.equal(201);
        expect(JSON.parse(response).SMSMessageData.Recipients[0].status)
          .to.equal('Success');

        done();
      });
    });
  });
});
