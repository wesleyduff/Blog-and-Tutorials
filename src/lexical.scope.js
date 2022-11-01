/**
* Example 1
*/

var address = { IP : '127.0.0.1', zip: 987654 }

function Person(){
  var name = 'John Doe';
  console.log(`This is my ip : ${address.IP}`);
}




/**
* Example 2
*/
var greetings = 'hello'

Greetings();

function Greetings(){
    
    const region = {
      address: {
        IP : '127.0.0.1',
        zip: 987654
      },
      getAddress(){
        var greetings = 'Mr. Roboto';
        const declaration = `Example 2 : This is my IP : ${this.address.IP}`,
              addition = `${greetings} : I am your assistant`
        ;
        return `${declaration} : ${addition}`
      }
    }

    console.log(region.getAddress());
 }


/**
* Example 3
*/

Greetings();

function Greetings(){
    let greetings = 'Purple';
  
    const region = {
      address: {
        IP : '127.0.0.1',
        zip: 987654
      }
    }
    
    function getAddress(){
     
      const declaration = `Example 2 : This is my IP : ${region.address.IP}`,
            addition = `${greetings} : I am your assistant`
      ;
     
      return `${declaration} : ${addition}`
    }

    console.log(getAddress());
 }


/**
* Example 4
*/


Greetings();

function Greetings(){
    var greetings = 'Purple';
    const region = {
      address: {
        IP : '127.0.0.1',
        zip: 987654
      }
    }
    
    function getAddress(){
     
      const declaration = `Example 2 : This is my IP : ${region.address.IP}`,
            addition = `${greetings} : I am your assistant`
      ;
     
      return `${declaration} : ${addition}`
    }
  
    greetings = 'Yellow';

    console.log(getAddress());
 }

/*
* Module Pattern
*/

function myModule(){

    //private properties .. start with underscore 
    const _host = 'postregres',
          _port = 5432
    ;
  
    //private methods
    const _connect = function (runInternal=false) {
      //.. do someconnection here
      console.log(`connect on port : ${_port} : NEEDS IMPLMENTATION`);
      
      runInternal ? _internalServiceNotPublic() : 'No internal service available';
    }
  
    function _internalServiceNotPublic(){
      console.log('internal service : NEEDS IMPLMENTATION');
    }
      
  
    //expose private methods / properties to public
    return {
      connect : _connect
    }
}
  
    
          

    
