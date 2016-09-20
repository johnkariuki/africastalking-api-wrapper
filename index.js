const SMSService = require('./src/sms');

module.exports = (args) => {
  const api = {
    SMS: new SMSService(args),
  };
  return api;
};
