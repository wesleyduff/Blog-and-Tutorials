# Intermdiate TDD
In this session, I am going to add more fail and passing tests per set. 

The basics have been laid out now it is time to see how we can manage test cases that require a little more than basic testing.

## Folder 1 SPYs
- Make sure a method returns what we exepect with the Chai expect library
- Use a *spy* to verify our method has been called at least once.
- Use a *spy* to verify our method was called with the correct parameters.
- Use a *spy* to return data when the method is called (also look at **stubs**)

## Folder 2 Stubs
- Make sure our method returns a failure case so we can test our negative use cases.
- Make sure our method returns data so we can write tests for low level integration tests

## Folder 3 Mocking API and Databases
- Make sure we cover our failure cases are correct when our API returns bad or failed data
- Make sure we test the successful response of our API calls
- Mock out third party api calls
- Mock out database calls to return successful and unsuccessful responses.


