// JavaScript
function changeStyle() {
  let element = document.querySelector(".svg-Auth-off");
  element.classList.remove("svg-Auth-off");
  element.classList.add("svg-Auth-on");
}

  
function resetStyle() {
  let element = document.querySelector(".svg-Auth-on");
  element.classList.remove("svg-Auth-on");
  element.classList.add("svg-Auth-off");
}
