//메인 슬라이드
//var listArray = ["index1","index2","index3"];
//const progress_num = document.querySelector(".progress-number")
var swiper = new Swiper(".main_swiper", {
    slidesPerView: 1,
    loop:true,
    autoplay: { 
        delay:3000, 
    },
    effect: "fade",
    speed : 2000,

    pagination: {
      el: ".swiper-pagination",
      clickable : true,
      //renderBullet: function (index, className) {
      //  return '<div class="swiper-line"><span class="' + className + '">' + '<em>'+ listArray[index]+'</em></span></div>';
      //},
    },
       navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  $(".main_swiper .swiper-pagination").append("<div class='animation start_line'></div");


// 구찌스토리 슬라이드
var swiper = new Swiper(".story_swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      
    },
    640: {
      slidesPerView: 1,
      
    },
  }
});

//인스타그램 슬라이드
  var swiper = new Swiper(".insta_swiper", {
    slidesPerView: 1,
    loop:true,
    speed:1000,
    autoplay: { 
        delay:3000, 
    }
  });



  let offset = $('#header').offset().top - 0.8; 
  $('.scroll_box').click(function(){			
    //선택한 태그의 위치를 반환                
    $('html,body').animate({
      //scrollTop : offset.top
      scrollTop :offset
    }, 1000);		
    
  });	



  $("#header nav ul li a").on("click",function(){
    alert("준비중입니다")
  })



  // $('#header nav ul').on('mouseenter mouseleave',function(aa){
  //   if( $(window).width() > 1024){      //pc(데스크탑) 상태였을때만
  //     if( aa.type == 'mouseenter') {  //마우스를 올려놨을때
  //       $('.sub').stop().slideDown();
  //       //$('.nav_shadow').stop().fadeIn();
  //       $("#header").addClass("show");
  //     } 
  //     else {
  //       $('.sub').stop().slideUp(200,function(){
  //         $('.sub').removeAttr('style');
  //         });
  //         $("#header").removeClass("show");
  //       //$('.nav_shadow').stop().fadeOut(200,function(){ 
  //       //  $(this).removeAttr('style');
  //       //});
  //     }
  //   }
  // });


  
//header scroll fixed
  let wind = $(window),
      header = $("#header"),
      main = $(".main"),
      headerOffset = header.offset().top;

      console.log(headerOffset)

  wind.scroll(function(){
    if($(this).scrollTop() >= headerOffset){
      header.addClass("active");
      $("body").addClass("on");
    } else { 
      header.removeClass("active");
      $("body").removeClass("on");
    }

    if(header.hasClass("active")){
      main.addClass("on");
    } else {
      main.removeClass("on")
    }
  })


  //메뉴바
  let menuBar = $(".menubar");
  let navBtn = $("#header .nav_btn");
  menuBar.click(function(){
    $("#header nav").slideDown(400);  
    $("body").css("overflow","hidden");
  });
  navBtn.click(function(){
    $("#header nav").slideUp(200);  
    $("body").css("overflow","");
  });




  //video popup
  /*
  let embed_lyaer;

  $(".video_img a").click(function(){
    $("#popup").html(embed_lyaer);
    $(".video_pop").addClass("on");
    $("body").css("overflow","hidden");
  });


  $(".close_btn").click(function(){
    embed_lyaer=$('#popup').html(); // popup id에 잇는 html을 embed_lyaer 글로벌 변수에 담아 놓음.

	$('#popup').html(''); //popup id에 html 을 제거 
    $(".video_pop").removeClass("on");
    $("body").css("overflow","");
  });
*/

  let embed = $('#player'); 
  
	$('.button').on('click', function(){ //레이어 열때
		//var path = $(this).attr('href');    
		$('.cont').append(embed);
		$("#layer").show();
		$('.dim').show();
    $("body").css("overflow","hidden");
	})
  
	$('.close').on('click', function(){ //레이어 닫을때
		$(this).parents('#layer').hide();
		$('.dim').hide();
		$('.cont').empty();
    $("body").css("overflow","");
	})
  
  $('.dim').on('click', function(){
    $(this).hide();
    $('#layer').hide();
    $('.cont').empty();
    $("body").css("overflow","");
  })
  
//footer information
  $(".btn_toggle").click(function (){
    $(".foo_detail").toggleClass("on");
   
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
            if ( $('.foo_detail').css('display') === 'none' ) { 
              $('.btn_toggle').removeClass("show"); 
            } else { 
              $('.btn_toggle').addClass("show"); 
            }
    });
    

  
    //마우스 커서
    const border_next = document.querySelector(".swiper-next .cursor-border");
    const border_prev = document.querySelector(".swiper-prev .cursor-border");
    const fill = document.querySelector(".cursor-fill");
    document.addEventListener("mousemove",function(event){
      border_next.style.cssText = fill.style.cssText = "left: " + event.clientX + "px; top: " + event.clientY + "px;";
      border_prev.style.cssText = fill.style.cssText = "left: " + event.clientX + "px; top: " + event.clientY + "px;";
    });
