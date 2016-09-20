const _ = require('lodash');

class AfricasTalkingGateway {
  constructor(args) {
    if (!args.apiKey || !args.username) {
      throw new Error('missing username or API key');
    }

    this.apiKey = args.apiKey;
    this.username = args.username;

    this.options = {
      requestCert: true,
      rejectUnauthorized: false,
      agent: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        apikey: this.apiKey,
      },
    };
  }

  setRequestOptions(options) {
    _.forEach(options, (v, k) => {
      this.options[k] = v;
    });
  }

  setRequestHeaders(options) {
    _.forEach(options, (v, k) => {
      this.options.headers[k] = v;
    });
  }
}

module.exports = AfricasTalkingGateway;
