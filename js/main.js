(function($, window, document, undefined){
	$(function(){
		$('.fancybox').fancybox();

		$(".fancybox-media").
			attr("rel","media-gallery")
			.fancybox({
				padding : 0,

				openEffect : 'none',
				closeEffect : 'none',
				prevEffect : 'none',
				nextEffect : 'none',

				arrows : false,
				helpers : {
					media : {},
					buttons : {}
				}
			});
	});

	function scrollWidth(){
	    var div = $('<div>').css({
	        position: "absolute",
	        top: "0px",
	        left: "0px",
	        width: "100px",
	        height: "100px",
	        visibility: "hidden",
	        overflow: "scroll"
	    });		    
	    $('body').eq(0).append(div);		    
	    var width = div.get(0).offsetWidth - div.get(0).clientWidth;	    
	    div.remove();
	    
	    return width;
	}

	function DropDownMenu(parent,child){
		var interval_menu= new Object();
		// таймаут бы еще передавать
		function setVisibility(obj, visible){
		if(visible == true){
			obj.show();
		}else
			obj.hide();
		}

		function ClearTimeOut(obj){
			for(var cur in obj){
				clearTimeout(obj[cur]);
			}
		}

		parent.on("mouseover mouseout",function(event){
			if(event.type == "mouseover"){
				setVisibility(child.eq(0),true);
				ClearTimeOut(interval_menu);
			}
			if(event.type == "mouseout"){
				interval_menu[this] = setTimeout(function(){
					setVisibility(child.eq(0),false)
															},
															10);

			}
		});

		child.on("mouseover mouseout",function(event){
			if(event.type == "mouseover"){
				setVisibility($(this),true);
				ClearTimeOut(interval_menu);
			}
			if(event.type == "mouseout"){
				interval_menu[this] = setTimeout(function(){
					setVisibility(child.eq(0),false)
															},
															200);
				event.stopPropagation();
			}
		});
	}

	var colMenu2=$("#col-menu-2");
	DropDownMenu(colMenu2,colMenu2.children(".children"));
	DropDownMenu($("#col-menu-1"),$("#col-menu-1").children(".children"));
	DropDownMenu($("#col-menu-3"),$("#col-menu-3").children(".children"));
	DropDownMenu($("#col-menu-4"),$("#col-menu-4").children(".children"));
	DropDownMenu($("#col-menu-5"),$("#col-menu-5").children(".children"));
	DropDownMenu($("#col-menu-6"),$("#col-menu-6").children(".children"));	

	/************выпадающее меню конец**************/

	/*********************** Работа с панелью языка**************************/

	$("#col-menu-6 ul a").each(function(){
		var obj=$(this);
		obj.on("click",function(){
			var str="<i class=\"fa fa-empire\" aria-hidden=\"true\"></i>"
			var txt=obj.text();
			$("#col-menu-6").children("a").html(str+txt);
		});
	});

	/*********************** Работа с панелью языка конец *******************/

	/*********************** Работа с формой  header ul.navbar-add li *******************/

	$("header ul.navbar-add li").eq(0).on("click",function(){
		if($("header .navbar-nav").eq(0).css("display") == "none"){
			$("header .navbar-nav").eq(0).show();
			$("header .head-search-box").hide();
		}
		else{
			$("header .navbar-nav").eq(0).hide();
			$("header .head-search-box").show();
		}
	});
	/*********************** Работа с формой конец *******************/

	// работа с изображением в выпадающем меню

	var divImg=$(".child-img"); //  вся выборка объектов с картинками
	var divImgWidth="80%";
	var divImgHeight="30%";
	divImg.children('img').prop("src","image/phantom_comparison.jpg").css({"width":divImgWidth, "height" : divImgHeight});

	//действие для ссылочки
	var child_content_a=$("#col-menu-1 .child-cont a");
	var child_img=divImg.children("img");

	function changeImage(object,src,srcDefault,width,height){
		object.on("mousemove mouseleave",function(event){
			if(event.type == "mousemove"){
				child_img.prop("src",src)
									.css({"width":width, "height" : height});	
				event.stopPropagation();
			}else{
				child_img.prop("src",srcDefault)
									.css({"width":width, "height" : height});
				event.stopPropagation();
			}
		});
	}
	changeImage(child_content_a.eq(0),"/image/mavic1.png","/image/mavic1.png",divImgWidth, divImgHeight);
	changeImage(child_content_a.eq(1),"/image/phantom4.png","/image/mavic1.png",divImgWidth, divImgHeight);
	changeImage(child_content_a.eq(2),"/image/phantom3.jpg","/image/mavic1.png",divImgWidth, divImgHeight);
	changeImage(child_content_a.eq(3),"/image/phantom_comparison.jpg","/image/mavic1.png",divImgWidth, divImgHeight);
	changeImage(child_content_a.eq(4),"/image/Inspire_1.png","/image/mavic1.png",divImgWidth, divImgHeight);
	changeImage(child_content_a.eq(5),"/image/zenmus.jpg","/image/mavic1.png",divImgWidth, divImgHeight);

	var child_content_a_2=$("#col-menu-2 .child-cont a");
	changeImage(child_content_a_2.eq(0),"//www5.djicdn.com/uploads/nav_link/cover/16/size_1000_540_ad246059868a2ca803b064dec2f88f7a.png","//www5.djicdn.com/uploads/nav_link/cover/16/size_1000_540_ad246059868a2ca803b064dec2f88f7a.png",divImgWidth,divImgHeight);
	changeImage(child_content_a_2.eq(1),"//www5.djicdn.com/uploads/nav_link/cover/17/size_1000_540_62d64ff6fd8c5a011bf8e91fb264ee5c.png","//www5.djicdn.com/uploads/nav_link/cover/16/size_1000_540_ad246059868a2ca803b064dec2f88f7a.png",divImgWidth,divImgHeight);
	changeImage(child_content_a_2.eq(2),"//www5.djicdn.com/uploads/nav_link/cover/25/size_1000_540_14b07ff43a4895352172f104274d1a49.png","//www5.djicdn.com/uploads/nav_link/cover/16/size_1000_540_ad246059868a2ca803b064dec2f88f7a.png",divImgWidth,divImgHeight);
	changeImage(child_content_a_2.eq(3),"//www5.djicdn.com/uploads/nav_link/cover/26/size_1000_540_93f794712cd7ded31b3bafb2d7c5135f.png","//www5.djicdn.com/uploads/nav_link/cover/16/size_1000_540_ad246059868a2ca803b064dec2f88f7a.png",divImgWidth,divImgHeight)
	changeImage(child_content_a_2.eq(4),"//www1.djicdn.com/uploads/nav_link/cover/28/size_1000_540_51220e283dbcab2c5ae5bbcc4dee5c90.png","//www5.djicdn.com/uploads/nav_link/cover/16/size_1000_540_ad246059868a2ca803b064dec2f88f7a.png",divImgWidth,divImgHeight);
	changeImage(child_content_a_2.eq(5),"//www2.djicdn.com/uploads/nav_link/cover/102/size_1000_540_0266b87252ba1f3ea5fa59ceb8bb4480.png","//www5.djicdn.com/uploads/nav_link/cover/16/size_1000_540_ad246059868a2ca803b064dec2f88f7a.png",divImgWidth,divImgHeight);
	/************************************/ 
 

	// слайдер с видео swiper

	var mySwiper = new Swiper ('.swiper-cont', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
        
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    });


	//выпадающая менюшка снизу
	$(".swiper-cont").css({"visibility":"hidden"});
	$(".swiper-cont img").css({width:"15%"});
	var speed=400;
	$(".video-btn-box").on("click",function(){
		//$(".swiper-cont").slideToggle(speed); без адаптивности
		if($(".swiper-cont").eq(0).css("visibility") == "hidden"){
			$(".swiper-cont").animate({"bottom":"+=190"},speed).css({"visibility":"visible"});
		}
		else{
			$(".swiper-cont").animate({"bottom":"-=190"},speed);
			setTimeout(function(){
				$(".swiper-cont").css({"visibility":"hidden"});
			},speed);
		}
	});

	var count=2;
	$(".video-btn-box").on("click",function(){
		if(count %2 ==1){
			$(this).animate({
				"bottom" : "-=210"				
			},
			{
				"duration" : speed
			}).children("i")
				.removeClass("fa-angle-double-down")
				.addClass("fa-angle-double-up");	
		}
		if (count % 2 == 0) 
			$(this).animate({
				"bottom" : "+=210"
			},{
				"duration" : speed
			}).children("i")
			   .removeClass("fa-angle-double-up")
			   .addClass("fa-angle-double-down");
		count++;
	});

	//выпадающая менюшка снизу конец

	/*************** sticky ****************************/ 
	$(function(){

	$('.sticky').Stickyfill();		

	$("#toTop").click(function(e){
		e.preventDefault();
		$("html,body").stop().animate({scrollTop:0},300,'swing');
	});

	
	});
	
	
	$("#toTopHover").hide();

	$(window).scroll(function(){
		var height=$("header").height() + $(".wrapper-1").height() + $(".sticky-wrapper").height();
		if(window.pageYOffset > height)
			$("#toTopHover").show();
		if(window.pageYOffset < height)
			$("#toTopHover").hide();
	});

	/*************** sticky ****************************/ 


	// блок 3
	var mySwiper_2Class=".swiper-cont1";
	var mySwiper_2 = new Swiper (mySwiper_2Class, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
	
	simulateTouch: false,//для того чтобы курсором нельзя было двигать слайды     
    
    scrollbar: '.swiper-scrollbar'
  });
	$(".swiper-cont1").on("click",function(e){
		e.preventDefault();
	});
	//mySwiper_2.lockSwipes () 


	function changeBackgroungImage(obj,srcImage){
		obj.css("background-image","url("+srcImage+")");
	}

	function changeSlideOnMove(obj,indexSlide){
		//indexofQuery - number element on query
		//indexSlide -number sslide
		obj.on("mousemove",function(){
			mySwiper_2.slideTo(indexSlide);
			$(this).addClass("active").siblings().removeClass("active");						
		});
	}

	var myprogress = $(".wrapper-2 .myprogress a");

	changeSlideOnMove(myprogress.eq(0),1);
	changeSlideOnMove(myprogress.eq(1),2);
	changeSlideOnMove(myprogress.eq(2),3);
	changeSlideOnMove(myprogress.eq(3),4);
	changeSlideOnMove(myprogress.eq(4),5);

	var wr2Swiper_slide=$(".wrapper-2 .swiper-slide");

	changeBackgroungImage(wr2Swiper_slide.eq(0),"/image/slider_2-1.jpg");
	changeBackgroungImage(wr2Swiper_slide.eq(1),"/image/slider_2-2.jpg");
	changeBackgroungImage(wr2Swiper_slide.eq(2),"/image/slider_2-3.jpg");
	changeBackgroungImage(wr2Swiper_slide.eq(3),"/image/slider_2-4.jpg");
	changeBackgroungImage(wr2Swiper_slide.eq(4),"/image/slider_2-5.jpg");
	changeBackgroungImage(wr2Swiper_slide.eq(5),"/image/slider_2-1.jpg");


	
	var cntnt_box=$(".content-box");
	cntnt_box.css("opacity","0	");
	
	function ScrollHideAndShow(object,topAddHeight,botMinusHeight){
		// topAddHeight будет появляться раньше на опр кол-во пикселей
		topAddHeight=parseFloat(topAddHeight);
		botMinusHeight=parseFloat(botMinusHeight);
		var position=object.offset();
		object.scrollspy({
			min: position.top-topAddHeight,
			max:position.top + object.height() - botMinusHeight,
			onEnter:function(){
				object.animate({
					"margin-top":"-=30",
					"opacity":"+=0.9"
				});
			},
			onLeave:function(){
				object.animate({	
					"margin-top":"+=30",
					"opacity":"-=0.9"
				});
			}
		});
	}
	ScrollHideAndShow(cntnt_box.eq(0),710,100);
	ScrollHideAndShow(cntnt_box.eq(1),710,100);

	cntnt_box.each(function(){
		var obj=$(this);
		mySwiper_2.on("slideChangeStart",function(e){
			console.log("Swiper event");
			var marginTop=obj.css("margin-top");
			// obj.css({			
			// 			"margin-top":"+=30",
			// 			"opacity":0
			// });
			obj.css({			
						"margin-top":250,
						"opacity":0
			}).animate({
						"margin-top":220,
						"opacity":"+=0.8"
			});
		});
	});
	

	/****************************************************************/ 
	/*************************wrapper-3******************************/ 
	/****************************************************************/ 
	var AllASwitchtab=$(".wrapper-3 .switch-tab ul li ");
	AllASwitchtab.each(function(){
		var obj=$(this);
		obj.on("click.style",function(){
			obj.children("a").addClass("wrapper-3-active");
			obj.siblings().children("a").removeClass("wrapper-3-active");
		});
	});	
	AllASwitchtab.children("a").eq(0).addClass("wrapper-3-active");
	//при нажатие появляются разные блоки

	$(".wr-3-cover-box").css({
		"opacity" : 1
	});
	$(".wr-3-cover-box .describe").css({
		"width" : 440,
		"padding": "100px 60px 75px"
	});
	$(".wr-3-cover-box .describe h3").css({
		"text-transform": "uppercase",
		"font-size": 20,
		"font-weight": 500,
		"line-height": "25px"
	});
	$(".wr-3-cover-box .describe .content").css({
		"height": 206,
		"color" : "#707173",
		"font-size": 14
	});
	$(".fancybox-wr3").fancybox({
		//maxWidth	: 800,
		maxHeight	: 520,
		//fitToView	: false,
		padding     : 0,
		width		: 1200,
		height		: 520,
		autoSize	: false,
		autoResize  : false,// как открылось так и осталось 
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		overflow    : 'visible'
	});
	$(".fancybox-close1").on("click",function(){
		$.fancybox.close();
	}).css({
		"cursor":"pointer",
		"color":"#00b5e2"
	});

	$(".wrapper-3 .feature-box a").each(function(){
		var obj=$(this);
		var wr3CoverBox=$(".wr-3-cover-box")
		obj.on("click",function(){
			wr3CoverBox.children("img").css({
											 "width":760,
											 "height":520
										})
										.attr('src',obj.data('src'));
			wr3CoverBox.find("h3").text(obj.data('title'));
			wr3CoverBox.find('p.content').text(obj.data('content'));
		});
	});
	// переключение блоков по нажатию
	function changeBlockOnClick(obj,block){
		obj.on("click",function(){
			block.show().animate({opacity:1},300).siblings().animate({opacity:0},300).hide();
		});
	}

	var Handlers=$(".wrapper-3 .switch-tab a");
	var blocks=$(".wrapper-3 .feature-box");
	blocks.not(":first").each(function(){
		$(this).css({"opacity":"0"});
	});
	for(var i=0 ; i<5 ; i++)
		changeBlockOnClick(Handlers.eq(i),blocks.eq(i));


	$(".wrapper-3 .buy-link").hover(function(){
			$(this).animate({
					"color": "#44a8f2",
					"background-color": "#fff"
			},400);
		},function(){
			$(this).animate({
					"color": "#fff",
					"background-color": "#44a8f2"
			},400);
		}			
	);

	/****************************************************************/ 
	/*************************wrapper-3 end***************************/ 
	/****************************************************************/ 
})(jQuery, window, document);