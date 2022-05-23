import { gsap } from "gsap";
import lottie from "lottie-web";
import VimeoPlayer from '@vimeo/player';
import {DrawSVGPlugin} from "../../libs/gsap-shockingly-green/src/DrawSVGPlugin";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

export default function () {

  console.log("home page");

  let $body = $('body'),
  $indexSection = $body.find(".index"),
  $indexSectionTitle = $indexSection.find(".item-title--title--js"),
  $cursorBlock = $body.find(".cursor-dot"),
  $aboutSection = $body.find('.about'),
  $aboutSectionBlock = $aboutSection.find('.parallax-img-block--js'),
  $aboutSectionImg = $aboutSectionBlock.find('img'),
  $portfolioSection = $body.find('.portfolio'),
  aboutSectionImgTrigger="top center",
  $portfolioSectionblock = $portfolioSection.find('.parallax-img-block--js'),
  $portfolioSectionImg = $portfolioSectionblock.find('img')
  ;

  function homeIndexFunc() {
    // console.log('index');
    const handBirdAnim = lottie.loadAnimation({
      container: document.getElementById('hand_bird'),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: nozomiData.rootUrl + "/assets/lottie/hand_bird.json"
    });

    let indexSectionGsap =  gsap.timeline({
      paused: true,
    })
        .from($indexSectionTitle, 1, {  autoAlpha: 0, ease:"power2.easeOut" },'+=1.5')
        .from($indexSectionTitle, 1, { yPercent: 50, ease:"power2.easeOut" },'<')
        .from('.item-img-item', 1, {  autoAlpha: 0, 
          onComplete: () => {
            handBirdAnim.setSpeed(1.8);
            handBirdAnim.play();
          } 
      },'-=2')
    ;
    setTimeout(function(){
      indexSectionGsap.play();
    }, 1);

    const svg = document.querySelector("#demo");
    const tl = gsap.timeline();
    let pt = svg.createSVGPoint();
    const ratio = 0.5625;   
    
    tl.to("#masker", {duration: 2, attr:{r:2400}, ease:"power2.in"});
    tl.reversed(true);
    
    function mouseHandlerIndex() {
      tl.reversed(!tl.reversed());
    }
    
    function getPointIndex(evt){
      pt.x = evt.clientX; 
      pt.y = evt.clientY;
      return pt.matrixTransform(svg.getScreenCTM().inverse());
    }
    
    function mouseMoveIndex(evt) {
      let newPoint = getPointIndex(evt);
      gsap.to("#masker", 0.88, {attr:{cx:newPoint.x, cy:newPoint.y}, ease:"power2.out"});
     }   

    
    function newSizeIndex() {
      let w = window.innerWidth ;
      let h = window.innerHeight;
      if (w > h * (16/9) ) {
        gsap.set("#demo", { attr: { width: w, height: w * ratio } });
      } else {
        gsap.set("#demo", { attr: { width: h / ratio, height: h } });
      }
      let data = svg.getBoundingClientRect();
      gsap.set("#demo", {x:w/2 - data.width/2});
      gsap.set("#demo", {y:h/2 - data.height/2});
    }
    
    window.addEventListener("mousedown", mouseHandlerIndex);
    window.addEventListener("mouseup", mouseHandlerIndex);
    window.addEventListener("mousemove", mouseMoveIndex);
    
    newSizeIndex();
    window.addEventListener("resize", newSizeIndex);
  }
  homeIndexFunc();

  // let $aboutSection = $body.find('.about'),
  // $aboutSectionBlock = $aboutSection.find('.parallax-img-block--js'),
  // $aboutSectionImg = $aboutSectionBlock.find('img'),
  // $portfolioSection = $body.find('.portfolio'),
  // aboutSectionImgTrigger="top center",
  // $portfolioSectionblock = $portfolioSection.find('.parallax-img-block--js'),
  // $portfolioSectionImg = $portfolioSectionblock.find('img'),
  // $parallaxBlock = $body.find('.parallax-img-block--js')
  // ;


  function portfolioScaleFunc() {
      ScrollTrigger.create({
        trigger: $portfolioSectionImg ,
        onEnter: () => {
          gsap.to($portfolioSectionImg, {
            autoAlpha: 1,
            duration: 1,
          });
          gsap.to($portfolioSectionImg, 2, {scale: 1, ease: "Power4.easeOut"},'<');
        },
        start: "top 80%",
        end: "bottom top",
        pin: false,
        scrub: false,
        toggleActions: "play none none none",
        markers: false
      });
    ScrollTrigger.create({
      trigger: $portfolioSectionblock,
      animation: 
      gsap
          .timeline()
          .fromTo(
            $portfolioSectionblock,
              { scale: 1.2, duration: 2 },
              { scale: 1, duration: 2 }
          ),
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      toggleActions: "play reverse none reverse",
      markers: false
    });
  }

  portfolioScaleFunc();

  function aboutScaleFunc() {
    if (screen.width > 1024) {
      aboutSectionImgTrigger="top center";
    }
    else{
      aboutSectionImgTrigger="top 80%";
    }
    ScrollTrigger.create({
      trigger: $aboutSectionImg ,
      onEnter: () => {
        gsap.to($aboutSectionImg, {
          autoAlpha: 1,
          duration: 1,
        });
        gsap.to($aboutSectionImg, 2, {scale: 1, ease: "Power4.easeOut"},'<');
      },
      start: aboutSectionImgTrigger,
      end: "bottom top",
      pin: false,
      scrub: false,
      toggleActions: "play none none none",
      markers: false
    });
    ScrollTrigger.create({
      trigger: $aboutSectionBlock,
      animation: 
      gsap
          .timeline()
          .fromTo(
            $aboutSectionBlock,
              { yPercent: -5,scale: 1.2, duration: 2 },
              { yPercent: 5,scale: 1, duration: 2 }
          ),
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      toggleActions: "play reverse none reverse",
      markers: false
    });
  }
  aboutScaleFunc();


  function homePerspectiveFunc() {
    console.log('perspective');
    const svg = document.querySelector("#demoPerspective");
    const tlPer = gsap.timeline();
    let ptPerspective = svg.createSVGPoint();
    const ratioPerspective = 0.5625;
   
    tlPer.to("#maskerPerspective", {duration: 2, attr:{r:2400}, ease:"power2.in"});
    tlPer.reversed(true);
    
    function mouseHandlerPerspective() {
      // tlPer.reversed(!tlPer.reversed());
    }
    
    function getPointPerspective(evt){
      ptPerspective.x = evt.clientX; 
      ptPerspective.y = evt.clientY;
      return ptPerspective.matrixTransform(svg.getScreenCTM().inverse());
    }
    
    function mouseMovePerspective(evt) {
      let newPointPerspective = getPointPerspective(evt);
      gsap.to("#maskerPerspective", 0.88, {attr:{cx:newPointPerspective.x, cy:newPointPerspective.y}, ease:"power2.out"});
     }
    

    
    function newSizePerspective() {
      let wPerspective = window.innerWidth ;
      let hPerspective = window.innerHeight;
      if (wPerspective > hPerspective * (16/9) ) {
        gsap.set("#demoPerspective", { attr: { width: wPerspective, height: wPerspective * ratioPerspective } });
      } else {
        gsap.set("#demoPerspective", { attr: { width: hPerspective / ratioPerspective, height: hPerspective } });
      }
      let dataPerspective = svg.getBoundingClientRect();
      gsap.set("#demoPerspective", {x:wPerspective/2 - dataPerspective.width/2});
      gsap.set("#demoPerspective", {y:hPerspective/2 - dataPerspective.height/2});
    }
    
    window.addEventListener("mousedown", mouseHandlerPerspective);
    window.addEventListener("mouseup", mouseHandlerPerspective);
    window.addEventListener("mousemove", mouseMovePerspective);
    
    newSizePerspective();
    window.addEventListener("resize", newSizePerspective);
  }
  homePerspectiveFunc();



  function controlVideos() {
        let $videoIdLittleBg = $body.find('.video-little-bg--js');
        // let $videoIdLittleLayout = $('.video-little--layout--js');
        let videoIdLittleBgGsap =  gsap.timeline({
          paused: true,
        })
            .to($videoIdLittleBg, 0.5, {  opacity: 0, ease:"expo.easeInOut" },'')
            // .to($videoIdLittleLayout, 0.5, {  opacity: 0, ease:"expo.easeInOut" },'')
        ;
        let $videoIdBigBg = $body.find('.video-big-bg--js');
        let $videoIdBigLayout = $body.find('.video-big--layout--js');
        let videoIdBigBgGsap =  gsap.timeline({
          paused: true,
        })
            .to($videoIdBigBg, 0.5, {  opacity: 0, ease:"expo.easeInOut" },'')
            // .to($videoIdBigLayout, 0.5, {  opacity: 0, ease:"expo.easeInOut" },'')
        ;
        let iframesLittle = document.querySelector('.video-little--js');
        let  videoPlayerLayoutLittle = document.querySelector('.video-little--layout--js');
        let videoIdLittle = iframesLittle.getAttribute('data-set-vimeo-id');
        let vimeoPlayerLittle = new VimeoPlayer(iframesLittle,{
          id: videoIdLittle,
          width: '100%',
          height: '100%',
          muted:	true,
          loop: true,
          controls:	false,
          quality:	false
        });

        let iframesBig = document.querySelector('.video-big--js');
        let videoPlayerLayoutBig = document.querySelector('.video-big--layout--js');
        let videoIdBig = iframesBig.getAttribute('data-set-vimeo-id');
        let vimeoPlayerBig = new VimeoPlayer(iframesBig,{
          id: videoIdBig,
          width: '100%',
          height: '100%',
          muted:	true,
          loop: true,
          controls:	false,
          quality:	false
        });
        vimeoPlayerLittle.loadVideo(videoIdLittle);
        vimeoPlayerBig.loadVideo(videoIdBig);

    if (screen.width > 1024) {
      console.log('desk');
      videoPlayerLayoutLittle.addEventListener("mouseenter", () => {
        videoIdLittleBgGsap.play();        
        if (!$cursorBlock.hasClass('video')) {
          $cursorBlock.addClass("video");
        }
        vimeoPlayerLittle.play().then(function() {
        }).catch(function(error) {
            switch (error.name) {
                case 'PasswordError':
                    // the video is password-protected and the viewer needs to enter the
                    // password first
                    break;
        
                case 'PrivacyError':
                    // the video is private
                    break;
        
                default:
                    // some other error occurred
                    break;
            }
        });
      });

      videoPlayerLayoutLittle.addEventListener("mouseleave", () => {
        videoIdLittleBgGsap.reverse();
        if ($cursorBlock.hasClass('video')) {
          $cursorBlock.removeClass("video");
        }
        vimeoPlayerLittle.unload().then(function() {
          // the video was played
        }).catch(function(error) {
            switch (error.name) {
                case 'PasswordError':
                    // the video is password-protected and the viewer needs to enter the
                    // password first
                    break;
        
                case 'PrivacyError':
                    // the video is private
                    break;
        
                default:
                    // some other error occurred
                    break;
            }
        });
      });

      videoPlayerLayoutBig.addEventListener("mouseenter", () => {
        // console.log('second play');
        videoIdBigBgGsap.play();
        if (!$cursorBlock.hasClass('video')) {
          $cursorBlock.addClass("video");
          // console.log('cursor video1');
        }
        vimeoPlayerBig.play().then(function() {
          // the video was played
        }).catch(function(error) {
            switch (error.name) {
                case 'PasswordError':
                    // the video is password-protected and the viewer needs to enter the
                    // password first
                    break;
        
                case 'PrivacyError':
                    // the video is private
                    break;
        
                default:
                    // some other error occurred
                    break;
            }
        });
      });

      videoPlayerLayoutBig.addEventListener("mouseleave", () => {
        videoIdBigBgGsap.reverse();
        if ($cursorBlock.hasClass('video')) {
          $cursorBlock.removeClass("video");
          // console.log('cursor video hidden1');
        }
        vimeoPlayerBig.unload().then(function() {
          // the video was played
        }).catch(function(error) {
            switch (error.name) {
                case 'PasswordError':
                    // the video is password-protected and the viewer needs to enter the
                    // password first
                    break;
        
                case 'PrivacyError':
                    // the video is private
                    break;
        
                default:
                    // some other error occurred
                    break;
            }
        });
      });

    }
    else{
      console.log('mobile');
      ScrollTrigger.create({
        trigger:  iframesLittle,
        start: "top bottom",
        end: "bottom top",
        scrub: false,
        toggleActions: "play reverse none reverse",
        onEnter: () => {
          videoIdLittleBgGsap.play();  
          vimeoPlayerLittle.play().then(function() {
            // the video was played
          }).catch(function(error) {
              switch (error.name) {
                  case 'PasswordError':
                      // the video is password-protected and the viewer needs to enter the
                      // password first
                      break;
          
                  case 'PrivacyError':
                      // the video is private
                      break;
          
                  default:
                      // some other error occurred
                      break;
              }
          });
        },
        onEnterBack: () => {
          videoIdLittleBgGsap.play();  
          vimeoPlayerLittle.play().then(function() {
            // the video was played
          }).catch(function(error) {
              switch (error.name) {
                  case 'PasswordError':
                      // the video is password-protected and the viewer needs to enter the
                      // password first
                      break;
          
                  case 'PrivacyError':
                      // the video is private
                      break;
          
                  default:
                      // some other error occurred
                      break;
              }
          });
        },
        onLeave: () => {
          videoIdLittleBgGsap.reverse();
          vimeoPlayerLittle.unload().then(function() {
            // the video was paused
        }).catch(function(error) {
            switch (error.name) {
                case 'PasswordError':
                    // the video is password-protected and the viewer needs to enter the
                    // password first
                    break;
        
                case 'PrivacyError':
                    // the video is private
                    break;
        
                default:
                    // some other error occurred
                    break;
            }
        });
        },
        onLeaveBack: () => {
          videoIdLittleBgGsap.reverse();
          vimeoPlayerLittle.unload().then(function() {
            // the video was paused
        }).catch(function(error) {
            switch (error.name) {
                case 'PasswordError':
                    // the video is password-protected and the viewer needs to enter the
                    // password first
                    break;
        
                case 'PrivacyError':
                    // the video is private
                    break;
        
                default:
                    // some other error occurred
                    break;
            }
        });

        },
        markers: false
      });
      ScrollTrigger.create({
        trigger:  iframesBig,
        start: "top bottom",
        end: "bottom top",
        scrub: false,
        toggleActions: "play reverse none reverse",
        markers: true,
        onEnter: () => {
          videoIdBigBgGsap.play();
          vimeoPlayerBig.play().then(function() {
            // the video was played
          }).catch(function(error) {
              switch (error.name) {
                  case 'PasswordError':
                      // the video is password-protected and the viewer needs to enter the
                      // password first
                      break;
          
                  case 'PrivacyError':
                      // the video is private
                      break;
          
                  default:
                      // some other error occurred
                      break;
              }
          });
        },
        onEnterBack: () => {
          videoIdBigBgGsap.play();
          vimeoPlayerBig.play().then(function() {
            // the video was played
          }).catch(function(error) {
              switch (error.name) {
                  case 'PasswordError':
                      // the video is password-protected and the viewer needs to enter the
                      // password first
                      break;
          
                  case 'PrivacyError':
                      // the video is private
                      break;
          
                  default:
                      // some other error occurred
                      break;
              }
          });
        },
        onLeave: () => {
          
          videoIdBigBgGsap.reverse();
          vimeoPlayerBig.unload().then(function() {
            // the video was paused
        }).catch(function(error) {
            switch (error.name) {
                case 'PasswordError':
                    // the video is password-protected and the viewer needs to enter the
                    // password first
                    break;
        
                case 'PrivacyError':
                    // the video is private
                    break;
        
                default:
                    // some other error occurred
                    break;
            }
        });
        },
        onLeaveBack: () => {
          videoIdBigBgGsap.reverse();
          vimeoPlayerBig.unload().then(function() {
            // the video was paused
        }).catch(function(error) {
            switch (error.name) {
                case 'PasswordError':
                    // the video is password-protected and the viewer needs to enter the
                    // password first
                    break;
        
                case 'PrivacyError':
                    // the video is private
                    break;
        
                default:
                    // some other error occurred
                    break;
            }
        });
        },
        markers: false
      });
    }

   
}
controlVideos();

function btnLottieFunc() {
  let btnPortfolio = document.querySelector(".btn-portfolio--js");
  let btnAbout = document.querySelector(".btn-about--js");
  if (btnPortfolio) {
    function btnPortfolioHover() {
      const btnPortfolioAnim = lottie.loadAnimation({
        container: btnPortfolio,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: nozomiData.rootUrl + "/assets/lottie/button_portfolio.json"
      });

      btnPortfolio.addEventListener("mouseenter", () => {
        if(!btnPortfolio.classList.contains("active")){
          btnPortfolio.classList.add("active");
          btnPortfolioAnim.playSegments([0, 30], true);
        }
      });

      btnPortfolio.addEventListener("mouseleave", () => {
        if(btnPortfolio.classList.contains("active")){
          btnPortfolio.classList.remove("active");
          btnPortfolioAnim.playSegments([31, 60], true);
        }
      });

      btnPortfolio.addEventListener("click", () => {
        if(btnPortfolio.classList.contains("active")){
          btnPortfolio.classList.remove("active");
          btnPortfolioAnim.playSegments([31, 60], true);
        }
      });    

    }
    if (btnPortfolio !== null) {
      btnPortfolioHover();
    }
  }
  if (btnAbout) {
    function btnAboutHover() {
      const btnAboutAnim = lottie.loadAnimation({
        container: btnAbout,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: nozomiData.rootUrl + "/assets/lottie/button_about.json"
      });

      btnAbout.addEventListener("mouseenter", () => {
        if(!btnAbout.classList.contains("active")){
          btnAbout.classList.add("active");
          btnAboutAnim.playSegments([0, 30], true);
        }
      });

      btnAbout.addEventListener("mouseleave", () => {
        if(btnAbout.classList.contains("active")){
          btnAbout.classList.remove("active");
          btnAboutAnim.playSegments([31, 60], true);
        }
      });
      btnAbout.addEventListener("click", () => {
        if(btnAbout.classList.contains("active")){
          btnAbout.classList.remove("active");
          btnAboutAnim.playSegments([31, 60], true);
        }
      });

    }
    if (btnAbout !== null) {
      btnAboutHover();
    }
  }
}
btnLottieFunc();
  
}
