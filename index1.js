// gsap.to(".box1", {
//     x:1200,
//     durtation : 2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"green",

// })

// gsap.from(".box2",{
//     x :1200,
//     durtation : 2,
//     delay :1,
//     rotate : 180,
//     backgroundColor:"yellow",
//     borderRadius:"50%",
//     scale:2
// })

// gsap.from("h1",{
//     opacity:0,
//     y:300,
//     durtation:2,
//     delay:1,
//     stagger:0.3
// })

// gsap.to(".box3",{
//     x:1200,
//     durtation:1,
//     delay:1,
//     repeat:2,
//     rotate:360,
//     borderRadius:"50%",
//     opacity:0
// })

// var main = document.querySelector(".main")
// var cursor = document.querySelector(".cursor")
// var imageDiv = document.querySelector(".image")

// main.addEventListener("mousemove", function(dets){
//     gsap.to(cursor, {
//         x:dets.x,
//         y:dets.y,
//         duration:1,
//         ease:"back.out" ,
//     })
// })

// imageDiv.addEventListener("mouseenter", function(){
//     cursor.innerHTML = "view more"
//     gsap.to(cursor, {
//         scale:3,
//         backgrounColor:"rgb(255, 0, 0)"
//     })
// })

// imageDiv.addEventListener("mouseout", function(){
//     gsap.to(cursor, {
//         scale:1,
//         backgrounColor:"#fff"
//     })
// })


var menu = document.querySelector(".nav i");
var close = document.querySelector(".full i");

var nav = gsap.timeline()

nav.to(".full",{
    right:0,
    duration:0.7,
})

nav.from(".full h4",{
   x:150,
   duration:1,
   stagger:0.1,
   opacity:0,
})

nav.from(".full i",{
    opacity:0,
})

nav.pause()

menu.addEventListener("click", function(){
    nav.play()
})

close.addEventListener("click",function(){
    nav.reverse()
})
