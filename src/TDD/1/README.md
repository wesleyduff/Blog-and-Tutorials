# The Setup
In this folder we will setup our application. 

What this app will be created by.
1. Node Express app.
2. Mocha, Chai and Sinon

## Lets get started
Steps for this tutoral. 

1. Create git repo : 
```$ git init```
2. Use Express Generator to create our Express app.
```
$ npm install express-generator -g
$ mkdir app && cd app
$ express --view ejs --css less --git
$ npm install

```
3. Test to make sure everything is working
```
$ npm start
```
- open browser and go to : localhost:3000
- Should see your express app running.

## Now lets add some NPM modules
```
npm i --save-dev chai mocha sinon
```

### Setup is complete
Well done! Now onto folder #2!

#### What we have done:
- setup our git repo
- installed our node express app
  - set our gitignore, ejs as our view engine, less as our css compiler. 
- Ran our Express app.
