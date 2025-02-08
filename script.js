let gallery = document.getElementById('gallery');

function slideright(){
    gallery.scrollLeft += 400
}

function slideLeft(){
    gallery.scrollLeft -= 400
}

// swiper code starts here

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//popup code starts here
let popup = document.getElementById('popup')
let close = document.getElementById('close')
let body = document.body;

function openpopup(){
  popup.style.display = 'flex';
  body.classList.add("body-fixed");
}

function closepopup(){
  popup.style.display = 'none'
  body.classList.remove("body-fixed");
}

//sidebar code starts here
$(document).ready(function(){
  $('.lists').click(function(){
    $('.mb-sidebar').css('display','block','slow')
  })
})

$(document).ready(function(){
  $('.mb-close').click(function(){
    $('.mb-sidebar').css('display','none')
  })
})

//faqs code starts here
$(document).ready(function(){
  $('#q1').click(function(){
    $('#a1').toggle(1000)
  })
})

$(document).ready(function(){
  $('#q2').click(function(){
    $('#a2').toggle(1000)
  })
})

$(document).ready(function(){
  $('#q3').click(function(){
    $('#a3').toggle(1000)
  })
})

$(document).ready(function(){
  $('#q4').click(function(){
    $('#a4').toggle(1000)
  })
})

$(document).ready(function(){
  $('#q5').click(function(){
    $('#a5').toggle(1000)
  })
})

//scroll to top
function scrolltotop(){
  document.documentElement.scrollTop = 0;
}
