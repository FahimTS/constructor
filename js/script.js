$(document).ready(function(){
    $('.slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
      });
  });

$(document).ready(function(){
    $('.rs-count').counterUp({
        delay: 10,
        time: 1000
    });
});

const filterButtons = document.querySelectorAll('.project-gridFilter button');
const filterItem = document.querySelectorAll('.projectCard .project-item');

const filterCards = (e) => {
    document.querySelector('.pro-active').classList.remove('pro-active');
    e.target.classList.add('pro-active')
    filterItem.forEach(card => {
        card.classList.add('hide');
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        card.classList.remove('hide');
    }
    });
}

filterButtons.forEach(button => button.addEventListener('click', filterCards))

// const popbtn = document.querySelector('.prevent');
// popbtn.onclick = function(e){
//     e.preventDefault();
// }


function toggle(){
    let clip = document.querySelector('.clip');
    clip.classList.toggle('vdactive')
    let video = document.querySelector('video');
    video.play();
}

$(document).ready(function(){
    $('.testi-item-one').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:6,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsiveClass: true,
        responsive: {
            0: {
              items: 2
            },
            490:{
              items: 2
            },
            600: {
              items: 4
            },
        
            1024: {
              items: 6
            },
        
            1366: {
              items: 6
            }
          }
    });;
  });

function menubar(){
    let menubar = document.querySelector('.menu-bar');
    menubar.classList.toggle('menutoggle')
}

// let menuBar = document.querySelector('.menu-bar');
// let menuDots = document.querySelector('.menu-dots');
// let closeBar = document.querySelector('.close');
// menuDots.addEventListener('click', () => {
//     menuDots.classList.toggle('menutoggle')
//     menuBar.classList.toggle('menutoggle')
//     closeBar.classList.toggle('menutoggle')
// })

window.addEventListener('scroll', function(){
  var header = this.document.querySelector('.menu-area');
  header.classList.toggle('sticky', window.scrollY > 0)
})

// scroll up top button
$(document).ready( function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#scrollUp').fadeIn();
    }else{
      $('#scrollUp').fadeOut();
    }
  });

  $('#scrollUp').click(function(){
    $('html, body').animate({scrollTop : 0}, 800);
  });
});