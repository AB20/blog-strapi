const accountSid = 'AC8087f38eec8e8452185f84957037b6ec';
const authToken = '7f597a84d8ace8ccf061826b4baa32ed';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15017122661',
     to: '+15558675310'
   })
  .then(message => console.log(message.sid));