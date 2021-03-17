//Get the viewport height and set acordingly for mobile and tablet displays (fullscreen viewport)
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

//Update the viewport height and set acordingly for mobile and tablet displays (fullscreen viewport)
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

//--------------------------RANDOM FAVCON-------------------------//

var favcon = [
  "https://cdn.glitch.com/8efdef4b-1039-4425-a778-75aadcafbd8d%2Fpinkdot.png?v=1615750342201",
  "https://cdn.glitch.com/8efdef4b-1039-4425-a778-75aadcafbd8d%2Fbluedot.png?v=1615750348635",
  "https://cdn.glitch.com/8efdef4b-1039-4425-a778-75aadcafbd8d%2Fyellowdot.png?v=1615750344902"
];

var size = favcon.length
var x = Math.floor(size*Math.random())
document.getElementById('favicon').setAttribute("href", favcon[x]);

//--------------------------RANDOM FAVCON-------------------------//



//--------------------------NAV DOT-------------------------//

$("#nt1")
  .mouseenter(function() {
    $("#nd3").css("opacity", "100%");
  })
  .mouseleave(function() {
    $("#nd3").css("opacity", "0%");
  });

$("#nt2")
  .mouseenter(function() {
    $("#nd2").css("opacity", "100%"
    );
  })
  .mouseleave(function() {
    $("#nd2").css("opacity", "0%");
  });

$("#nt3")
  .mouseenter(function() {
    $("#nd1").css("opacity", "100%");
  })
  .mouseleave(function() {
    $("#nd1").css("opacity", "0%");
  });

//--------------------------NAV DOT-------------------------//

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);