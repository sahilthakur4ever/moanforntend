function showcarddiv() {
  var x = document.getElementById("my_account_payment_add_card");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
$(document).ready(function () {
    

    $(function () {
        var current = window.location.href;
        console.log(current);
        $(".header_links ul .header_links_li a").each(function () {
            // if the current path is like this link, make it active
            if (this.href == current) {
                $(this).parents('.header_links_li').addClass("headerractive");
            }
        });
    });

  

     $(".category_m .rcmvideocard").on('click', function(){
     window.location.href = "singlecategory.html";    
    });

     $(".creators_m_wrapper  .creators_profile").on('click', function(){
     window.location.href = "creatorsprofile.html";    
    });


       $(".modelss_m .rcmvideocard").on('click', function(){
     window.location.href = "modelprofile.html";    
    });

       $(" .result_video_card .rcmvideocard").on('click', function(){
     window.location.href = "videoplay.html";    
    });

        

       $("#slider-range").slider({
    range: true,
    min: 0,
    max: 1440,
    step: 15,
    values: [540, 1020],
    slide: function (e, ui) {
        var hours1 = Math.floor(ui.values[0] / 60);
        var minutes1 = ui.values[0] - (hours1 * 60);

        if (hours1.length == 1) hours1 = '0' + hours1;
        if (minutes1.length == 1) minutes1 = '0' + minutes1;
        if (minutes1 == 0) minutes1 = '00';
        if (hours1 >= 12) {
            if (hours1 == 12) {
                hours1 = hours1;
                minutes1 = minutes1 + " PM";
            } else {
                hours1 = hours1 - 12;
                minutes1 = minutes1 + " PM";
            }
        } else {
            hours1 = hours1;
            minutes1 = minutes1 + " AM";
        }
        if (hours1 == 0) {
            hours1 = 12;
            minutes1 = minutes1;
        }



        $('.slider-time').html(hours1 + ':' + minutes1);

        var hours2 = Math.floor(ui.values[1] / 60);
        var minutes2 = ui.values[1] - (hours2 * 60);

        if (hours2.length == 1) hours2 = '0' + hours2;
        if (minutes2.length == 1) minutes2 = '0' + minutes2;
        if (minutes2 == 0) minutes2 = '00';
        if (hours2 >= 12) {
            if (hours2 == 12) {
                hours2 = hours2;
                minutes2 = minutes2 + " PM";
            } else if (hours2 == 24) {
                hours2 = 11;
                minutes2 = "59 PM";
            } else {
                hours2 = hours2 - 12;
                minutes2 = minutes2 + " PM";
            }
        } else {
            hours2 = hours2;
            minutes2 = minutes2 + " AM";
        }

        $('.slider-time2').html(hours2 + ':' + minutes2);
    }
});

});

    $(document).ready(function(){



    $('.recommend_videos_m_m').slick({
  slidesToShow: 1.7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: .5,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

       $('.creator_dashboard_m_carosuel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: .5,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

    $('.header_adss_m').slick({
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase:"linear",
  speed: 1400,
   responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
          slidesToShow: 7,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
         slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
});
    });

    // Header Nav Start
    $(document).ready(function(){

    // Responsive Navbar JS Start
    (function($) {
  "use strict";
  var openBtn = $("#open-button"),
    colseBtn = $("#close-button"),
    menu = $(".menu-wrap");
  // Open menu when click on menu button
  openBtn.on("click", function() {
    menu.addClass("active");
    $("#forbackkblur").addClass("forbackkblur");
  });
  // Close menu when click on Close button
  colseBtn.on("click", function() {
    menu.removeClass("active");
    $("#forbackkblur").removeClass("forbackkblur");
  });
  // Close menu when click on anywhere on the document
      $(document).on("click", function(e) {
        var target = $(e.target);
        if (target.is(".menu-wrap, .menu, .icon-list, .icon-list a, .icon-list a span, #open-button") === false) {
          menu.removeClass("active");
          $("#forbackkblur").removeClass("forbackkblur");
          e.stopPropagation();
        }
      });
    })(jQuery);
    // Responsive Navbar JS End

});
// Header Nav End


    document.addEventListener('DOMContentLoaded', () => {
        // Controls (as seen below) works in such a way that as soon as you explicitly define (add) one control
        // to the settings, ALL default controls are removed and you have to add them back in by defining those below.

        // For example, let's say you just simply wanted to add 'restart' to the control bar in addition to the default.
        // Once you specify *just* the 'restart' property below, ALL of the controls (progress bar, play, speed, etc) will be removed,
        // meaning that you MUST specify 'play', 'progress', 'speed' and the other default controls to see them again.

        const controls = [
            'play-large', // The large play button in the center
            'restart', // Restart playback
            'rewind', // Rewind by the seek time (default 10 seconds)
            'play', // Play/pause playback
            'fast-forward', // Fast forward by the seek time (default 10 seconds)
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'pip', // Picture-in-picture (currently Safari only)
            'airplay', // Airplay (currently Safari only)
            'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
            'fullscreen' // Toggle fullscreen
        ];

        const player = Plyr.setup('.js-player', { controls });

    });

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const addExperienceBtn = document.querySelector(".add-exp-btn");
const experiencesGroup = document.querySelector(".experiences-group");

let formStepsNum = 0;

function updateFormSteps() {

    formSteps.forEach(formStep => {
        formStep.classList.contains("active") &&
            formStep.classList.remove("active");
    })
    formSteps[formStepsNum].classList.add("active");
}

function updateProgressBar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add("active");
        } else {
            progressStep.classList.remove("active");
        }
    })

    const progressActive = document.querySelectorAll(".progress-step.active");
    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + '%';
}


nextBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        formStepsNum++;
        updateFormSteps();
        updateProgressBar();
    })
})


prevBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        formStepsNum--;
        updateFormSteps();
        updateProgressBar();
    })
})



prevBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        formStepsNum--;
        updateFormSteps();
        updateProgressBar();
        console.log("kk")
    })
})


