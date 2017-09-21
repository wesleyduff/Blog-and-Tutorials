# CSS GRID SYSTEMS 
---

| Types        | descritpion
| -------------|:-------------:|
|&lt;table&gt; | Once this was the only way to create a grid to layout your HTML. The browser became smarter and included new CSS features and using tables to perform layou was a thing of the past|
| percentage based w/ floats<br>[bootstrap grid](https://v4-alpha.getbootstrap.com/layout/grid/) | This is what is mostly used out in the wild. Bootstrap is a common CSS framework used by many companies and has been the standard for a few years. However, **float** is not meant to be used for layout. |
| [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)  | Here comes Flexbox: Flexbox was created for **layout**. Simpler, maintainable and *build into your browser* <br/>&mp; [Can I use ~ flexbox](http://caniuse.com/#search=flexbox)<br/> &mp;[flex bugs : community tracking](https://github.com/philipwalton/flexbugs)|
| [cssGrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)  | The future is coming where flexbox will be **_obsolete_**. cssGrid is a true css grid currently in the finishing stages of consideration. You can start using cssGrid now, but you have to turn this feature on inside your browser.<br/> &mp; [Can I use ~ cssGrid](http://caniuse.com/#search=css%20grid) <br/>&mp;[grid bugs : community tracking](https://github.com/rachelandrew/gridbugs)