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

var size = favcon.length;
var x = Math.floor(size * Math.random());
document.getElementById("favicon").setAttribute("href", favcon[x]);

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
    $("#nd2").css("opacity", "100%");
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

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

$(document).ready(function() {
  var text = $('p[id^="S-"]').hide(),
    i = 0;

  function unhide() {
    text.eq(i).fadeIn(200);
  }

  function cycle() {
    i = ++i % text.length;
    text
      .fadeOut(200)
      .delay(300)
      .eq(i)
      .fadeIn(200);
    console.log(i);
  }

  function cyclePrev() {
    i = --i % text.length;
    text
      .fadeOut(200)
      .delay(300)
      .eq(i)
      .fadeIn(200);
    console.log(i);
  }

  unhide();
  $(".next").click(cycle);
  $(".prev").click(cyclePrev);
  // click button to show next paragraph
});

$(document).ready(function() {
  var img = $('[id^="P-"]').hide(),
    i = 0;

  function unhidep() {
    img.eq(i).fadeIn(200);
  }

  function cyclep() {
    i = ++i % img.length;
    img
      .fadeOut(200)
      .delay(300)
      .eq(i)
      .fadeIn(200);
    console.log(i);
  }

  function cyclePrevp() {
    i = --i % img.length;
    img
      .fadeOut(200)
      .delay(300)
      .eq(i)
      .fadeIn(200);
    console.log(i);
  }

  unhidep();
  $(".next").click(cyclep);
  $(".prev").click(cyclePrevp);
  // click button to show next paragraph
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

//-------------------OPEN ALL EXTERNAL LINKS IN NEW TAB-------//
function externalLinks() {
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
    var b = c[a];
    b.getAttribute("href") &&
      b.hostname !== location.hostname &&
      (b.target = "_blank");
  }
}
externalLinks();

//--------------------------NAME DOT-------------------------//

$("#nom1")
  .mouseenter(function() {
    $("#nomdot1").css("width", ".45em");
    $("#nomdot1").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot1").css("width", "0em");
    $("#thumb1").css("display", "none");
  });

$("#nom2")
  .mouseenter(function() {
    $("#nomdot2").css("width", ".45em");
    $("#nomdot2").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot2").css("width", "0em");
    $("#thumb3").css("display", "none");
  });

$("#nom3")
  .mouseenter(function() {
    $("#nomdot3").css("width", ".45em");
    $("#nomdot3").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot3").css("width", "0em");
  });

$("#nom4")
  .mouseenter(function() {
    $("#nomdot4").css("width", ".45em");
    $("#nomdot4").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot4").css("width", "0em");
  });

$("#nom5")
  .mouseenter(function() {
    $("#nomdot5").css("width", ".45em");
    $("#nomdot5").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot5").css("width", "0em");
    $("#thumb2").css("display", "none");
  });

$("#nom6")
  .mouseenter(function() {
    $("#nomdot6").css("width", ".45em");
    $("#nomdot6").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot6").css("width", "0em");
    $("#thumb4").css("display", "none");
  });

$("#nom7")
  .mouseenter(function() {
    $("#nomdot7").css("width", ".45em");
    $("#nomdot7").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot7").css("width", "0em");
  });

$("#nom8")
  .mouseenter(function() {
    $("#nomdot8").css("width", ".45em");
    $("#nomdot8").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot8").css("width", "0em");
    $("#thumb5").css("display", "none");
  });

$("#nom9")
  .mouseenter(function() {
    $("#nomdot9").css("width", ".45em");
    $("#nomdot9").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot9").css("width", "0em");
  });

$("#nom10")
  .mouseenter(function() {
    $("#nomdot10").css("width", ".45em");
    $("#nomdot10").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot10").css("width", "0");
    $("#thumb7").css("display", "none");
  });

$("#nom11")
  .mouseenter(function() {
    $("#nomdot11").css("width", ".45em");
    $("#nomdot11").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot11").css("width", "0");
    $("#thumb8").css("display", "none");
  });

$("#nom12")
  .mouseenter(function() {
    $("#nomdot12").css("width", ".45em");
    $("#nomdot12").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot12").css("width", "0");
  });

$("#nom13")
  .mouseenter(function() {
    $("#nomdot13").css("width", ".45em");
    $("#nomdot13").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot13").css("width", "0");
  });

$("#nom14")
  .mouseenter(function() {
    $("#nomdot14").css("width", ".45em");
    $("#nomdot14").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot14").css("width", "0");
  });

$("#nom15")
  .mouseenter(function() {
    $("#nomdot15").css("width", ".45em");
    $("#nomdot15").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot15").css("width", "0");
  });

$("#nom16")
  .mouseenter(function() {
    $("#nomdot16").css("width", ".45em");
    $("#nomdot16").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot16").css("width", "0");
  });

$("#nom17")
  .mouseenter(function() {
    $("#nomdot17").css("width", ".45em");
    $("#nomdot17").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot17").css("width", "0");
  });

$("#nom18")
  .mouseenter(function() {
    $("#nomdot18").css("width", ".45em");
    $("#nomdot18").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot18").css("width", "0");
  });

$("#nom19")
  .mouseenter(function() {
    $("#nomdot19").css("width", ".45em");
    $("#nomdot19").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot19").css("width", "0");
  });

$("#nom20")
  .mouseenter(function() {
    $("#nomdot20").css("width", ".45em");
    $("#nomdot20").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot20").css("width", "0");
  });

$("#nom21")
  .mouseenter(function() {
    $("#nomdot21").css("width", ".45em");
    $("#nomdot21").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot21").css("width", "0");
  });

$("#nom22")
  .mouseenter(function() {
    $("#nomdot22").css("width", ".45em");
    $("#nomdot22").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot22").css("width", "0");
  });

$("#nom23")
  .mouseenter(function() {
    $("#nomdot23").css("width", ".45em");
    $("#nomdot23").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot23").css("width", "0");
  });

$("#nom24")
  .mouseenter(function() {
    $("#nomdot24").css("width", ".45em");
    $("#nomdot24").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot24").css("width", "0");
  });

$("#nom25")
  .mouseenter(function() {
    $("#nomdot25").css("width", ".45em");
    $("#nomdot25").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot25").css("width", "0");
  });

$("#nom26")
  .mouseenter(function() {
    $("#nomdot26").css("width", ".45em");
    $("#nomdot26").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot26").css("width", "0");
  });

$("#nom27")
  .mouseenter(function() {
    $("#nomdot27").css("width", ".45em");
    $("#nomdot27").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot27").css("width", "0");
  });
$("#nom28")
  .mouseenter(function() {
    $("#nomdot28").css("width", ".45em");
    $("#nomdot28").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot28").css("width", "0");
  });

$("#nom29")
  .mouseenter(function() {
    $("#nomdot29").css("width", ".45em");
    $("#nomdot29").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot29").css("width", "0");
  });

$("#nom30")
  .mouseenter(function() {
    $("#nomdot30").css("width", ".45em");
    $("#nomdot30").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot30").css("width", "0");
  });

$("#nom31")
  .mouseenter(function() {
    $("#nomdot31").css("width", ".45em");
    $("#nomdot31").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot31").css("width", "0");
  });

$("#nom32")
  .mouseenter(function() {
    $("#nomdot32").css("width", ".45em");
    $("#nomdot32").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot32").css("width", "0");
  });

$("#nom33")
  .mouseenter(function() {
    $("#nomdot33").css("width", ".45em");
    $("#nomdot33").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot33").css("width", "0");
  });

$("#nom34")
  .mouseenter(function() {
    $("#nomdot34").css("width", ".45em");
    $("#nomdot34").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot34").css("width", "0");
  });

$("#nom35")
  .mouseenter(function() {
    $("#nomdot35").css("width", ".45em");
    $("#nomdot35").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot35").css("width", "0");
  });

$("#nom36")
  .mouseenter(function() {
    $("#nomdot36").css("width", ".45em");
    $("#nomdot36").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot36").css("width", "0");
  });

$("#nom37")
  .mouseenter(function() {
    $("#nomdot37").css("width", ".45em");
    $("#nomdot37").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot37").css("width", "0");
  });
$("#nom38")
  .mouseenter(function() {
    $("#nomdot38").css("width", ".45em");
    $("#nomdot38").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot38").css("width", "0");
  });

$("#nom39")
  .mouseenter(function() {
    $("#nomdot39").css("width", ".45em");
    $("#nomdot39").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot39").css("width", "0");
  });

$("#nom40")
  .mouseenter(function() {
    $("#nomdot40").css("width", ".45em");
    $("#nomdot40").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot40").css("width", "0");
  });
$("#nom41")
  .mouseenter(function() {
    $("#nomdot41").css("width", ".45em");
    $("#nomdot41").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot41").css("width", "0");
  });
$("#nom42")
  .mouseenter(function() {
    $("#nomdot42").css("width", ".45em");
    $("#nomdot42").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot42").css("width", "0");
  });

$("#nom43")
  .mouseenter(function() {
    $("#nomdot43").css("width", ".45em");
    $("#nomdot43").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot43").css("width", "0");
  });

$("#nom44")
  .mouseenter(function() {
    $("#nomdot44").css("width", ".45em");
    $("#nomdot44").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot44").css("width", "0");
  });
$("#nom45")
  .mouseenter(function() {
    $("#nomdot45").css("width", ".45em");
    $("#nomdot45").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot45").css("width", "0");
  });

$("#nom46")
  .mouseenter(function() {
    $("#nomdot46").css("width", ".45em");
    $("#nomdot46").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot46").css("width", "0");
  });

$("#nom47")
  .mouseenter(function() {
    $("#nomdot47").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot47").css("display", "none");
  });

$("#nom48")
  .mouseenter(function() {
    $("#nomdot48").css("width", ".45em");
    $("#nomdot48").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot48").css("width", "0");
  });

$("#nom49")
  .mouseenter(function() {
    $("#nomdot49").css("width", ".45em");
    $("#nomdot49").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot49").css("width", "0");
  });

$("#nom50")
  .mouseenter(function() {
    $("#nomdot50").css("width", ".45em");
    $("#nomdot50").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot50").css("width", "0");
  });

$("#nom51")
  .mouseenter(function() {
    $("#nomdot51").css("width", ".45em");
    $("#nomdot51").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot51").css("width", "0");
  });

$("#nom52")
  .mouseenter(function() {
    $("#nomdot52").css("width", ".45em");
    $("#nomdot52").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot52").css("width", "0");
  });

$("#nom53")
  .mouseenter(function() {
    $("#nomdot53").css("width", ".45em");
    $("#nomdot53").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot53").css("width", "0");
  });

$("#nom54")
  .mouseenter(function() {
    $("#nomdot54").css("width", ".45em");
    $("#nomdot54").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot54").css("width", "0");
  });

$("#nom55")
  .mouseenter(function() {
    $("#nomdot55").css("width", ".45em");
    $("#nomdot55").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot55").css("width", "0");
  });

$("#nom56")
  .mouseenter(function() {
    $("#nomdot56").css("width", ".45em");
    $("#nomdot56").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot56").css("width", "0");
  });

$("#nom57")
  .mouseenter(function() {
    $("#nomdot57").css("width", ".45em");
    $("#nomdot57").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot57").css("width", "0");
  });

$("#nom58")
  .mouseenter(function() {
    $("#nomdot58").css("width", ".45em");
    $("#nomdot58").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot58").css("width", "0");
  });

$("#nom58a")
  .mouseenter(function() {
    $("#nomdot58a").css("width", ".45em");
    $("#nomdot58a").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot58a").css("width", "0");
  });

$("#nom59")
  .mouseenter(function() {
    $("#nomdot59").css("width", ".45em");
    $("#nomdot59").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot59").css("width", "0");
  });

$("#nom60")
  .mouseenter(function() {
    $("#nomdot60").css("width", ".45em");
    $("#nomdot60").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot60").css("width", "0");
  });
$("#nom61")
  .mouseenter(function() {
    $("#nomdot61").css("width", ".45em");
    $("#nomdot61").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot61").css("width", "0");
  });

$("#nom62")
  .mouseenter(function() {
    $("#nomdot62").css("width", ".45em");
    $("#nomdot62").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot62").css("width", "0");
  });

$("#nom63")
  .mouseenter(function() {
    $("#nomdot63").css("width", ".45em");
    $("#nomdot63").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot63").css("width", "0");
  });

$("#nom64")
  .mouseenter(function() {
    $("#nomdot64").css("width", ".45em");
    $("#nomdot64").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot64").css("width", "0");
  });

$("#nom49")
  .mouseenter(function() {
    $("#nomdot49").css("width", ".45em");
    $("#nomdot49").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot49").css("width", "0");
  });

$("#nom50")
  .mouseenter(function() {
    $("#nomdot50").css("width", ".45em");
    $("#nomdot50").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot50").css("width", "0");
  });

$("#nom51")
  .mouseenter(function() {
    $("#nomdot51").css("width", ".45em");
    $("#nomdot51").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot51").css("width", "0");
  });

$("#nom53")
  .mouseenter(function() {
    $("#nomdot53").css("width", ".45em");
    $("#nomdot53").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot53").css("width", "0");
  });

$("#nom49")
  .mouseenter(function() {
    $("#nomdot49").css("width", ".45em");
    $("#nomdot49").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot49").css("width", "0");
  });

$("#nom50")
  .mouseenter(function() {
    $("#nomdot50").css("width", ".45em");
    $("#nomdot50").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot50").css("width", "0");
  });

$("#nom51")
  .mouseenter(function() {
    $("#nomdot51").css("width", ".45em");
    $("#nomdot51").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot51").css("width", "0");
  });

$("#nom52")
  .mouseenter(function() {
    $("#nomdot52").css("width", ".45em");
    $("#nomdot52").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot52").css("width", "0");
  });

$("#nom53")
  .mouseenter(function() {
    $("#nomdot53").css("width", ".45em");
    $("#nomdot53").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot53").css("width", "0");
  });

$("#nom54")
  .mouseenter(function() {
    $("#nomdot54").css("width", ".45em");
    $("#nomdot54").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot54").css("width", "0");
  });
$("#nom55")
  .mouseenter(function() {
    $("#nomdot55").css("width", ".45em");
    $("#nomdot55").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot55").css("width", "0");
  });

$("#nom56")
  .mouseenter(function() {
    $("#nomdot56").css("width", ".45em");
    $("#nomdot56").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot56").css("width", "0");
  });

$("#nom57")
  .mouseenter(function() {
    $("#nomdot57").css("width", ".45em");
    $("#nomdot57").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot57").css("width", "0");
  });

$("#nom58")
  .mouseenter(function() {
    $("#nomdot58").css("width", ".45em");
    $("#nomdot58").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot58").css("width", "0");
  });
$("#nom59")
  .mouseenter(function() {
    $("#nomdot59").css("width", ".45em");
    $("#nomdot59").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot59").css("width", "0");
  });
$("#nom60")
  .mouseenter(function() {
    $("#nomdot60").css("width", ".45em");
    $("#nomdot60").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot60").css("width", "0");
  });
$("#nom61")
  .mouseenter(function() {
    $("#nomdot61").css("width", ".45em");
    $("#nomdot61").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot61").css("width", "0");
  });
$("#nom62")
  .mouseenter(function() {
    $("#nomdot62").css("width", ".45em");
    $("#nomdot62").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot62").css("width", "0");
  });
$("#nom63")
  .mouseenter(function() {
    $("#nomdot63").css("width", ".45em");
    $("#nomdot63").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot63").css("width", "0");
  });
$("#nom64")
  .mouseenter(function() {
    $("#nomdot64").css("width", ".45em");
    $("#nomdot64").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot64").css("width", "0");
  });
$("#nom65")
  .mouseenter(function() {
    $("#nomdot65").css("width", ".45em");
    $("#nomdot65").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot65").css("width", "0");
  });
$("#nom66")
  .mouseenter(function() {
    $("#nomdot66").css("width", ".45em");
    $("#nomdot66").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot66").css("width", "0");
  });
$("#nom67")
  .mouseenter(function() {
    $("#nomdot67").css("width", ".45em");
    $("#nomdot67").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot67").css("width", "0");
  });
$("#nom68")
  .mouseenter(function() {
    $("#nomdot68").css("width", ".45em");
    $("#nomdot68").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot68").css("width", "0");
  });
$("#nom69")
  .mouseenter(function() {
    $("#nomdot69").css("width", ".45em");
    $("#nomdot69").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot69").css("width", "0");
  });
$("#nom70")
  .mouseenter(function() {
    $("#nomdot70").css("width", ".45em");
    $("#nomdot70").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot70").css("width", "0");
  });
$("#nom71")
  .mouseenter(function() {
    $("#nomdot71").css("width", ".45em");
    $("#nomdot71").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot71").css("width", "0");
  });
$("#nom72")
  .mouseenter(function() {
    $("#nomdot72").css("width", ".45em");
    $("#nomdot72").css("display", "inline-block");
  })
  .mouseleave(function() {
    $("#nomdot72").css("width", "0");
  });

//--------------------------NAME DOT-------------------------//

//--------------------------TAPE DOT-------------------------//

$("#t01")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(1)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(1)").css("display", "none");
  });

$("#t02")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(2)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(2)").css("display", "none");
  });

$("#t03")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(3)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(3)").css("display", "none");
  });
$("#t04")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(4)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(4)").css("display", "none");
  });

$("#t05")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(5)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(5)").css("display", "none");
  });

$("#t06")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(6)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(6)").css("display", "none");
  });
$("#t07")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(7)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(7)").css("display", "none");
  });

$("#t08")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(8)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(8)").css("display", "none");
  });

$("#t09")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(9)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(9)").css("display", "none");
  });
$("#t10")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(10)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(10)").css("display", "none");
  });

$("#t11")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(11)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(11)").css("display", "none");
  });

$("#t12")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(12)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(12)").css("display", "none");
  });

$("#t13")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(13)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(13)").css("display", "none");
  });

$("#t14")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(14)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(14)").css("display", "none");
  });

$("#t15")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(15)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(15)").css("display", "none");
  });
$("#t16")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(16)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(16)").css("display", "none");
  });

$("#t17")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(17)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(17)").css("display", "none");
  });

$("#t18")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(18)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(18)").css("display", "none");
  });

$("#t19")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(19)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(19)").css("display", "none");
  });

$("#t20")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(20)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(20)").css("display", "none");
  });

$("#t21")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(21)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(21)").css("display", "none");
  });
$("#t22")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(22)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(22)").css("display", "none");
  });

$("#t23")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(23)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(23)").css("display", "none");
  });

$("#t24")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(24)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(24)").css("display", "none");
  });

$("#t25")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(25)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(25)").css("display", "none");
  });

$("#t26")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(26)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(26)").css("display", "none");
  });

$("#t27")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(27)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(27)").css("display", "none");
  });
$("#t28")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(28)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(28)").css("display", "none");
  });

$("#t29")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(29)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(29)").css("display", "none");
  });

$("#t30")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(30)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(30)").css("display", "none");
  });

$("#t31")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(31)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(31)").css("display", "none");
  });

$("#t32")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(32)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(32)").css("display", "none");
  });

$("#t33")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(33)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(33)").css("display", "none");
  });
$("#t34")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(34)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(34)").css("display", "none");
  });

$("#t35")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(35)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(35)").css("display", "none");
  });

$("#t36")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(36)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(36)").css("display", "none");
  });

$("#t37")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(37)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(37)").css("display", "none");
  });

$("#t38")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(38)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(38)").css("display", "none");
  });

$("#t39")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(39)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(39)").css("display", "none");
  });
$("#t40")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(40)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(40)").css("display", "none");
  });

$("#t41")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(41)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(41)").css("display", "none");
  });

$("#t42")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(42)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(42)").css("display", "none");
  });

$("#t43")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(43)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(43)").css("display", "none");
  });

$("#t44")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(44)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(44)").css("display", "none");
  });

$("#t45")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(45)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(45)").css("display", "none");
  });
$("#t46")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(46)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(46)").css("display", "none");
  });

$("#t47")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(47)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(47)").css("display", "none");
  });

$("#t48")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(48)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(48)").css("display", "none");
  });

$("#t49")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(49)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(49)").css("display", "none");
  });

$("#t50")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(50)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(50)").css("display", "none");
  });

$("#t51")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(51)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(51)").css("display", "none");
  });
$("#t52")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(52)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(52)").css("display", "none");
  });

$("#t53")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(53)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(53)").css("display", "none");
  });

$("#t54")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(54)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(54)").css("display", "none");
  });

$("#t55")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(55)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(55)").css("display", "none");
  });

$("#t56")
  .mouseenter(function() {
    $(".names-popup-container > .names:nth-child(56)").css("display", "block");
  })
  .mouseleave(function() {
    $(".names-popup-container > .names:nth-child(56)").css("display", "none");
  });


$("#nom9")
  .mouseenter(function() {
    $("#th1").css("display", "block");
  })
  .mouseleave(function() {
    $("#th1").css("display", "none");
  });

$("#nom63")
  .mouseenter(function() {
    $("#th2").css("display", "block");
  })
  .mouseleave(function() {
    $("#th2").css("display", "none");
  });

$("#nom13")
  .mouseenter(function() {
    $("#th3").css("display", "block");
  })
  .mouseleave(function() {
    $("#th3").css("display", "none");
  });

$("#nom19")
  .mouseenter(function() {
    $("#th4").css("display", "block");
  })
  .mouseleave(function() {
    $("#th4").css("display", "none");
  });

$("#nom20")
  .mouseenter(function() {
    $("#th5").css("display", "block");
  })
  .mouseleave(function() {
    $("#th5").css("display", "none");
  });

$("#nom42")
  .mouseenter(function() {
    $("#th6").css("display", "block");
  })
  .mouseleave(function() {
    $("#th6").css("display", "none");
  });

$("#nom49")
  .mouseenter(function() {
    $("#th7").css("display", "block");
  })
  .mouseleave(function() {
    $("#th7").css("display", "none");
  });

$("#nom8")
  .mouseenter(function() {
    $("#th8").css("display", "block");
  })
  .mouseleave(function() {
    $("#th8").css("display", "none");
  });

$("#nom22")
  .mouseenter(function() {
    $("#th9").css("display", "block");
  })
  .mouseleave(function() {
    $("#th9").css("display", "none");
  });

$("#nom24")
  .mouseenter(function() {
    $("#th10").css("display", "block");
  })
  .mouseleave(function() {
    $("#th10").css("display", "none");
  });

$("#nom58a")
  .mouseenter(function() {
    $("#th11").css("display", "block");
  })
  .mouseleave(function() {
    $("#th11").css("display", "none");
  });

$("#nom40")
  .mouseenter(function() {
    $("#th12").css("display", "block");
  })
  .mouseleave(function() {
    $("#th12").css("display", "none");
  });

$("#nom26")
  .mouseenter(function() {
    $("#th13").css("display", "block");
  })
  .mouseleave(function() {
    $("#th13").css("display", "none");
  });

$("#nom68")
  .mouseenter(function() {
    $("#th14").css("display", "block");
  })
  .mouseleave(function() {
    $("#th14").css("display", "none");
  });

$("#nom46")
  .mouseenter(function() {
    $("#th15").css("display", "block");
  })
  .mouseleave(function() {
    $("#th15").css("display", "none");
  });

$("#nom35")
  .mouseenter(function() {
    $("#th16").css("display", "block");
  })
  .mouseleave(function() {
    $("#th16").css("display", "none");
  });

$("#nom29")
  .mouseenter(function() {
    $("#th18").css("display", "block");
  })
  .mouseleave(function() {
    $("#th18").css("display", "none");
  });

$("#nom10")
  .mouseenter(function() {
    $("#th19").css("display", "block");
  })
  .mouseleave(function() {
    $("#th19").css("display", "none");
  });

$("#nom56")
  .mouseenter(function() {
    $("#th20").css("display", "block");
  })
  .mouseleave(function() {
    $("#th20").css("display", "none");
  });

$("#nom67")
  .mouseenter(function() {
    $("#th21").css("display", "block");
  })
  .mouseleave(function() {
    $("#th21").css("display", "none");
  });

$("#nom5")
  .mouseenter(function() {
    $("#th22").css("display", "block");
  })
  .mouseleave(function() {
    $("#th22").css("display", "none");
  });

$("#nom62")
  .mouseenter(function() {
    $("#th23").css("display", "block");
  })
  .mouseleave(function() {
    $("#th23").css("display", "none");
  });

$("#nom16")
  .mouseenter(function() {
    $("#th24").css("display", "block");
  })
  .mouseleave(function() {
    $("#th24").css("display", "none");
  });

$("#nom7")
  .mouseenter(function() {
    $("#th25").css("display", "block");
  })
  .mouseleave(function() {
    $("#th25").css("display", "none");
  });

$("#nom53")
  .mouseenter(function() {
    $("#th26").css("display", "block");
  })
  .mouseleave(function() {
    $("#th26").css("display", "none");
  });

$("#nom58")
  .mouseenter(function() {
    $("#th27").css("display", "block");
  })
  .mouseleave(function() {
    $("#th27").css("display", "none");
  });

$("#nom47")
  .mouseenter(function() {
    $("#th28").css("display", "block");
  })
  .mouseleave(function() {
    $("#th28").css("display", "none");
  });

$("#nom39")
  .mouseenter(function() {
    $("#th29").css("display", "block");
  })
  .mouseleave(function() {
    $("#th29").css("display", "none");
  });

$("#nom11")
  .mouseenter(function() {
    $("#th30").css("display", "block");
  })
  .mouseleave(function() {
    $("#th30").css("display", "none");
  });

$("#nom2")
  .mouseenter(function() {
    $("#th31").css("display", "block");
  })
  .mouseleave(function() {
    $("#th31").css("display", "none");
  });

$("#nom6")
  .mouseenter(function() {
    $("#th32").css("display", "block");
  })
  .mouseleave(function() {
    $("#th32").css("display", "none");
  });

$("#nom63")
  .mouseenter(function() {
    $("#th33").css("display", "block");
  })
  .mouseleave(function() {
    $("#th33").css("display", "none");
  });

$("#nom33")
  .mouseenter(function() {
    $("#th34").css("display", "block");
  })
  .mouseleave(function() {
    $("#th34").css("display", "none");
  });

$("#nom48")
  .mouseenter(function() {
    $("#th35").css("display", "block");
  })
  .mouseleave(function() {
    $("#th35").css("display", "none");
  });

$("#nom21")
  .mouseenter(function() {
    $("#th36").css("display", "block");
  })
  .mouseleave(function() {
    $("#th36").css("display", "none");
  });

$("#nom23")
  .mouseenter(function() {
    $("#th37").css("display", "block");
  })
  .mouseleave(function() {
    $("#th37").css("display", "none");
  });

$("#nom43")
  .mouseenter(function() {
    $("#th38").css("display", "block");
  })
  .mouseleave(function() {
    $("#th38").css("display", "none");
  });

$("#nom17")
  .mouseenter(function() {
    $("#th39").css("display", "block");
  })
  .mouseleave(function() {
    $("#th39").css("display", "none");
  });

$("#nom66")
  .mouseenter(function() {
    $("#th40").css("display", "block");
  })
  .mouseleave(function() {
    $("#th40").css("display", "none");
  });

$("#nom69")
  .mouseenter(function() {
    $("#th41").css("display", "block");
  })
  .mouseleave(function() {
    $("#th41").css("display", "none");
  });

$("#nom28")
  .mouseenter(function() {
    $("#th42").css("display", "block");
  })
  .mouseleave(function() {
    $("#th42").css("display", "none");
  });

$("#nom50")
  .mouseenter(function() {
    $("#th43").css("display", "block");
  })
  .mouseleave(function() {
    $("#th43").css("display", "none");
  });

$("#nom1")
  .mouseenter(function() {
    $("#th44").css("display", "block");
  })
  .mouseleave(function() {
    $("#th44").css("display", "none");
  });

$("#nom37")
  .mouseenter(function() {
    $("#th45").css("display", "block");
  })
  .mouseleave(function() {
    $("#th45").css("display", "none");
  });

$("#nom34")
  .mouseenter(function() {
    $("#th46").css("display", "block");
  })
  .mouseleave(function() {
    $("#th46").css("display", "none");
  });

$("#nom38")
  .mouseenter(function() {
    $("#th47").css("display", "block");
  })
  .mouseleave(function() {
    $("#th47").css("display", "none");
  });

$("#nom65")
  .mouseenter(function() {
    $("#th48").css("display", "block");
  })
  .mouseleave(function() {
    $("#th48").css("display", "none");
  });

$("#nom52")
  .mouseenter(function() {
    $("#th49").css("display", "block");
  })
  .mouseleave(function() {
    $("#th49").css("display", "none");
  });

$("#nom57")
  .mouseenter(function() {
    $("#th50").css("display", "block");
  })
  .mouseleave(function() {
    $("#th50").css("display", "none");
  });

$("#nom32")
  .mouseenter(function() {
    $("#th51").css("display", "block");
  })
  .mouseleave(function() {
    $("#th51").css("display", "none");
  });

$("#nom59")
  .mouseenter(function() {
    $("#th52").css("display", "block");
  })
  .mouseleave(function() {
    $("#th52").css("display", "none");
  });

$("#nom54")
  .mouseenter(function() {
    $("#th53").css("display", "block");
  })
  .mouseleave(function() {
    $("#th53").css("display", "none");
  });

$("#nom36")
  .mouseenter(function() {
    $("#th54").css("display", "block");
  })
  .mouseleave(function() {
    $("#th54").css("display", "none");
  });