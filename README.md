coolbox
=======
Version **1.0.2** released on 5th jan, 2015. 
Previous version was **1.0.1** released on *3rd Jan, 2015*. Initial release was _1.0.0_ on 7th October, 2014. I want to add following features to [coolBox](http://aryan022.byethost13.com/coolwidgets/coolbox/) for my daily task which often requires when developing websites and web apps. 

It takes a lot of time to search, test every plugin, make compatible to use one of them from a tons of plugins, remove jQuery conflicts when using with severals third party plugins and to add new features as client demands. These are below--

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


 <h2>Usage:</h2>
 
 <h3>Available Options</h3>
 
 ```javascript
  var settings = {
		            escClose        : false,
		            overlayClose    : true,
		            alwaysOnTop     : false,
		            complete        : false,//callback function
		            beforeStart     : false,//callback function
		            onClose         : false,//callback function
		            height          : "auto",
		            width           : "auto",
		            border          : "2px",
		            borderColor     : "black",
		            background      : "#333",
		            opacity         : "0.8",
		            zindex          : "99991"
		};
 ```
 
 <h3>Open on page load:</h3>

```javascript 
	$.coolBox.openCoolBox({
	     id:'pageLoadOpen' //id of anchor element with href attribute to open a div inline
	});
```

 <h3>With Callback function</h3>
 
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
 
 <h3>Responsive Modal</h3>

```javascript
 $(".responsive").coolBox({
     overlayClose: true,
     escClose: true,
     alwaysOnTop: true,
     responsive: true
 });
```
<h2>What's new in Version 1.0.2</h2>
 
 <h3>Pass HTML string directly to coolBox to load in modal:</h3>

```javascript 
	var str='<h1>Hi</h1><p color="red">This is html for opening in a modal box. Looking Great?</p>Thanks to coolBox!';
	$(".htmlContent").coolBox({
	    overlayClose: true,
	    escClose: true,
	    alwaysOnTop: true,
	    html: { content : str}
	});
```

 <h3>Load an URL directly to coolBox modal:</h3>

```javascript 
    $(".remoteSource").coolBox({
        overlayClose: true,
        escClose: true,
        alwaysOnTop: true,
        loadUrl: "remoteSource.html"
    });
```
