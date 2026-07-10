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


/* ================== video 5 ================== */
// var menu = document.querySelector(".nav i");
// var close = document.querySelector(".full i");

// var nav = gsap.timeline()

// nav.to(".full",{
//     right:0,
//     duration:0.7,
// })

// nav.from(".full h4",{
//    x:150,
//    duration:1,
//    stagger:0.1,
//    opacity:0,
// })

// nav.from(".full i",{
//     opacity:0,
// })

// nav.pause()

// menu.addEventListener("click", function(){
//     nav.play()
// })

// close.addEventListener("click",function(){
//     nav.reverse()
// })

/* ================== video 6 ================== */
// var h1 = document.querySelector("h1");
// var h1Text = document.querySelector("h1").textContent
// var h1Text = h1.textContent

// var splittedText = h1Text.split("");

// splittedText.forEach(function(elem){
//     console.log(elem)
// })

// var clutter = "" 
// splittedText.forEach(function(){
//     clutter = clutter + "hey"
// })
// console.log(clutter);

// var clutter = ""
// splittedText.forEach(function(elem){
//     clutter = clutter + elem  // clutter += elem
// })
// console.log(clutter);

// var clutter = ""
// splittedText.forEach(function(elem){
//     clutter += `<span>${elem}</span>`
// })

// h1.innerHTML = clutter

/* Main part  */  /* Basic level*/
// function breakTheText(){
//     var h1 = document.querySelector("h1");
//     var h1Text = h1.textContent;
//     var splittedText = h1Text.split("");
//     var clutter = "";
//     splittedText.forEach(function (elem) {
//         clutter += `<span>${elem}</span>`
//     })

//     h1.innerHTML = clutter;
// }

// breakTheText()

// gsap.from("h1 span",{
//     y:70,
//     duration:1.7,
//     delay:0.7,
//     opacity:0,
//     stagger:0.15,
// })

/* Advance Level */
function breakTheText(){
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;
    var splittedText = h1Text.split("");
    var halfValue = splittedText.length/2;
    var clutter = "";

    splittedText.forEach(function(elem,idx){
        if (idx<halfValue){
            clutter += `<span class="a">${elem}</span>`
        }else{
              clutter += `<span class="b">${elem}</span>`
        }
    })

    h1.innerHTML = clutter;
}

breakTheText()

gsap.from("h1 .a",{
    y:100,
    duration:1,
    delay:0.5,
    stagger:0.15,
    opactity:0,
})

gsap.from("h1 .b",{
    y:100,
    duration:1,
    delay:0.5,
    stagger:-0.15,
    opactity:0,
})
