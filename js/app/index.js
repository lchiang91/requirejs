define(['jquery','com/carousel','com/gotop','com/waterfall'],function($,carousel,gotop,Waterfall){
  Carousel1.init($('.carousel'))
  gotop.start($('.gotop'))
  Waterfall.init($('.waterfall'))
})