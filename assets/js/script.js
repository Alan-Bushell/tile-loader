/*$(document).ready(function(){
  $(".click-action").click(function(){
    $("h3").toggle();
  });
});*/

/*$(document).ready(function(){
  $(".dublin-tile").mouseenter(function(){
    alert("Would you like to go to Dublin?")
    });
  }); */

 // Scroll up and down event listener - https://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event//
 /* $(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        console.log('Scroll up');
    }
    else {
        console.log('Scroll down');
    }
});*/

const URL = "cities.json"
document.addEventListener("DOMContentLoaded", () =>{
    let options = {
        root: null,
        rootMargins:"0px",
        threshold: 0.3
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.querySelector("footer")); // to ensure data presents on page
    getData();
})
function handleIntersect(entries){
    if (entries[0].isIntersecting) {
        console.warn("Intersecting on viewport");
        getData();
    }
}
 function getData() {
     let main = document.querySelector("main");
     console.log("fetch some JSOn Data")
     fetch(URL)
     .then(response=>response.json())
     .then(data=>{
         data.items.forEach(item=>{
        let city = document.createElement("city");
         let description = document.createElement("description");
         let lat = document.createElement("lat");
         let lang = document.createElement("lang");
         let img = document.createElement("img");
         img.src = item.img;
         img.alt = item.name;
         main.appendChild(city);
         main.appendChild(img);
         img.appendChild(lat);
         lat.appendChild(lang);
         })
         
     })
 }
