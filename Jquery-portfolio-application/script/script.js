var main = function(){

  //dropdown function
  $('.projects').mouseenter(function(){
    $(this).find('ul').stop( true, true ).show(function(){
      $(this).slideDown();
    })
  });

  $('.projects').mouseleave(function(){
    $(this).find('ul').stop( true, true ).hide(function(){
      $(this).slideUp();

    });
  });

  $('.projects p').click(function(){
    $('html, body').animate({
      scrollTop: $elem.height()+5
    }, 800);
  });


  $('.experience').click(function(){
    $('html, body').animate({
      scrollTop: $elem.height()+$elem.height()+4
    }, 800)
  })

  // $('.experience').mouseenter(function(){
  //   $(this).find('ul').stop( true, true ).show(function(){
  //     $(this).slideDown();
  //   });
  // });
  //
  // $('.experience').mouseleave(function(){
  //   $(this).find('ul').stop( true, true ).hide(function(){
  //     $(this).slideUp();
  //   });
  // });

  $('.section-1 .menu-bar .projects .dropdown-menu').children().eq(0).click(function(){
    $('#accordion').accordion('option','active', 0);
    openAccordion();
  });

  $('.section-1 .menu-bar .projects .dropdown-menu').children().eq(1).click(function(){
    $('#accordion').accordion('option','active', 1);
    openAccordion();
  });

  $('.section-1 .menu-bar .projects .dropdown-menu').children().eq(2).click(function(){
    $('#accordion').accordion('option','active', 2);
    openAccordion();
  });




//click dialog
dialogAppear('.section-1 .dropdown.contact', '.section-1');

  //To scroll to section-2 when clicking the 'v' button on section-1
  var $elem = $('.section-2');

  $('span.glyphicon.glyphicon-chevron-down').click(function(e){
    $('html, body').animate({
      scrollTop: $elem.height()+5
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
    openAccordion();
  });
  $('.ui-accordion-header:nth-child(3)').click(function(){
    openAccordion();
  });
  $('.ui-accordion-header:nth-child(5)').click(function(){
    openAccordion();
  });

  //when the glyphicon-chevron-up in the accordion-content is clicked, the accordion closes

  $('#accordion .footer .glyphicon-chevron-up').click(function(){
    $('#accordion').accordion('option','active', 'false');
    defaultHeight_section2();
    $('body').css('overflow', 'visible');
  });

  //colorbox API: When the image or slideshow button is clicked, then use colorbox API to display the slideshow of the images

/*Android Applications*/
  //Futuroid
  $('#first .images .futuroidBtn').click(function(){
    $('.futuroid').colorbox({rel:'futuroid', transition: "fade", height: "600px", width: "400px"});
  });
  //CalculatorApp
  $('#first .images .calculatorAppBtn').click(function(){
    $('.calculatorApp').colorbox({rel:'calculatorApp', transition: "fade", height: "600px", width: "600px"})
  })
  //phoneBookApp
  $('#first .images .phoneBookAppBtn').click(function(){
    $('.phoneBookApp').colorbox({rel:'phoneBookApp', transition: "fade", height: "600px", width: "600px"});
  });

/*Web Applications*/
  //AngularJS Project
  $('#second .images .angularProject').click(function(){
    $('.group1').colorbox({rel:'group1', transition: "fade", height: "453px", width: "845px"});
  });
  //MunchyMap
  $('#second .images .MunchyMapBtn').click(function(){
    $('.MunchyMap').colorbox({rel:'MunchyMap', transition: "fade", height: "453px", width: "845px"});
  });


/*In Development*/
  //first-portfolio
  $('#third .images .first-portfolioBtn').click(function(){
    $('.first-portfolio').colorbox({rel:'first-portfolio', transition: "fade", height: "453px", width: "845px"})
  });
  //searchBookApp
  $('#third .images .searchBookAppBtn').click(function(){
    $('.searchBookApp').colorbox({rel:'searchBookApp', transition: "fade", height: "600px", width: "600px"})
  })



  //MunchyMap
  $('#second .th')

  $('.iframe').click(function(){
    $(this).colorbox({
      iframe:true,
      width:"90%",
      height:"90%"
    });
  });

  $("ul#demo_menu1").sidebar();


  $(document).scroll(function(){
    var y = $(this).scrollTop();
    if (y > 1400) {
      $('div.sidebar-container').fadeIn();
    }
    else {
      $('div.sidebar-container').fadeOut();
    }
  });

  dialogAppear('#demo_menu1 .sidebar-content.button .btn', '.section-3');





}


var openAccordion = function(){
  var active = $( "#accordion").accordion( "option", "active");
  console.log(active);
  if (active !== false){
    $('.section-2').css('height', '92.35em');
    $('body').css('overflow', 'hidden');
  }
  else if (active === false){
    defaultHeight_section2();
    $('body').css('overflow', 'visible');
  }
}

var defaultHeight_section2 = function(){
  $('html, body').animate({
    scrollTop: 747 //section-2's default height
  }, 800);
  $('html, body').promise().done(function(){
    $('.section-2').css('height', '53.55em');
  });
}

var dialogAppear = function(selector, background_section){
  $(selector).on('click', function(){
    $('body').css('overflow', 'hidden');
    $(background_section).fadeTo(350, 0.6);
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
        $('body').css('overflow', 'visible');
        $(background_section).fadeTo(600, 1);
      }

    }
  ]
    });
  });
}


$(document).ready(main);
