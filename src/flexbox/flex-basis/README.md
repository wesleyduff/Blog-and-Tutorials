# Flex Basis

Flex basis sets the default size before any available space is distributed. 
The flex-basis counted first then if the item has a flex-grow of ```1```, the flex item will first set it basis then add the amount of space that is added to all flex items of the amount of space that is left over.
So, first the flex item gets its width from the flex-basis, then the flexible amount of space set by flex-grow.
If a flex-shrink is set, the shrinkage will not go below the flex-basis amount.
<br/>
You have a few items you can use to set your flex-basis
- auto : This says, look at my height or width property
- content: Set this based on my content
- <length> : You can set any type of length. %, em, etc..

<hr />
<br />
<br />

### Set a flex-direction of row
- Should have your boxes stacked next to eachother
- Should have the **flex container** take up the full width of the parent container which is the __body__.

**start here:** [code pen - basic flex layout ](https://codepen.io/wesduff/pen/GMvQmG)

<br />
<br />

**Finished** : [code pen - flex direction : row : example ](https://codepen.io/wesduff/pen/VMzQWr)
<br />
<hr />
<br />
<br />

### Set a flex-direction of column
- Should have your boxes stacked ontop to eachother
- Should have the **flex container** take up the full width of the parent container which is the __body__.

**start here :** [code pen - basic flex layout ](https://codepen.io/wesduff/pen/GMvQmG)

<br />
<br />

**Finished** : [code pen - flex direction : column :  example ](https://codepen.io/wesduff/pen/PJKQOy)
<br />
<hr />
<br />
<br />

### Set a flex-direction of row - _REVERSE_
- Should have your boxes stacked ontop to eachother - with **flex 1** on the far right side and reading right to left.
- Should have the **flex container** take up the full width of the parent container which is the __body__.

**start here :** [code pen - basic flex layout ](https://codepen.io/wesduff/pen/GMvQmG)

<br />
<br />

**Finished** : [code pen - flex direction : row reverse :  example ](https://codepen.io/wesduff/pen/ZXJrxQ)
<br />
<hr />
<br />
<br />

### Set a flex-direction of column - _REVERSE_
- Should have your boxes stacked ontop to eachother - with **flex 1** on the bottom.
- Should have the **flex container** take up the full width of the parent container which is the __body__.

**start here :** [code pen - basic flex layout ](https://codepen.io/wesduff/pen/GMvQmG)

<br />
<br />

**Finished** : [code pen - flex direction : column reverse :  example ](https://codepen.io/wesduff/pen/gGxvvB)

<br />
<hr />
