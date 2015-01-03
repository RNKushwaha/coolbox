coolbox
=======

Current version is 1.0.1 released on 3rd Jan, 2015. Initial release was 1.0.0 on 7th October, 2014 at 1:11pm. I want to add following features to coolBox for my daily task which often requires when developing websites and web apps. It takes a lot of time to search, test every plugin, make compatible to use one of them from a tons of plugins, remove jQuery conflicts when using with severals third party plugins and to add new features as client demands. These are below--

<ul>
<li>Easy to use</li>
<li>Customizable</li>
<li>Attractive</li>
<li>Theming with easeness</li>
<li>Opening a part of html page as modal</li>
<li>Opening a url through ajax</li>
<li>Slideshow of images/videos/html elements with title and or description</li>
<li>Play Youtube/vimeo video</li>
<li>Auto open/close, callback functions</li>
<li>CSS-3/HTML5 Animations to open modal window</li>
<li>Integrate social media to modal window's images/videos</li>
</ul>
 
 <h1>Uses</h1>
 <h2>Open on page load:</h2>

```javascript 
	$.coolBox.openCoolBox({
	     id:'pageLoadOpen' //id of anchor element with href attribute to open a div inline
	});
```

 <h2>With Callback function</h2>
 
 ```javascript
$(".inlineOverlayCloseEnabledCallback").coolBox({
   overlayClose: true,
   escClose: true,
   alwaysOnTop: true,
   complete : function(){
      console.log("complete action ");
   },
   beforeStart: function(){
     console.log("before Start");
  },
   onClose: function(){
     console.log("after Complete");
   }
});
 ```
 
 <h2>Responsive Modal</h2>

```javascript
 $(".responsive").coolBox({
     overlayClose: true,
     escClose: true,
     alwaysOnTop: true,
     responsive: true
 });
```