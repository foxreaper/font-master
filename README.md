# font-master

### A JavaScript plugin for text animation(fit.)
font-master.js is awesome JavaScript plugin. It makes font-sizes flexible. Use this plugin on your fluid or responsive layout to achieve scalable headlines, paragraphs, span and everywhere you like it will fit on the width of a parent div.

# Examples

There are not ready yet.

# Usage
Let's start with the basic markup
``` HTML
<div id="master">   
  <div id="example1">some text </div>
    <div class= "example2"><p>some text<p></div>
      <div id="example3"><a href="#">some text</a></div>
  </div>
  ```
 There's only one thing that you need to do. Name your main div as "master" after that wrap your paragraph, span some text with div, you can add class or id to that.
 
 
 # Steps
 ## Step 1
 Ad script tag inside head
 ```
 <script src="font-master.js"></script>
 ```
 ## Step 2
 Wrap your text("p","a" elements) with div.
 ## Step 3
 Wrap your divs with
 ``` 
 <div id="master">
Your divs
</div>
```
## Step 4
Set up width of your divs.
For static efect use %, so font size will be same % for every screen. It will fit perfectly.
For animation effect use px, it will help you to manipulate it easier.

## Step 5

Have fun :D


# Updates will come soon, like:
- multiplay lanes
- overflow 
- examples
