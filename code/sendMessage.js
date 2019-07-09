const sendinblue = require('sendinblue-api');

const YOUR_EMAIL = process.env['your_email'];
const YOUR_NAME = process.env['your_name'];
const SENDINBLUE_TOKEN = process.env['sendinblue_token'];

exports.handler = function (event, context, callback) {
  const parsedEvent = JSON.parse(event);
  const {name, email, message} = parsedEvent;

  const response = function (err, res) {
    console.log('Response about to happen');

    callback(err, {
      statusCode: 200,
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(res)
    });
  };

  const sendinObj = new sendinblue({
    apiKey: SENDINBLUE_TOKEN,
    timeout: 6000,
  });

  console.log('SendinBlue initialised');
  console.log('Calling send_email');

  const email_args = {
    to: {},
    from: [YOUR_EMAIL, YOUR_NAME],
    subject: 'Message from Function Compute',
    html: `${name}, with email ${email}: ${message}`,
  };
  email_args.to[YOUR_EMAIL] = YOUR_NAME;

  sendinObj.send_email(email_args, response);
};
