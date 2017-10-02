# Flex Direction

Order allows you to order the __flex items__ of your choosing. 

__**However**, keep in mind the people with screen readers. You do not want the screen reader to read out a bunch of content before the navigation is presented. Changing the order of the DOM elements must only be a visual element and should not effect the overall functionality of your site. __

Order only re-orders your DOM elements on the render, the order is not changed from the source.

```css
order: <integer>
```

<hr />
<br />
<br />

### Set a flex-direction of row
- Should have your boxes stacked next to eachother
- Should have the **flex container** take up the full width of the parent container which is the __body__.
- Should have **flex 1** second in position and **flex 4** at the start of the row

**start here:** [code pen - basic flex layout ](https://codepen.io/wesduff/pen/GMvQmG)

<br />
<br />

**Finished** : [code pen - flex direction : row : example ](https://codepen.io/wesduff/pen/VMzQWr)
<br />
<hr />