
// remap jQuery to $
(function($){

  $(document).ready(function()
                    {

                      jQuery("#sidebar").find("li").each(function(){
                        var item = jQuery(this);
                        if ( item.has("ul").length ) {
                          var hide = item.has("a[href=\"" + document.location.pathname + "\"]").length == 0;

                          if ( hide ) {
                            item.addClass("collapsed");
                          } else {
                            item.addClass("expanded");
                          }

                          item.click(function(event){
                            if ( this == event.target ) {
                              item1 = jQuery(this);
                              var collapsed = item1.hasClass("collapsed");
                              item1.removeClass("expanded collapsed")
                                .addClass(collapsed ? "expanded" : "collapsed")
                                .children("ul").toggle();
                              return false;
                            }
                          });

                          if ( hide ) {
                            item.find("ul").hide();
                          }

                        }
                      });
                    });

})(this.jQuery);