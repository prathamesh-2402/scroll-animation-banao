// gsap.registerPlugin(ScrollTriger);
var controller = new ScrollMagic.Controller();
var controller2 = new ScrollMagic.Controller();

// 1st page animation
const setTweenCustom = (name, obj, obj2, type) => {
  const tl1 = gsap.timeline();
  tl1[type](name, obj, obj2);
};

// gsap.to(".movies", {
//     scrollTrigger: '.movies',
// })
const tl2 = gsap.timeline();
tl2
    .add('start')
    .set('.left',{backgroundColor:"#4926CC"},'start')
    .set('.right',{backgroundColor:"#1B0361"})
    .to('.svg',{backgroundColor:"#4926CC"},'start')
    .to('.transrgwht',{strokeDasharray: "150, 1000"},'start')
    .to('.dotsfill2',{fill:"rgb(0, 146, 255)",opacity: "1"},'start')
    .to('.dotsstro2',{opacity: "1"},'start')
    .fromTo(['.titlespan','.descspan','.btmtitle','.btmdesc'],{y:"0%"},{ y:"200%", display:"none" },'start')
    .fromTo(['.adescspan','.titlespan2','.descspan2','.btmtitle2','.btmdesc2'],{y:"-200%",display:"inline-block"},{ y:"0%" },'start')
    .to('.award',{opacity:0,duration: 0.5,display:"none"},'start')
    .to('.view',{scale:0},'start')
    .from('.view2',{scale:0,duration: 0.5},'start')
    .fromTo('.movies',{y:"0%"},{ y:"200%",duration:0.35 },'start')
    .fromTo('.cid',{y:"0%"},{ y:"200%",duration:0.5 },'start')
    .add('second')
    .set('.right-content1',{ display:"none" },'second')
    .set('.right-content2',{ display:"block" },'second')
    .from('.veme1',{y:"200%",display:"inline-block"},'second')
    .from('.veme2',{y:"-100%",display:"inline-block"},'second')

// init controller

// create a scene
new ScrollMagic.Scene({
  duration: 200, // the scene should last for a scroll distance of 100px
  offset: 0, // start this scene after scrolling for 50px
  triggerHook: 1,
})
  .setTween([
    setTweenCustom(".movies", { y: "100%", duration: 0.35 },{}, "from"),
    setTweenCustom(".cid", { y: "100%", duration: 0.5 },{}, "from"),
    setTweenCustom(".view", { scale: 0, duration: 0.5 },{}, "from"),
    setTweenCustom(".btmtitle", { y: "0%", duration: 0.5 },{}, "to"),
    setTweenCustom(".btmdesc", { y: "0%", duration: 0.5 },{}, "to"),
    setTweenCustom(".titlespan", {y:"100%"},{ y: "0%", duration: 0.5 }, "fromTo"),
    setTweenCustom(".descspan", { y: "0%", duration: 0.5 },{}, "to"),
    setTweenCustom(".award", { y: "0%", duration: 0.5 },{}, "to"),
  ],)
  .setPin(".main") // pins the element for the the scene's duration
  .addTo(controller); // assign the scene to the controller

// var page1 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    // duration: 900,
    offset: 100,
    triggerHook: 0.9,
})
    .setTween(tl2)
    .setPin('.main')
    .addTo(controller2);
// 
