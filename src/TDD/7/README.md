# Handling Third Party API Calls
We do not want to hit any API endpoints while we are running our tests. The developers of the API we are calling should have tested their code, the developer using the api should not be responsible for the api's tests.

There are a few ways of handling this, I found the best way, and most strait forward, is to use an NPM module called [nock](https://www.npmjs.com/package/nock).

Nock, allows you to hijack outgoing calls to any endpoint you have chosen to capture.

Follow along in this moudle's [refactor](./refactor) module to find out how it works.