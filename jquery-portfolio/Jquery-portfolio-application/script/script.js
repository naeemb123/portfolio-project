var main = function(){

  //dropdown function
  $('.projects').mouseenter(function(){
    $(this).find('ul').show(function(){
      $(this).slideDown();
    })
  });

  $('.projects').mouseleave(function(){
    $(this).find('ul').hide(function(){
      $(this).slideUp();
    });
  });

  $('.experience').mouseenter(function(){
    $(this).find('ul').show(function(){
      $(this).slideDown();
    });
  });

  $('.experience').mouseleave(function(){
    $(this).find('ul').hide(function(){
      $(this).slideUp();
    });
  });

  $('.contact').on('click', function(){
    $('#dialog').dialog({
      closeOnEscape: true,
      modal: true,
      height: 380,
      width: 600,
      show: {
        effect: "blind",
        duration: 500
      },
      hide: {
        effect: 'explode',
        duration: 300
      },
      buttons: [
    {
      text: "Ok",
      icons: {
        primary: "ui-icon-heart"
      },
      click: function() {
        $( this ).dialog( "close" );
      }

    }
  ]
    });
  });

  //To scroll to section-2 when clicking the 'v' button on section-1
  var $elem = $('.section-2');

  $('span.glyphicon.glyphicon-chevron-down').click(function(e){
    $('html, body').animate({
      scrollTop: $elem.height()
    }, 800);
  });

  //When the accordion header is clicked, the page will move up until the accordion-header is at the top
  $( "#accordion" ).accordion({
    autoHeight: false,
    collapsible: true,
    active: false,
    activate: function( event, ui ) {
    if(!$.isEmptyObject(ui.newHeader.offset())) {
        $('html:not(:animated), body:not(:animated)').animate({ scrollTop: ui.newHeader.offset().top -10 }, 'medium');
    }
    $('.ui-accordion-content').animate({scrollTop: 0}, 'fast');
  },
    animate: { easing: 'easeOutBounce', duration: 550}
});


//when accordion header is clicked, the section-2 gets more height to fit the content.
//it also removes the height when the accordion-closes
//it also scrolls to view the entire section-2 as it was initially again
  $('.ui-accordion-header:first-child').click(function(){
      var active = $( "#accordion").accordion( "option", "active");
      console.log(active);
      if (active !== false){
        $('.section-2').css('height', '92.35em');
      }
      else if (active === false){
        defaultHeight_section2();
      }
  });

  $('.ui-accordion-header:nth-child(3)').click(function(){
    var active = $( "#accordion").accordion( "option", "active");
    console.log(active);
    if (active !== false){
      console.log("afssd");
      $('.section-2').css('height', '92.35em');
    }
    else if (active === false){
      defaultHeight_section2();
    }
  });

  $('.ui-accordion-header:nth-child(5)').click(function(){

    console.log("yo");
    var active = $( "#accordion").accordion( "option", "active");
    console.log(active);
    if (active !== false){
      console.log("afssd");
      $('.section-2').css('height', '92.35em');
    }
    else if (active === false){
      defaultHeight_section2();
    }
  });

  //when the glyphicon-chevron-up in the accordion-content is clicked, the accordion closes

  $('#accordion .footer .glyphicon-chevron-up').click(function(){
    $('#accordion').accordion('option','active', 'false');
    defaultHeight_section2();
  });

  //colorbox API: When the image or slideshow button is clicked, then use colorbox API to display the slideshow of the images

  $('#second .thumbnail').click(function(){
    $('.group1').colorbox({rel:'group1', transition: "fade", height: "490px", width: "700px"});
  });

  $('#second .images .btn').click(function(){
    $('.group1').colorbox({rel:'group1', transition: "fade", height: "490px", width: "700px"});
  });

  $('.iframe').click(function(){
    $(this).colorbox({iframe:true, width:"80%", height:"80%"});
  });

  $("ul#demo_menu1").sidebar();

  


}

var defaultHeight_section2 = function(){
  $('html, body').animate({
    scrollTop: 747 //section-2's default height
  }, 800);
  $('html, body').promise().done(function(){
    $('.section-2').css('height', '53.55em');
  });
}

$(document).ready(main);
