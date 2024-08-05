console.log("Hello World");

let year = (new Date()).getFullYear();

document.querySelector("body .copyright-date").innerHTML = "© " + year + ". ";

let i = 0;
let txt ="<h1>Hello, my name is Takudzwa</h1>";
// let typing = "| ";
let speed = 50;

window.addEventListener("load", () => {
  typeWriter();
  setTimeout(reveal, 2000);
}); 

function typeWriter() { 
  if (i < txt.length) {
    document.querySelector("body .heading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

  }
 };

function reveal() {
    document.querySelector(" body .heading-text").classList.remove("hide");
    document.querySelector(" body .skills-box").classList.remove("hide");
    document.querySelector(" body .home-btns").classList.remove("hide");
    document.querySelector("body #projects").classList.remove("hide");
    document.querySelector(" body #contact").classList.remove("hide");
    document.querySelector(" body #footer").classList.remove("hide");
};

// const hidden = document.getElementsByClassName("hide");
// const hiddenArr = Array.from(hidden);

// hiddenArr.forEach((hidden) => { 
//   window.on("load", function() {
//   hiddenArr.classList.remove("hide");})
// });
// window.addEventListener("resize", function(){
//   if (window.innerWidth < 1200) {
//     document.querySelector(" body .pic-box").classList.add("hide");
//   }
// });

// (typeWriter));
//  =>{
//   typeWriter(type);
// });



 // hide elements .heading-text, .home-btns , #projects and #contacts
 // setTimeout (17s in milliseconds 17,000)

//     for (var i = 0; i < txt.length; i++) {

    
//     let heading = document.getElementById("heading");

//     heading.innerHTML += txt.charAt(i);
//     heading.innerHTML = heading.innerHTML + txt.charAt(i);
//     // x += 2; is also the same as x = x + 2;

//     setTimeout(typeWriter, speed);

//   };

// };

// typeWriter();
// document.addEventListener("load", (type) => {

  
// });

// if (i < txt.length ) {
//     document.getElementByClassName(".heading").innerHTML += txt.charAt(i);
//     i++;
//     type.setTimeout(typeWriter, speed);
//     //setTimeout() only executed once - setInterval() for repeat, clearTimeout to prevent it from loading
    
//   }
// document.addEventListener("keydown", function(event){

//   respondToKey(event.key);
//   nextSequence();
// });

// document.body.onload = " typeWriter() ";
// function typeWriter()

//add class for each section - home, projects, and contact - class="fade"]
//document.body
// var fadeFx = document.getElementsByClassName("fade");

// document.body.onscroll = function() {
//      //for i- 1st div - i++ goes to every div with fade
//      for (let i = 0; i<fadeFx.length; i++){
//         var elTop = fadeFx[i].offsetTop;
//         //.offsetTop - get the top of elements
//         var elBottom = fadeFx[i].offsetTop + fadeFx[i].clientHeight; //fadeFx[i].offsetTop+fadeFx[i].offsetTop.clientHeight();
//     //vs innerHeight
//         var topScreen = window.scrollYOffset;
//         //pageY - depreaceated
//         var bottomScreen =  window.scrollYOffset + window.innerHeight; 
//         if(bottomScreen > elTop && topScreen < elBottom ) {
//         //bottom of screen in more than 1st element and top of the screen - if both are smaller than bottom element
//         fadeFx[i].offsetTop.classList.add("fadeIn");
//         } else {
//             fadeFx[i].offsetTop.classList.remove("fadeIn");
//         }

//     }
// }; 

//     let pageTop = document.body.scrollTop();
//     let pageBottom = pageTop + document.body.clientHeight(); 
//     //vs innerHeight

//     let homeSection = document.getElementById("home");

//     // for (var i = 0; i < homeSection.clientHeight; i++){
        
//     // }
//     if (homeSection.position().top > pageBottom) {
//         homeSection.classList.add("fadeOut");
//     }
// });

//     if ((document.body.getBoundingClientRect()).top < currentPosition ){
//           // user scroll to up direction
//           let homeSection = document.getElementById("home");
//            homeSection.classList.add("fadeIn");
//      }
//       else {
//            // user scroll to down direction
//            let homeSection = document.getElementById("home");
//            homeSection.classList.add("fadeOut");
//        }
//   });
  
// const observerOptions = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.7};

//     function observerCallback(entries, observer) {
//         entries.forEach(entry => {
//             if(entry.isIntersecting) {

//                 entry.target.classList.replace("fadeOut", "fadeIn");
//             } else {
//                 entry.target.classList.replace("fadeIn", "fadeOut")
//             }
//         })
//     }

//     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     const fadeEl = document.getElementById("home");
//     fadeEl.forEach(el => observer.observe(el));

//projects or contacts on click - addclass - fadeout to #home

// let homeSection =  document.querySelector("body #home");
// //window
// window.addEventListener("scroll", fadeOut ); 
// //addEventListener("scroll", (event) =>{});
// const homeSectionArr = Array.from(homeSection);

// function fadeOut() {
//     for (var i = 0; i < homeSectionArr.length; i++) {
//         var elements = homeSectionArr[i];
//         var outOfView = elements.getBoundingClientRect().top - 
//         window.innerHeight + 10; 
//             if (outOfView < 0) {
//                 elements.classList.add(".fadeOut");
//             } else {
//                 elements.classList.remove(".fadeOut");
//             }
//     }  
// }
// console.log(document.getElementById("home")) ;

// let home = document.getElementById("home");

// let homePosition = document.getElementById("home").scrollTop
// (document.querySelector(".home-btns").position().top) ;

// let homePosition = document.getElementById("home");

// document.addEventListener("scroll", function() {
//     let scrollHD = document.scrollY / document.innerHeight;
//     // u = 10 / 2
//     let x = 0;

//     if (scrollHD <= 1) { 
//         document.getElementById("home").style.opacity = 1 + scrollHD;
//         x = (1-scrollHD)/2; 
//     }

// } ); 

// console.log(window.scrollY/window.innerHeight);

// window.addEventListener("scroll", () => {
//     // if (document.scrollY<)w 
//     let homeSection = document.getElementById("home");
//     homeSection.classList.add("fadeOut");
//     // homeSection.style.opacity = 0;
// });

// (document.getElementsByClassName("project-img").getBoundingClientRect()).top < currentPosition )
// var currentPosition = 0;
// var originalOpacity = ''; 
// original color before scroll down
//getElementsByClassName("project-img")
// getBoundingClientRect() - size of element and its position reletive to viewport
// window.addEventListener('scroll', function(){
//   currentPosition = document.body.getBoundingClientRect().top;
//   if ((document.body.getBoundingClientRect()).top < currentPosition ){
//         // user scroll to up direction
//         let homeSection = document.getElementById("home");
//          homeSection.classList.add("fadeIn");
//    }
//     else {
//          // user scroll to down direction
//          let homeSection = document.getElementById("home");
//          homeSection.classList.add("fadeOut");
//      }
// });
