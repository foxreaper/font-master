# font-master

### A JavaScript plugin for text animation(fit.)
font-master.js is awesome JavaScript plugin. It makes font-sizes flexible. Use this plugin on your fluid or responsive layout to achieve scalable headlines, paragraphs, span and everywhere you like it will fit on the width of a parent div.

# Examples
### Example 1
https://codepen.io/codereaper/full/PRxOME/
### Example 2
https://codepen.io/codereaper/full/QmYLZj/

# Usage
Let's start with the basic markup
``` HTML
<div id="master">   
  <div id="example1">some text </div>
  <p>Example with paragraph</p>
    <div class= "example2"><p>some text<p></div>
      <div id="example3"><a href="#">some text</a></div>
  </div>
  ```
 There's only one thing that you need to do. Name your main div as "master" after that wrap your text with paragraph, span, div , you can add class or id to that.
 
 
 # Steps
 ## Step 1
 Ad script tag inside head
 ```
 <script src="font-master.js"></script>
 ```
 ## Step 2
 Wrap your text (with div, p, a ...).
 ## Step 3
 Wrap your divs with
 ``` 
 <div id="master">
Your elements
</div>
```
## Step 4
Set up width of your elements.
For static efect use %, so font size will be same % for every screen. It will fit perfectly.
For animation effect use px or %, depends what you really need.

## Step 5

Have fun :D


# Updates will come soon, like:
- multiplay lanes
- overflow 
- examples
