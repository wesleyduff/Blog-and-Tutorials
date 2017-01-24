//simulate an async call that takes 1second
let p = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve({data: {GUID: 1001, data: []}});
  }, 1000);
});

p.then(val => {
  console.log('Our value before we make the next async call  : ', val);

  let p2 = new Promise((resolve, reject) => {
    //randomuser.me is a free api to build fake profiles
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
        resolve(data);
      }
    });
  });

  //returning any value inside a .then() method wraps the value in a promise
  return p2.then(data => {
    //create a copy of val. That way we can see the differences in the console.
    let returnval = Object.assign({}, val);
    returnval.data = data;
    return returnval;
  });

}).
//the promise returned above is unwrapped and the value is provided
then(val => {
  console.log('this  data  can now be mapped here : ', val);
})
//catch any errors that happen
.catch(err => console.log('error : ', err));
