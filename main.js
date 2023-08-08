JavaScript
// Home Function
function changeStyleHome() {
  let element2 = document.querySelector(".flex-row .svg-base");
  element2.classList.remove("svg-base");
  element2.classList.add("svg-base-off");


  let element = document.querySelector(".flex-row .svg-on-hover-off");
  element.classList.remove("svg-on-hover-off");
  element.classList.add("svg-on-hover");


  let element3 =  document.querySelector(".flex-row .mtn-base");
  element3.classList.remove("mtn-base");
  element3.classList.add("mtn-on-hover");


  let element4 =  document.querySelector(".flex-row");
  element4.classList.remove("flex-base");
  element4.classList.add("flex-on-hover");
}
function resetStyleHome() {
  let element2 = document.querySelector(".flex-row .svg-base-off");
  element2.classList.remove("svg-base-off");
  element2.classList.add("svg-base");

  let element = document.querySelector(".flex-row .svg-on-hover");
  element.classList.remove("svg-on-hover");
  element.classList.add("svg-on-hover-off");

  let element3 =  document.querySelector(".flex-row .mtn-on-hover");
  element3.classList.remove("mtn-on-hover");
  element3.classList.add("mtn-base");

  let element4 =  document.querySelector(".flex-row");
  element4.classList.remove("flex-on-hover");
  element4.classList.add("flex-base");
}




// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  
// Auth Function


function changeStyleAuth() {
  let element2 = document.querySelector(".flex-row-Auth .svg-base");
  element2.classList.remove("svg-base");
  element2.classList.add("svg-base-off");


  let element = document.querySelector(".flex-row-Auth .svg-on-hover-off");
  element.classList.remove("svg-on-hover-off");
  element.classList.add("svg-on-hover");


  let element3 =  document.querySelector(".flex-row-Auth .mtn-base");
  element3.classList.remove("mtn-base");
  element3.classList.add("mtn-on-hover");


  let element4 =  document.querySelector(".flex-row-Auth");
  element4.classList.remove("flex-base");
  element4.classList.add("flex-on-hover");
}
function resetStyleAuth() {
  let element2 = document.querySelector(".flex-row-Auth .svg-base-off");
  element2.classList.remove("svg-base-off");
  element2.classList.add("svg-base");

  let element = document.querySelector(".flex-row-Auth .svg-on-hover");
  element.classList.remove("svg-on-hover");
  element.classList.add("svg-on-hover-off");

  let element3 =  document.querySelector(".flex-row-Auth .mtn-on-hover");
  element3.classList.remove("mtn-on-hover");
  element3.classList.add("mtn-base");

  let element4 =  document.querySelector(".flex-row-Auth");
  element4.classList.remove("flex-on-hover");
  element4.classList.add("flex-base");
}



// function resetStyle() {
//   let element = document.querySelector(".svg-Auth-on");
//   element.classList.remove("svg-Auth-on", "svg-base");
//   element.classList.add("svg-Auth-off","svg-base-off");
// }

