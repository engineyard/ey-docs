
// remap jQuery to $
(function($){

  $(document).ready(function()
                    {

                      jQuery("#sidebar").find("li").each(function(){
                        var li = jQuery(this);
                        if ( li.has("ul").length ) {
                          var hide = li.has("a[href=\"" + document.location.pathname + "\"]").length == 0;

                          	if ( hide ) { li.addClass("collapsed"); }
						  	else 		{ li.addClass("expanded"); }
							
							// Add active class to link on currently active page.
							li.find("a[href=\"" + document.location.pathname + "\"]").addClass("active");

                          li.click(function(event){
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
                            li.find("ul").hide();
                          }

                        }
                      });
                    });

})(this.jQuery);