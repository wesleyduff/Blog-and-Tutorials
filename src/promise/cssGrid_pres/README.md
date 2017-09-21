# I didnt want to change

<article><img src="https://github.com/wesleyduff/OKR-2017/blob/flexbox-grid/src/promise/cssGrid_pres/assets/grumpy-confused-cat.jpg" alt="Grumpy Old Man" />
  </article>
<br/>
<br/>

---
# CSS GRID SYSTEMS 

| Types        | descritpion
| -------------|:-------------:|
|&lt;table&gt; | Once this was the only way to create a grid to layout your HTML. The browser became smarter and included new CSS features. Table layout now is in the distant past.|
| percentage based w/ floats<br>[bootstrap grid](https://v4-alpha.getbootstrap.com/layout/grid/) | This is what is mostly used out in the wild. Bootstrap is a common CSS framework used by many companies and has been the standard for a few years. However, **float** is not meant to be used for layout. |
| [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)  | Here comes Flexbox: Flexbox was created for **layout**. Simpler, maintainable and *built into your browser* <br/>&mp; [Can I use ~ flexbox](http://caniuse.com/#search=flexbox)<br/> &mp;[flex bugs : community tracking](https://github.com/philipwalton/flexbugs)|
| [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) <br/><br/> [w3c css grid layout](https://drafts.csswg.org/css-grid/) | The future is coming where flexbox will be **_obsolete_**. CSS Grid Layout is a true css grid currently in the finishing stages of consideration. You can start using CSS Grid Layout now, but you have to turn this feature on inside your browser.<br/> &mp; [Can I use ~ CSS Grid Layout](http://caniuse.com/#search=css%20grid) <br/>&mp;[grid bugs : community tracking](https://github.com/rachelandrew/gridbugs)|

<br/>
<br/>

-----
<br/>
<br/>

# Well What Should We Use?
**Problems with float layouts**
- Difficulty with containment
- Source order dependence
- Equal height columns issues
- Content centering

**Flexbox cures these issues**
- Makes flex items grow to fill available space or shrink to avoid overflow
- It give flexitems proportional dimensions
- Flex items can be laid out in any direction, ordered according to visual preference (helps with responsive theming)

**Css Grid Layout : The future of css layout**
<br/>
The good folks at w3c are still working on finalizing how browsers should handle this new feature.
You can read more about CSS Grid Layout from the links below.
- [w3c specs](https://drafts.csswg.org/css-grid/)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS-TRICKS](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid by Example](https://gridbyexample.com/examples/)

<br/>
<br/>

_Example of using float layouts_

<a href="https://codepen.io/wesduff/pen/YrWBYN" target="_blank"><img src="https://github.com/wesleyduff/OKR-2017/blob/flexbox-grid/src/promise/cssGrid_pres/assets/bootstrap_example.png" alt="code-pen demo bootstrap floats"></a>

<br/>

**html**
```html<header class="hidden-xs">header</header>
<div class='main container'>
  <nav class="col-xs-12">nav</nav>
  <article class="col-xs-12 col-md-9">
    <h1>Article</h1>
    <div class="content-container col-xs-12">
      <div class="col-xs-12 col-sm-4"><h2>container 1</h2></div>
      <div class="col-xs-12 col-sm-4"><h2>container 2</h2></div>
      <div class="col-xs-12 col-sm-4"><h2>container 3</h2></div>
    </div>
  </article>
  <aside class="hidden-xs hidden-sm col-md-3">aside</aside>
</div>
<footer class="hidden-xs">footer</footer>

```
**CSS**
```css
/* mobile first */
nav{
  background-color: #d5ea19;
}

article {
  background-color:#eaf2a7;
  padding:10px;
  margin-top:10px;
  height:100vh;
}

article > div > div {
  border:1px solid black;
  margin:10px 0;
}

article > div > div:nth-child(1){
  background-color:#f1cca7;
}

article > div > div:nth-child(2){
  background-color:#eab37c;
}

article > div > div:nth-child(3) {
  background-color:#e28b34;
}

@media (min-width: 640px) {
  h2 {
    font-size:2rem;
  }
  header, footer {
    height:5rem;
    background-color:#4ae2d2;
    text-align:center;
    vertical-align:middle;
    padding-top:15px;
    font-weight:800;
  }
  
  article {
    height:70vh;
  }
  
  article > div > div {
    height:21.5rem;
  }
  
}

@media (min-width: 940px) {
   aside {
    height:70vh;
  }
  
  aside {
    background-color:#b1ba71;
    margin-top:10px;
    
  }
}
```



<br/>
<br/>

_Example of using flexbox layouts_

<a href="https://codepen.io/wesduff/pen/Ewydjz" target="_blank"><img src="https://github.com/wesleyduff/OKR-2017/blob/flexbox-grid/src/promise/cssGrid_pres/assets/flexbox_layout.png" alt="code-pen demo bootstrap floats"></a>

<br />

```html

<header>header</header>
<div class='main'>
  <nav>nav</nav>
  <article>
    <h1>Article</h1>
    <div class="content-container">
      <div><h2>flex1</h2></div>
      <div><h2>flex 2</h2></div>
      <div><h2>flex 3</h2></div>
    </div>
  </article>
  <aside>aside</aside>
</div>
<footer>footer</footer>

```

**CSS**
```css
/* Mobile first */
body {
  font: 24px Helvetica;
  background: #999999;
}

.main {
  min-height: 97vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
}
 
.main > aside, header, footer {
  display: none;
}

.main > nav, .main > article {
    margin: 4px;
    padding: 5px;
    border: 1px solid #8888bb;
    border-radius: 7pt;
}

.main > nav {
  background: #ccccff;
  flex:1 1 10vh;
}

.main > article {
  background: #dddd88;
  flex:3 1 70vh;
}

article > div {
  display:flex;
  flex-flow:column;
  border:1px solid black;
  justify-content: space-between;
  height:70vh;
 }

article > div div{
  color:white;
  text-align:center;
  border:1px solid black;
}
article > div div:nth-child(1){
  background-color:#42f4c2;
}
article > div div:nth-child(2){
  background-color:#0e64ef;
}
article > div div:nth-child(3){
  background-color:#399634;
}
      /*Tablet*/
@media (min-width: 640px) {
  
  .main {
    flex-flow: row;
  }
  header, footer {
    display: block;
  }
  
  article > div {
    display:flex;
    flex-flow:row;
  }
  
  article > div div{
    width:30%;
  }
  
  header, footer {
    margin: 4px;
    padding: 5px;
    min-height: 10vh;
    border: 1px solid #eebb55;
    border-radius: 7pt;
    background: #ffeebb;
  }
}

@media (min-width: 940px) {
  .main > aside {
    display:block;
  }
  .main > aside {
    margin: 4px;
    padding: 5px;
    border: 1px solid #8888bb;
    border-radius: 7pt;
    background: #ccccff;
    flex: 1 6 20%;
  }
}
```

<br/>
<br/>

---
<br/>
<br/>

# Why?
The only cross-browser reliable tools available for creating CSS layouts were things like *floats*. Styling CSS layouts using a bulky css framework is now a thing of the past with the use of modern browsers. Why use a framework when a perfect layout tool is built in and ready.

<br/>

CSS Grid Layout would be ideal, but the world is not yet ready. Till then, _flexbox_ is the tool of choice.

<br/>

You may ask, why CSS Grid Layout and not expand flexbox? 

<br/>
Flexbox is _unidirectional_ . Flexbox can only layout your HTML elements in one specific direction. 

CSS Grid Layout is _multidirectional_ . CSS Grid Layout can layout your HTML elements in two directions, x and y axis.

<br/>
<br/>

---

<br/>
<br/>

# The Goods - for Flexbox

Here is a list of links to help you on your path to layout bliss.

- [w3c specs](https://www.w3.org/TR/css-flexbox-1/)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
- [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [I found this tutorial to be helpful](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
- [Great Pluralsight video](https://www.pluralsight.com/courses/modern-web-layout-flexbox-css-grid)
- [Linked In videos provided by Healthgrades access](https://www.linkedin.com/learning/search?keywords=flexbox&u=2047042)

<br/>
<br/>

