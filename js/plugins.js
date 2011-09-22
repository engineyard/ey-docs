// Navigation Shinanigans
(function($){

  $(document).ready(function(){
    
    var setselected = function($obj) {
      $obj.find('> ul > li').each(function() {
        var $deepli = $(this);
        if ($deepli.has("a[href=\"" + document.location.pathname + "\"]").length != 0) {
          $deepli.addClass('selected');
          initnav($deepli);
        }
      });
    };
    
    var showchildren = function($obj) {
      $obj.removeClass('collapsed');
      $obj.find("ul").show();
    }
    
    var initnav = function($obj) {
      // collapse and hide children
      $obj.addClass("collapsed"); 
      $obj.find("ul").hide();
      addarrow($obj);
      expandnav($obj);
    }
    
    var addarrow = function($obj) {
      // Add arrow if li has children
      if ($obj.has("ul").length) { $obj.find('> a').addClass('arrow'); }
    }
    
    var expandnav = function($obj) {
      $link = $obj.find('> a');
      // expand and select if link is active
      if ($link.attr('href') == document.location.pathname) {
        $obj.addClass('selected expanded');
        selectandshowchildren($obj,$link)
      // expand if child link is active
      } else if ($obj.has("a[href=\"" + document.location.pathname + "\"]").length != 0) {
        $obj.addClass('selected parent expanded');
        selectandshowchildren($obj,$link)
      }
    }
    
    var selectandshowchildren = function($obj,$link) {
      $link.addClass('selected');
      showchildren($obj);
      setselected($obj);
    }
    
    $(".subnav > ul > li").each(function(){
      initnav($(this));
    });
  });                                            
})(this.jQuery);