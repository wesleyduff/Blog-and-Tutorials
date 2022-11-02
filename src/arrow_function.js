const collection = ["a","b","c"]
const mappedCollection = collection.map(item => item + " : addition");
//['a : addition', 'b : addition', 'c : addition']

//
var root_config = {
 endpoint: "charter.com"
}

function test(){
    const config = { 
        endpoint: "google.com"
    }
  
    const options = {
      url: (() => this.config.endpoint)(),
      endpoint : 'yahoo.com',
      getUrl:  function(){ return this.endpoint }
    }
  
    return {options}
}

function test2(){
    
    const options = {
      url: (() => this.root_config.endpoint)(),
      endpoint : 'yahoo.com',
      getUrl:  function(){ return this.endpoint }
    }
  
    return options
}
