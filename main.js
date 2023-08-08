JavaScript
function changeStyle() {
  let element2 = document.querySelector(".svg-base-home");
  element2.classList.remove("svg-base-home");
  element2.classList.add("home-base-off");
  let element = document.querySelector(".home-off");
  element.classList.remove("home-off");
  element.classList.add("svg-home-on-hover");
}

  
// function resetStyle() {
//   let element = document.querySelector(".svg-Auth-on");
//   element.classList.remove("svg-Auth-on", "svg-base");
//   element.classList.add("svg-Auth-off","svg-base-off");
// }

