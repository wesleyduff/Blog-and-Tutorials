# Flex Basis

Flex basis sets the default size before any available space is distributed. 
The flex-basis counted first then if the item has a flex-grow of ```1```, the flex item will first set it basis then add the amount of space that is added to all flex items of the amount of space that is left over.
So, first the flex item gets its width from the flex-basis, then the flexible amount of space set by flex-grow.
If a flex-shrink is set to ```0```, the shrinkage will not go below the flex-basis amount

<br/>

You have a few items you can use to set your flex-basis
- auto : This says, look at my height or width property
- content: Set this based on my content
- &lt;length&gt; : You can set any type of length. %, em, etc..

<hr />
<br />
<br />

### Set a flex-basis
- Should have your boxes stacked next to eachother
- Should have the **flex container** take up the full width of the parent container which is the __body__.
- Should have the first flex item's flex-basis set to 300px
- When you shrink the browser window, the first flex-item should not shrink below 300px

**start here:** [code pen - basic flex layout ](https://codepen.io/wesduff/pen/GMvQmG)

<br />
<br />

**Finished** : [code pen - flex direction : row : example ](https://codepen.io/wesduff/pen/Nayjqp)
<br />
<hr />
<br />
<br />