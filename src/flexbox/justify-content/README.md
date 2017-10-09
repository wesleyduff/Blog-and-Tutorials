# Flex : justify-content

Center you flex items on the main axis. 
If your flex-direction is set to *row*, your flex items can be adjusted on the main access going horizontaly. 
If your flex-direction is set to *column*, you can adjust your flex items on the main access in the vertical fasion.
<br/>
Here are the available options: 

- flex-start (default)
- flex-end
- Center
- space-around
- space-between
- space-evenly


<hr />
<br />
<br />

<br/>
<br/>

### Set flex items to align to the start of the main axis
- Should have your boxes stacked next to eachother (row)
- Should have your flex items __start__ at the start of the main axis

**start here:** [code pen - basic flex layout ](https://codepen.io/wesduff/pen/GMvQmG)

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<hr />

'''css
article {
  border:3px dashed #ccc;
  display:flex;
  justify-content:flex-start;
  
}

article > div {
  padding: 15px;
  margin: 0;
  color:#ddd;
  font:1.5em bold helvetica, tahoma;
  text-transform:uppercase;
  width:100px;
}

article > div:nth-child(1){
  background-color:#002e43;
}

article > div:nth-child(2){
  background-color:#406378;
}
article > div:nth-child(3){
  background-color:#6a90a9;
}
article > div:nth-child(4){
  background-color:#b2c3d3;
  color:#002e43;
}
article > div:nth-child(5){
  background-color:#d7dce0;
  color:#002e43;
}
```

 

<hr />
<br />
<br />

<br/>
<br/>

### Set flex items to align to the end of the main axis
- Should have your boxes stacked next to eachother (row)
- Should set a width of 100px to each one of your flex items
- Should have your flex items __end__ at the start of the main axis

**start here:** [code pen - basic flex layout ](https://codepen.io/wesduff/pen/GMvQmG)

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<hr />

'''css
article {
  border:3px dashed #ccc;
  display:flex;
  justify-content:flex-end;
  
}

article > div {
  padding: 15px;
  margin: 0;
  color:#ddd;
  font:1.5em bold helvetica, tahoma;
  text-transform:uppercase;
  width:100px;
}

article > div:nth-child(1){
  background-color:#002e43;
}

article > div:nth-child(2){
  background-color:#406378;
}
article > div:nth-child(3){
  background-color:#6a90a9;
}
article > div:nth-child(4){
  background-color:#b2c3d3;
  color:#002e43;
}
article > div:nth-child(5){
  background-color:#d7dce0;
  color:#002e43;
}
```