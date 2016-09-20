const fs = require('fs');
const querystring = require('querystring');
const request = require('request');

const AfricasTalkingGateway = require('./index');
const config = require('js-yaml').safeLoad(
  fs.readFileSync(`${__dirname}/config/africastalking.yml`, 'utf8'));

class SMS extends AfricasTalkingGateway {
  constructor(args) {
    super(args);
    super.setRequestOptions({
      url: config.endpoints.sms.full,
      method: 'POST',
    });
  }

  send(payload, cb) {
    if (!payload.to) {
      throw new Error('Specify at least one number to send to.');
    }

    if (!payload.message) {
      throw new Error('Specify a message to send.');
    }

    const newMessage = querystring.stringify({
      username: this.username,
      to: payload.to,
      message: payload.message,
    });


    super.setRequestOptions({
      form: newMessage,
    });

    super.setRequestHeaders({
      'Content-Length': newMessage.length,
    });

    request(this.options, (error, response) => {
      cb(response.statusCode, response.body);
    });
  }
}

module.exports = SMS;
