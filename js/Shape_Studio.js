;(function(window,document,$,undefined){

     var Shape = {
        init:       function(){
            var that = this;

                that.section0Fn();
                that.headerFn();
                that.section01Fn();
                that.section02Fn();
                that.footerFn();

        },
        section0Fn: function(){

            $(window).on('load', function(){
                setInterval(function(){
                    $('#section0').fadeOut(350);
                    $('#wrap').addClass('active');
                }, 2000);

            });

        },
        headerFn:   function(){
            var window_ = $(window);
            var smoothBtn = $('.smooth-btn'); 
            var htmlBody = $('html,body');
            var mobileMenu = $('#header .mobile-menu');
            var mobileBtn = $('#header .mobile-btn');
            var header = $('#header');
            
            var winW = $(window).width();
            var url = null;  
            var t=0;  

                //스무스 스크롤링
                smoothBtn.on({
                    click:  function(event){
                        var that = $(this);

                        event.preventDefault();
                        url = that.attr('href');
                        htmlBody.stop().animate({scrollTop: $( url ).offset().top  }, 600);
                        t=0; 
                        mobileMenu.stop().animate({right:-100+'%'},0); 

                        mobileBtn.removeClass('addClose');                        
                    }
                });

                window_.scroll(function(){
                    if( window_.scrollTop() >= 30 ) {
                        header.addClass('addMobile');
                    }
                    else{
                        header.removeClass('addMobile');
                    }
                });


                window_.resize(function(){
                    winW = window_.width();                    
                    if( winW>990 ){
                        t=0;
                        mobileBtn.removeClass('addClose');
                        mobileMenu.stop().animate({right:-100+'%'},400);
                    }
                });

                //모바일버튼
                mobileBtn.on({
                    click:  function(event){
                        var that = $(this);

                        event.preventDefault();

                        that.toggleClass('addClose');
                        if(t==0){
                            t=1;
                            mobileMenu.stop().animate({right:0},400);
                        }
                        else{
                            t=0;
                            mobileMenu.stop().animate({right:-100+'%'},400);
                        }
                    }
                });





        //mousewheel 스크롤 다운 = 헤더없어짐 / 스크롤 업 = 헤더 검정배경으로 생김
            $("html,body").on("mousewheel DOMMouseScroll", function(event){
                event.preventDefault();
                if(event.detail){ 
                    _delta = event.detail*(-1*40);   
                }
                else{
                    _delta = event.originalEvent.wheelDelta;
                }
                if(_delta<0){
                    $("#header").stop().css({top:-100});
                }
                else{
                    $("#header").stop().css({top:0});
                    
                }
            })
    
            $(window).scroll(function(){
                if( $(this).scrollTop() > $("#header").innerHeight() ){
                    $("#header").addClass("addMousewheel");
                }
                else{
                    $("#header").removeClass("addMousewheel");
                }
            });

        },
        section01Fn: function(){
            var winW = 0;
            var winH = 0;
            var vidW = 0;
            var vidH = 0;
            var marT = 0;
            var marL = 0;
            var setId = 0;    

            
            // 마우스(cursor)이벤트
            var cursor = document.querySelector('.cursor');
            document.addEventListener('mousemove', function(e){
                cursor.style.cssText = 'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;'; 
            });

            //비디오 반응형 함수
    

             setInterval(resizefn,100);
             
             function resizefn(){
             winW = $(window).Width();
             winH = $(window).Height();
             vidW = $('.video-wrap').innerWidth();
             vidH = $('.video-wrap').innerHeight();
             marT = (winH-vidH)/2;
             marL = (winW-vidW)/2;
             $('.video-wrap').css({ height: winH });
             //창너비가 비디오너비보다 크면 : 비디오너비를 창너비로 설정 높이를 'auto'          

             if( winW > vidW ){
             $('.video-wrap').css({ width: winW, height: 'auto' });
             }
             //창높이가 비디오높이보다 크면 : 비디오높이를 창높이로 설정 너비는 'auto'
             if( winH > vidH ){
             $('.video-wrap').css({ width: 'auto', height: vidH });
             }
             $('.video-wrap').css({ marginTop: marT, marginLeft: marL });
             }
             //BOM
             $(window).resize(function(){
             clearTimeout(setId);
             setId = setTimeout(resizefn,10);
             });


            
        },
        section02Fn: function(){

          $("#section02 .link1").mouseover(function(){
            $(".menu-item1 .s2slide1").hide();
            $(".menu-item1 .s2slide1").show();
           });
          
/*            $("#section02 .menu-item1").mouseleave(function(){
             $(".menu-item1 .s2slide1").show();
             $(".menu-item1 h2").hide();
           }); */
          $("#section02 .link2").mouseover(function(){
            // $(".menu-item2 .s2slide2").hide();
            $(".menu-item2 .s2slide2").show();
           });
          
           $("#section02 .menu-item2").mouseleave(function(){
             $(".menu-item2 .s2slide2").show();
             $(".menu-item2 h2").hide();
           });
          
      
        },
     
        footerFn: function(){

        }

    };

    Shape.init(); 


})(window,document,jQuery);