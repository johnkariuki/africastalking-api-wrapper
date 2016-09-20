# Africastalking API wrapper
An Africastalking Node.js API services wrapper

**Installing**
```bash
npm install --save africastalking-wrapper
```

**Setting up credentials**

```js
const Africastalking = require('africastalking-wrapper')({
  username: 'myUsername',
  apiKey: 'myAPIKey',
});

const SMS = Africastalking.SMS;

SMS.send({ to: '+254XYZABC', message: 'Andela is family.' }, (statusCode, response) => {
  if (statusCode === 201 ) {
    //Happiness.
    //Go Save the world
  } else{
    //Some error occurred.
    console.log(response);
  }
});
```

## SMS Service

### Sending A message

| Simple Messaging  	| Option               	| Required 	| Description                                                                                              	|
|-------------------	|----------------------	|----------	|----------------------------------------------------------------------------------------------------------	|
|                   	| `to`                   	| true     	| Comma separated list of recipents.                                                                       	|
|                   	| `message`              	| true     	| Message to send.                                                                                         	|
|                   	| `from`                 	| false    	| Africastalking registered Shortcode or alphanumeric ID                                                   	|
| **Bulk Messaging**    	|                      	|          	|                                                                                                          	|
|                   	| `enqueue`              	| false    	| Used to queue messages incase you are sending a high volume.                                             	|
| **Premium Messaging** 	|                      	|          	|                                                                                                          	|
|                   	| `keyword`              	| true     	| Africastalking registered premium keyword                                                                	|
|                   	| `linkId`               	| true     	| Rreceived from the message sent by subscriber to your onDemand service                                   	|
|                   	| `retryDurationInHours` 	| false    	| Number of hours your subscription message should be retried in case it's not delivered to the subscriber 	|

### Receiving a message
```js
//TODO
```
