const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "first promise success");
}),
  p2 = new Promise((resolve, reject) => {
    throw new Error('Thrown error in promise number 2');
  }),
  p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "third promise success never gets called");
  });

//Load up all the promises
Promise.all([p1, p2, p3])
  .then(result => {
    console.log('We do not get a result due to the error thrown in p2', result);
  })
  .catch(err => {
    console.log('-----------------ERROR -------------------------- \n We catch the error thrown in P2 \r\n err : ', err);
  });
