'use strict';
/****************************************
NAVBAR jquery
****************************************/
// This is to open the expanding and overlay nav-bar with the three bars //
 $('#nav-expander').on('click', function(e) {
    e.preventDefault();
    $('nav').toggleClass('nav-expanded');
    $('.navbar__overlay').show();
});
// This is to open and close the expanding nav-bar with the three bars //

// This is to close the expanding nav-bar with the cancel button //
 $('.menu .close').on('click', function(e) {
    e.preventDefault();
    $('nav').toggleClass('nav-expanded');
    $('.navbar__overlay').hide();
});
// This is to close the expanding nav-bar with the cancel button //

// To close offsite navigation after user click on an link in navigation //
$('.nav__close__onclick  a').on('click', function(e) {
    //se.preventDefault();
    $('nav').removeClass('nav-expanded');
    $('.navbar__overlay').hide();
});
// To close offsite navigation after user click on an link in navigation //

// To close overlay after user click on an link in navigation //
$('.navbar__overlay').on('click', function(e) {
    //e.preventDefault();
    $('nav').removeClass('nav-expanded');
    $('.navbar__overlay').hide();
});
// To close overlay after user click on an link in navigation //

// To change to the categories after clicking the category link navigation //
$('.category').on('click', function(e) {
   e.preventDefault();
   $('.navbar__two').show();
   $('.navbar__one').hide();
});
// To change to the categories after clicking the category link navigation //

// To change to the main menu after clicking the back link navigation //
$('.back').on('click', function(e) {
   e.preventDefault();
   $('.navbar__one').show();
   $('.navbar__two').hide();
});
// To change to the main menu after clicking the back link navigation //

// If category is displayed them main menu shouldn't //
if($('.navbar__one').is(':visible')) {
  $('.navbar__two').hide();
}
// If category is displayed them main menu shouldn't //

/****************************************
NAVBAR jquery ending
****************************************/





/****************************************
jquery profile upload
****************************************/
//Function to show image before upload

$(document).ready(function() {

  // Prepare the preview for profile picture
    $("#wizard-picture").change(function(){
        readURL(this);
    });
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}
/****************************************
jquery profile upload ending
****************************************/





/****************************************
javascript tags
****************************************/
(function() {
  var app;

  $(document).ready(function() {
    return app.init();
  });

  app = {
    can_delete: false,
    can_delete_id: 0,
    init: function() {
      return this.bind_events();
    },
    bind_events: function() {
      $(document).on("click", ".tags .tag", function(e) {
        var index;
        index = $(this).index() + 1;
        return app.delete_tag(index);
      });
      return $(document).on("keyup", ".tags input", function(e) {
        var key;
        key = e.keyCode || e.which;
        if (key === 13 || key === 188) {
          app.add_tag($(this).val().replace(",", ""));
          return $(this).val("");
        } else if (key === 8) {
          if ($(this).val() === "") {
            return app.delete_tag();
          }
        } else {
          app.can_delete = false;
          return $(".highlight").removeClass("highlight");
        }
      });
    },
    delete_tag: function(id) {
      if (id == null) {
        id = 0;
      }
      if (this.can_delete && id === this.can_delete_id) {
        $(".tags .tag.highlight").remove();
        this.can_delete = false;
        return this.can_delete_id = 0;
      } else {
        $(".tags .tag").removeClass("highlight");
        this.can_delete = true;
        if (!id) {
          $(".tags .tag:last-of-type").addClass("highlight");
          return this.can_delete_id = 0;
        } else {
          $(".tags .tag:nth-of-type(" + id + ")").addClass("highlight");
          return this.can_delete_id = id;
        }
      }
    },
    add_tag: function(name) {
      if (name !== "") {
        return $(".tags input").before("<div class='tag'>" + name + "</div>");
      }
    }
  };

}).call(this);
/****************************************
javascript tags ending
****************************************/
/*function test(event) {
    event.preventDefault()
    console.log(event.target.className)
    if(event.target.className === "card-img-top" || event.target.className === "project__card" || event.target.className === "card_text" ) {
      return console.log('open here in new one!!!');
    }

    if(event.target.className === "card__gig__bookmark__styling") {
      return console.log('my chicken is big for the breakfast!!!!')
    }
}*/

function closemodal(event) {
  event.preventDefault()
  console.log('hello')
}


/****************************************
javascript log modal
****************************************/
var log__modal = document.getElementById('log__modal');

var logClose = document.getElementById('close__log__modal');

var logOpen = document.getElementById('open__log__modal');


logClose.onclick = function(){
  log__modal.style.display = 'none';
}

logOpen.onclick = function(){
  log__modal.style.display = 'block';
}

log__modal.onclick = function(){

  if(event.target == log__modal){
        log__modal.style.display = "none";
    }

}
/****************************************
javascript log modal ending
****************************************/
/****************************************
profile details modal
****************************************/
var profileDetails__modal = document.getElementById('skill__profile__details__modal');

var profileDetailsClose = document.getElementById('skill__profile__details__modal__cancel');

var profileDetailsOpen = document.getElementById('open__skill__profile__details__modal');


profileDetailsClose.onclick = function(){
  skill__profile__details__modal.style.display = 'none';
}

/****************************************
profile details modal ending
****************************************/

/****************************************
project details modal
****************************************/
var profileDetails__modal = document.getElementById('project__details__modal');

var profileDetailsClose = document.getElementById('project__details__modal__cancel');

var profileDetailsOpen = document.getElementById('open__project__details__modal');


profileDetailsClose.onclick = function(){
  project__details__modal.style.display = 'none';
}

/****************************************
project details modal ending
****************************************/
