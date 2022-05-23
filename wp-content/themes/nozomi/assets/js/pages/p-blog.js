import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function () {
    console.log("blog");
  
    let $body = $('body'),
    $navSection = $body.find('.nav'),
    $navSectionItem = $navSection.find('.menu-item'),
    $navTrigger = $body.find('.p-blog-content'),
    $navWrap = $navSection.find('.nav-wrap'),
    $navMobileBtn = $navSection.find('.nav-mobile-btn--js'),
    $navMobileBtnText = $navMobileBtn.find('.nav-mobile-btn-text'),
    $navMobileBlock = $navSection.find('.nav-menu--js'),
    $navMobileBg = $navSection.find('.nav-menu-bg--js'),
    $section = $navTrigger.find('.gsap-anim--js'),
    $sectionNav = $navTrigger.find('.gsap-nav--js'),
    navMobileActive,sectionFromGsap,sectionToGsap
  ;
  let $indexSection = $body.find('.blog-img'),
  $indexSectionBlock = $indexSection.find('.parallax-img-block--js'),
  indexSectionImgTrigger="top center",
  $indexSectionImg = $indexSectionBlock.find('img');
  function indexScaleFunc() {
    if (screen.width > 1024) {
      indexSectionImgTrigger="top center";
    }
    else{
      indexSectionImgTrigger="top 80%";
    }
    ScrollTrigger.create({
      trigger: $indexSectionBlock,
      animation: 
      gsap
          .timeline()
          .fromTo(
            $indexSectionImg,
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
  indexScaleFunc();

    if (screen.width > 1024) {

      sectionToGsap = gsap
      .timeline({
        paused: true
      })
      .to($section, 0.5, { opacity: 0 },'')
      .to($section, 1, { y: -200 },'<')
      .to($sectionNav, 0.5, { opacity: 0 },'')
      .to($sectionNav, 1, { y: -200 },'<')
      ;
      sectionFromGsap = gsap
      .timeline({
        paused: true
      })
      .from($section, 0.5, { opacity: 0 , delay: 0.5},'')
      .from($section, 1, { y: 200 },'<')
      .from($sectionNav, 0.5, { opacity: 0 , delay: 0.5},'')
      .from($sectionNav, 1, { y: 200 },'<')
      ;
    }
    else{

      sectionToGsap = gsap
      .timeline({
        paused: true
      })
      .to($section, 0.5, { opacity: 0 },'')
      .to($section, 1, { y: -200 },'<')
      ;

      sectionFromGsap = gsap
      .timeline({
        paused: true
      })
      .from($section, 0.5, { opacity: 0 , delay: 0.5},'')
      .from($section, 1, { y: 200 },'<')
      ;
    }


  sectionFromGsap.play();

  if (screen.width > 1024) {
    function navScrollFunc() {
      ScrollTrigger.create({
        trigger: $navTrigger,
        start: "top top",
        end: "bottom bottom",
        pin:  $navWrap,
        scrub: true,
        toggleActions: "play reverse none reverse",
        markers: false,
      });

    }
    navScrollFunc();
  }
  else{
    let navMobileAnim = gsap
    .timeline({
      paused: true
    })
    .from($navMobileBg, 0.01, { yPercent: 100,  ease: 'linear' },'')
    .from($navMobileBg, 0.3, { opacity: 0,  ease: 'expo.easeOut' },'')
    .from($navMobileBlock, 0.3, { yPercent: 100,  ease: 'expo.easeOut' },'<')
    ;

    function navMobileFunc() {

      if ($navSectionItem.hasClass('current-menu-item')) {
        navMobileActive = $navMobileBlock.find('.current-menu-item a').text();
      }
      else{
        navMobileActive = 'All posts';
      }
      console.log(navMobileActive);
      $navMobileBtnText.html(navMobileActive);
      $navMobileBtn.on("click", function () {
        navMobileAnim.play();
      });  
      $navMobileBg.on("click", function () {
        navMobileAnim.reverse();
      });  
    }
    navMobileFunc();
  }

  let $sidebarLink = $navMobileBlock.find('a');
  $sidebarLink.on("click", function(event) {
    console.log('click');
    event.preventDefault();
    sectionToGsap.play();
    setTimeout(() => {
      window.location = $(this).attr("href");
    }, 800);
  });
}
