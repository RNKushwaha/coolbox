coolbox
=======

Current version is 1.0.1 released on 3rd Jan, 2015. Initial release was 1.0.0 on 7th October, 2014 at 1:11pm. I want to add following features to coolBox for my daily task which often requires when developing websites and web apps. It takes a lot of time to search, test every plugin, make compatible to use one of them from a tons of plugins, remove jQuery conflicts when using with severals third party plugins and to add new features as client demands. These are below--

Easy to use
Customizable
Attractive
Theming with easeness
Opening a part of html page as modal
Opening a url through ajax
Slideshow of images/videos/html elements with title and or description
Play Youtube/vimeo video
Auto open/close, callback functions
CSS-3/HTML5 Animations to open modal window
Integrate social media to modal window's images/videos
 Uses
 Open on page load:
$.coolBox.openCoolBox({
     id:'pageLoadOpen' //id of anchor element with href attribute to open a div inline
});
 With Callback function
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
 Responsive Modal
 $(".responsive").coolBox({
     overlayClose: true,
     escClose: true,
     alwaysOnTop: true,
     responsive: true
 });
