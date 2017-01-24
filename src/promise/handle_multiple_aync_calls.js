//This document shows how to handle many async calls with the promise.all method.
const p1 = Promise.resolve(3),
  p2 = 1337,
  p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
  });

const all_promises = [p1, p2, p3];

//handle all promises and return an array of results to the resolve method
Promise.all(all_promises).then(values => {
  console.log('Values : ', values);
  console.log('Is Array : ', values.hasOwnProperty(length) && typeof values === 'object');
});
