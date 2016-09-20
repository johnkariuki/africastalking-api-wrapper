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

## Contributing

Contributions are **welcome** and will be fully **credited**.

We accept contributions via Pull Requests on [Github](https://github.com/johnkariuki/africastalking-api-wrapper).

## Pull Requests

- **Document any change in behaviour** - Make sure the `README.md` and any other relevant documentation are kept up-to-date.

- **Create feature branches** - Don't ask us to pull from your master branch.

- **One pull request per feature** - If you want to do more than one thing, send multiple pull requests.

- **Send coherent history** - Make sure each individual commit in your pull request is meaningful. If you had to make multiple intermediate commits while developing, please [squash them](http://www.git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Changing-Multiple-Commit-Messages) before submitting.

## Security

If you discover any security related issues, please email me at [John Kariuki](johnkariukin@gmail.com) or create an [issue](https://github.com/johnkariuki/africastalking-api-wrapper/issues).

## Credits

[John kariuki](https://github.com/johnkariuki)

## License

### The MIT License (MIT)

Copyright (c) 2016 John kariuki <johnkariukin@gmail.com> <john.kariuki@andela.com>

> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
