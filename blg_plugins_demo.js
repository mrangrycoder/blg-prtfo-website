var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*!
 * Elastic border
 */
    $(".elastic-border").each(function(t){function s(t,i,o){this.x=t,this.ix=t,this.vx=0,this.cx=0,this.y=i,this.iy=i,this.cy=0,this.canvas=o}function h(){var t=$(".elastic-border"),i=t.get(0).getContext("2d");for(a=requestAnimationFrame(h),i.clearRect(0,0,t.width(),t.height()),i.fillStyle=l.leftColor,i.fillRect(0,0,t.width(),t.height()),o=0;o<=l.totalPoints-1;o++)n[o].move();for(i.fillStyle=l.rightColor,i.strokeStyle=l.rightColor,i.lineWidth=1,i.beginPath(),i.moveTo($(window).width()/2,0),o=0;o<=l.totalPoints-1;o++)e=n[o],null!=n[o+1]?(e.cx=(e.x+n[o+1].x)/2-1e-4,e.cy=(e.y+n[o+1].y)/2):(e.cx=e.ix,e.cy=e.iy),i.bezierCurveTo(e.x,e.y,e.cx,e.cy,e.cx,e.cy);if(i.lineTo($(window).width(),$(window).height()),i.lineTo($(window).width(),0),i.closePath(),i.fill(),l.showIndicators){for(i.fillStyle="#15232E",i.beginPath(),o=0;o<=l.totalPoints-1;o++)e=n[o],i.rect(e.x-2,e.y-2,4,4);i.fill(),i.fillStyle="#fff",i.beginPath();for(var o=0;o<=l.totalPoints-1;o++){var e=n[o];i.rect(e.cx-1,e.cy-1,2,2)}i.fill()}}var n=[],a=null,l=new function(){this.totalPoints=2,this.viscosity=10,this.mouseDist=100,this.damping=.05,this.showIndicators=!1,this.leftColor="#ffffff",this.rightColor="#15232E"},e=0,r=0,i=0,o=0,c=0,f=0;$(document).on("mousemove",function(t){c=e<t.pageX?1:e>t.pageX?-1:0,r<t.pageY?1:r>t.pageY?-1:0,e=t.pageX,r=t.pageY}),function t(){f=e-i,r-o,i=e,o=r,setTimeout(t,50)}(),s.prototype.move=function(){this.vx+=(this.ix-this.x)/l.viscosity;var t=this.ix-e,i=this.y-r,o=this.canvas.data("gap");(0<c&&e>this.x||c<0&&e<this.x)&&Math.sqrt(t*t)<l.mouseDist&&Math.sqrt(i*i)<o&&(this.vx=f/8),this.vx*=1-l.damping,this.x+=this.vx},$(window).on("resize",function(){!function(){var t=$(".elastic-border");t.get(0).getContext("2d"),cancelAnimationFrame(a),$(".elastic-border").get(0).width=$(window).width(),$(".elastic-border").get(0).height=$(window).height(),n=[];for(var i=t.height()/(l.totalPoints-1),o=$(window).width()/2,e=0;e<=l.totalPoints-1;e++)n.push(new s(o,e*i,t));h(),t.data("gap",i)}()}).trigger("resize")});

$(document).ready(function() {

    'use strict';
	
    /*-----------------------------------------------------------------
      Loaded
    -------------------------------------------------------------------*/

	/*var tweenTime = 4; //sec

	var master = new TimelineMax({delay: tweenTime-2});
	master.eventCallback('onComplete', function() {
		progressBar(); //Init progress bar
    });

	$('body, .js-img-load').imagesLoaded({ background: !0 }).always( function( instance ) {
	    preloader(); //Init preloader
    });

	function preloader() {
		var tl = new TimelineMax({paused: true});
		tl.set('.preloader', {
			opacity: '1'
		})
		.addLabel('first')
		.to('.preloader', .6, {
			delay: 1,
			opacity: '0',
			zIndex: '-1',
			ease: 'Power3.easeInOut'
		})
		.to('.circle-pulse', .5, {
			opacity: 0,
			ease: 'Power3.easeInOut'
		},'+=.5')
		.to('.preloader__progress span', 1, {
			width: '100%',
			ease: 'Power3.easeInOut'
		}, 'first+=.5');

        tl.duration(tweenTime).play();
        console.log(tl.endTime());
			
		return tl;
	};*/
});

/*!
 * Slide nav
 */

var slideOpen = document.querySelector('.slideOpen');
var slideClose = document.querySelector('.slideClose');
var slideCloseOverlay = document.querySelector('.overlay-slideNav');

var tl = new TimelineMax({ paused: true });

$('.slideNav').each(function(i) {
  tl.timeScale(1);
  tl.to('.overlay-slideNav', 0.3, { opacity: 1, zIndex:2, visibility:"visible" })
  
  .to(slideOpen, 0.5, {
    x: 300,
    opacity: 0,
    ease: Power2.easeInOut
  },'-=0.5')

  .to('.slideNav', 0.5, {
    x: 0,
    ease: Power2.easeInOut
  },'-=0.5')

  .to(slideClose, 0.5, {
    x: 0,
    opacity: 1,
    rotation: 360,
    ease: Power1.easeInOut
  },'-=0.5')

  .staggerFrom('.slideNav__item', 0.2, {
    opacity: 0,
    x: 70,
    ease: Back.easeOut
  },0.06, '-=0.18');

  openMenu = function openMenu() {return tl.play();};
  closeMenu = function closeMenu() {return tl.reverse();};

  slideOpen.addEventListener('click', openMenu, false);
  slideClose.addEventListener('click', closeMenu, false);
  slideCloseOverlay.addEventListener('click', closeMenu, false);
  
});

}
/*
     FILE ARCHIVED ON 08:23:44 Dec 16, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:06:51 Dec 25, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 101.449
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.059
  RedisCDXSource: 1.887
  esindex: 0.005
  LoadShardBlock: 81.773 (3)
  PetaboxLoader3.datanode: 112.684 (5)
  CDXLines.iter: 15.609 (3)
  load_resource: 163.301 (2)
  PetaboxLoader3.resolve: 74.121 (2)
*/
