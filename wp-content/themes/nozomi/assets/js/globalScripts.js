import { gsap } from "gsap";
import lottie from "lottie-web";

import header from "./components/c-header";
import footer from "./components/c-footer";
import tab from "./components/c-tab";

export default function () {
  let $body = $('body'),
  $preloaderBlock = $body.find('.preloader--js');

    function preloaderFunc() {
      // window.scrollTo(0, 0);
      // $(window).scrollTop(0);
      // setTimeout(function(){
      //   // $(window).scrollTop(0);
      //   $preloaderBlock.fadeOut(1000);
      // }, 100);

      // window.addEventListener("load", function(){
      //   $(window).scrollTop(0);
      //   setTimeout(function(){
      //     // $(window).scrollTop(0);
      //     $preloaderBlock.fadeOut(1000);
      //   }, 100);
      // });

      window.addEventListener("load", function(){
        setTimeout(function(){
          $('html,body').scrollTop(0);
          gsap.to($preloaderBlock, 0.5, { autoAlpha: 0 },'');
      }, 500);
      });
    }
    let $window = $(window),
    $indexHome = $('.index-home'),
    winHeight = $window.height();
    // winHeightScreen = screen.height;
    if (winHeight > 560) {
      if (winHeight > 700) {
        $indexHome.addClass('mobile-height');
      }
      else{
        $indexHome.addClass('mobile-middle');
      }
    }

    preloaderFunc();
    header();
    footer();
    tab();

    function screenReload() {
      let widthScreen = screen.width;
      let  widthScreenNew;
      window.addEventListener("resize", () => {
        widthScreenNew = screen.width;

        if (widthScreenNew !== widthScreen) {
          location.reload();
        }

      });
    }
    screenReload();

}
