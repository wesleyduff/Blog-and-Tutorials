<article><img src="https://github.com/wesleyduff/OKR-2017/blob/flexbox-grid/src/promise/cssGrid_pres/assets/grumpy-confused-cat.jpg" alt="Grumpy Old Man" />
  </article>
<br/>
<br/>

---
# CSS GRID SYSTEMS 

| Types        | descritpion
| -------------|:-------------:|
|&lt;table&gt; | Once this was the only way to create a grid to layout your HTML. The browser became smarter and included new CSS features and using tables to perform layou was a thing of the past|
| percentage based w/ floats<br>[bootstrap grid](https://v4-alpha.getbootstrap.com/layout/grid/) | This is what is mostly used out in the wild. Bootstrap is a common CSS framework used by many companies and has been the standard for a few years. However, **float** is not meant to be used for layout. |
| [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)  | Here comes Flexbox: Flexbox was created for **layout**. Simpler, maintainable and *build into your browser* <br/>&mp; [Can I use ~ flexbox](http://caniuse.com/#search=flexbox)<br/> &mp;[flex bugs : community tracking](https://github.com/philipwalton/flexbugs)|
| [cssGrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)  | The future is coming where flexbox will be **_obsolete_**. cssGrid is a true css grid currently in the finishing stages of consideration. You can start using cssGrid now, but you have to turn this feature on inside your browser.<br/> &mp; [Can I use ~ cssGrid](http://caniuse.com/#search=css%20grid) <br/>&mp;[grid bugs : community tracking](https://github.com/rachelandrew/gridbugs)|

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
- makes flex items grow to fill available space pr shrink to avoid overflow
- It give flexitems proportional dimensions
- Flex items can be laid out in any direction, ordered according to visual preference (helps with responsive theming)

_Example of using float layouts_

<img src="https://github.com/wesleyduff/OKR-2017/blob/flexbox-grid/src/promise/cssGrid_pres/assets/bootstrap_example.png" alt="code-pen demo bootstrap floats">

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
<br/>
<br/>
---
<br/>
<br/>

# Why?
The only cross-browser reliable tools available for creating CSS layouts were things like *floats*. This style of CSS layouts were using in bulky css frameworks and is now a thing of the past with the use of modern browsers.

<br/>
<br/>
---
