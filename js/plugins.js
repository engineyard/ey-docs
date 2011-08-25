// Navigation Shinanigans
(function($){

  $(document).ready(function(){
    $(".subnav > ul > li").each(function(){
      
      var li = $(this);
      var firstlink = $(this).find('> a');
      
      if (li.has("ul").length) {
        firstlink.addClass('arrow');
        $(this).find('> ul > li').each(function() {
          var deepli = $(this);
          if (deepli.has("a[href=\"" + document.location.pathname + "\"]").length != 0) {
            deepli.addClass('selected');
          }
        });
      }
      
      if (firstlink.attr('href') == document.location.pathname) {
        li.addClass('selected expanded');
        firstlink.addClass('selected');
      } else if (li.has("a[href=\"" + document.location.pathname + "\"]").length != 0) {
        li.addClass('selected parent expanded');
        firstlink.addClass('selected');
      } else {
        li.addClass("collapsed"); 
        li.find("ul").hide();
      }
      
    });
  });                                            
})(this.jQuery);