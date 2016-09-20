const expect = require('chai').expect;
const nock = require('nock');
const SMS = require('../index')({
  apiKey: 'f0477fbd1d35d06d450890e9cfbd22b74c87d6f81ec9d5e12c1323db1ada58a2',
  username: 'johnkariuki'
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
