/* 
 * @author RN Kushwaha <RN.kushwaha022@gmail.com>
 * Licenced Copyright coolFactory.com
 * url http://www.a2znotes.blogspot.com
 * last updated 3rd jan, 2015 
 */
;
(function ($, window) {
    $.coolBox = function (options) {}
    
    $.coolBox.closeCoolBox = function (options) {
        if (typeof options.beforeClose == 'function') {
        	options.beforeClose.call(this);
        }
        $("#clBoxOverlay,#clBoxOuterWrapper").remove();
        if (typeof options.onClose == 'function') {
        	options.onClose.call(this);
        }
    };

    $.coolBox.openCoolBox = function (options) {
        console.log("closeCoolBox opens");
        $("#"+options.id).trigger("click");
    };
    
    $.fn.coolBox = function (options) {
        var settings = {
		            escClose        : false,
		            overlayClose    : true,
		            alwaysOnTop     : false
		            complete        : false,
		            beforeStart     : false,
		            onClose         : false,
		            height          : "auto",
		            width           : "auto",
		            border          : "2px",
		            borderColor     : "black",
		            background      : "#333",
		            opacity         : "0.8",
		            zindex          : "99991",
		};

        var o = {};
        $.extend(o, settings, options);
        
        return this.each(function () {

            var link = $(this);

            link.click(function (event) {
                if (typeof o.beforeStart == 'function') {
                    o.beforeStart.call(this);
                }
                var clBox = document.createElement('div');
                clBox.setAttribute("id", "clBoxWrapper");
                document.body.appendChild(clBox);

                $clBoxWrapper = $("#clBoxWrapper");
                $clBoxWrapper.wrap($("<div id='clBoxOuterWrapper'></div>"));
                oBox = document.getElementById("clBoxOuterWrapper");
                oBox.style.width = o.width;
                oBox.style.height = o.height;
                $clBoxWrapper.css({"max-height":o.height,"max-width":o.width});
                
				clBoxBtn=document.createElement("div");
				clBoxBtn.setAttribute("id","clBxClose");
				$("#clBoxOuterWrapper").prepend(clBoxBtn);
                
                oBox.style.zIndex = o.zindex + 1;
                var olBox = document.createElement('div');
                olBox.setAttribute("id", "clBoxOverlay");
                olBox.style.width = "100%";
                olBox.style.height = "100%";
                olBox.style.position = "fixed";
                olBox.style.zIndex = o.zindex;
                olBox.style.opacity = o.opacity;
                olBox.style.backgroundColor = o.background;
                olBox.style.top = "0px";
                olBox.style.left = "0px";

                document.body.appendChild(olBox);

                $wrapContent = link.attr("href");
                
                if ($wrapContent.indexOf("#") == 0) {//load inline html on the page
                    $wrapContainer = $($wrapContent).html();
                    
                    $oBoxWrapper = $("#clBoxOuterWrapper");
                    $clBoxOverlay = $("#clBoxOverlay");
                    $clBoxOverlay.css({
                        "height": $(document).innerHeight(),
                        "width": $(document).innerWidth(),
                    });

                    $clBoxWrapper.html($wrapContainer);
                    
                    if( $(window).height() - $oBoxWrapper.innerHeight()<0){
						var tp= $(document).scrollTop()+20;
					} else if( $(document).scrollTop()+($(window).height() - $oBoxWrapper.innerHeight()) / 2 >0){
						var tp= $(document).scrollTop()+($(window).height() - $oBoxWrapper.innerHeight()) / 2;
					} else tp= $(document).scrollTop()+20;
					
                    $oBoxWrapper.css({
			        	"left": ($(window).width() - $oBoxWrapper.innerWidth()) / 2,
			        	"top": tp
			        });
                }
                	
                function resizeClBox(){
					if(o.responsive==true){
						var mxHeight= mxWidth= "auto";
						var wH= parseFloat($(window).height()) || 0;
						var wW= parseFloat($(window).width()) || 0;
						
						if(o.height=="auto"){
							mxHeight=wH-50;
						}else{
							oHeight = parseFloat(o.height.substring(0,o.height.length-2)) || 0;
							if( wH < oHeight ) mxHeight=wH-50; else mxHeight=oHeight;
						}
						if(o.width=="auto"){
							 mxWidth=wW-50;
						}else{
							oWidth = parseFloat(o.width.substring(0,o.width.length-2)) || 0;	
							if( wW < oWidth ) mxWidth=wW-50; else mxWidth=oWidth;
						}
						
				        $clBoxWrapper.css({
							"max-height": mxHeight, "max-width": mxWidth
				        })
				        $oBoxWrapper.css({
							"max-height": mxHeight, "max-width": mxWidth
				        })
					     if(o.alwaysOnTop==true){   
					        $oBoxWrapper.css({
					        	"left": ($(window).width() - $oBoxWrapper.innerWidth()) / 2,
					        	"top": $(document).scrollTop()+($(window).height() - $oBoxWrapper.innerHeight()) / 2//$(document).scrollTop()+20
					        });
					     }
			         } 
				}
				
				function closeClBox(){
					console.log("closeCoolBox closes");
                    $("#clBoxOverlay,#clBoxOuterWrapper").fadeOut(300, function () {
                        $("#clBoxOverlay,#clBoxOuterWrapper").remove();
                    });
                    if (typeof o.onClose == 'function') {
                        o.onClose.call(this);
                    }
				}
				
				resizeClBox();
				
                $(window).bind('resize', function(){
			       	 resizeClBox();
			    	 $clBoxOverlay.css({
                        "height": $(document).innerHeight(),
                        "width": $(document).innerWidth(),
                    });
                });
              
		    	$(window).bind('scroll', function(){
					if(o.alwaysOnTop==true){
						console.log("scroll binds here");
			        	$oBoxWrapper.css({
				        	"top": $(document).scrollTop()+($(window).height() - $oBoxWrapper.innerHeight()) / 2
				        });
			        }
		    	});
				
                if (typeof o.complete == 'function') {
                    o.complete.call(this); 
                }
                if (o.overlayClose == true) {
                    $("#clBoxOverlay").on("click", function (e) {
                        closeClBox();
                    })
                }
                
                $("#clBxClose,.clBxClose").on('click', function (e) {
                    closeClBox();
                })
                
                $(document).keyup(function (e) {
					if (e.keyCode == 27 && o.escClose == true) {
						closeClBox();
                    }
                });
                event.preventDefault();
            });

        });
    }
})(jQuery, window)
