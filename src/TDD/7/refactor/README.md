## Returning hardcoded values instead of calling 3rd party API directly.
We do not want our test cases to be dependent apon a 3rd party system.  Calling SWAPI is not something we want our API to perform. Instead it would be nice to hijack the request to SWAPI and return a hard coded successful value.  
Lets add some code to our current test to do just that.
```
 it('Should log the URL when a get request is made to SWAPI', async () => {
            const query = {
                platform: 'planets',
                id: 2
            }

            let url = swapiModule.buildUrl(query);
            parsedUrl = urlParse(url);

            const host = `${parsedUrl.protocol}//${parsedUrl.hostname}`
            const getSegment = parsedUrl.pathname + parsedUrl.query;

            nock(host)
                .get(getSegment)
                .reply(200, {
                    type: 'fake',
                    data: {}
                })

            try{
                await swapiModule.get(url);
            } catch(exception){
                assert.fail(`Exception : ${exception}`);
            }

            assert(loggerSpy.calledOnce, 'Failed because the logger functionality was not called');
        });
```
We have added two new npm modules.  
Perform an `npm i --save-dev` to add these items to your dev dependencies
- nock
- url-parse
We are going to use *nock* to hijack any urls that match our case and return data instead of allowing the test to make a call to a third party service.  
We use the *url-parse* to break apart the URL that was constructed to manage our *nock* hijack.  
Require both of these new modules at the top of our test file.  
Lets talk about these three lines of code 
```
 parsedUrl = urlParse(url);

 const host = `${parsedUrl.protocol}//${parsedUrl.hostname}`
 const getSegment = parsedUrl.pathname + parsedUrl.query;

```
- parsedURL : This uses the npm module *url-parse* to break out url into pieces.
- host : Take the protocol `https` and add `//` then append the hostname `SWAPI.co`
- getSegment : Nock requires us to provide the url path and the query to capture any **get** requests to this URI. Combine the pathname and the query to make one string

Now we have the items we need to create our nock.  
Below is the structure we need
- A URI to capture
- A path to test
- Return a 200 with some data
```
 nock(host)
    .get(getSegment)
    .reply(200, {
        type: 'fake',
        data: {}
    })
```
Here we are returning an http response of 200 with a returned object   
When our test executes any code that makes a get request that matches what we have setup, the request will return a 200 with our fake object data.

**note** : Our request is a *Promise*. To manage our code we add *await* before our call to retrieve our promise.  
Also make sure to add *async* to the calling function.

If you add a break point to your code and step through, you will see the call to our SWAPI endpoint return an HTTP response of 200 and our fake data.

Our test still passes.

We no longer require SWAPI to be assessable to run our tests.

## How to test our failing cases.
We are hijacking our third party call and returning a success 200 http response. Now we need to test what happens when we recieve an error.  
A good developer will make sure our code fails gracefully and causes the least amount of friction to the end user.

Lets add a new test to our second test suite to test our unsuccessful api call.

```
it('Should handle an unsuccessful api response with a logged out message to the user using console.error', async () => {
    const query = {
        platform: 'planets',
        id: 2
    }

    let url = swapiModule.buildUrl(query);
    parsedUrl = urlParse(url);

    const host = `${parsedUrl.protocol}//${parsedUrl.hostname}`
    const getSegment = parsedUrl.pathname + parsedUrl.query;

    nock(host)
        .get(getSegment)
        .replyWithError({'message': 'fake error message', 'code': 'CUSTOM_ERROR'})

    try{
        await swapiModule.get(url);
    } catch(exception){
        assert(loggerErrorSpy.calledOnce, 'Failed because the logger was not called with an error');
    }
})
```
We see a lot of the same stuff here. A few items to note
- New spy called *loggerErrorSpy*. Create a new spy just like we did in the *Before* method inside our testsuite. Here we want to spy on the **error** method on the console object.
- Update our *nock* to replyWithError instead of reply with a 200 http response.

Run your test and you will see it fail with  
`AssertionError: Failed because the logger was not called with an error`  

To make our test pass, we need to log to the console with the error method.  
Lets add the code to our module now. 

```
 get: (url) => {
    console.log(url);
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if(error){
                console.error(`Error calling api : ${JSON.stringify(error)}`);
                reject(`Error calling api : ${JSON.stringify(error)}`);
            } else {
                resolve({result: body})
            }
        })
    })
}
```
Here we added the console.error to our error block.  
Run your test again and they should all be passing.


**notice** You may have seen  
` process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0; `  
This was put in place if you were seeing a "self signed cert" error.  
This piece of code has to come **before** any requests are made to an external https request.
