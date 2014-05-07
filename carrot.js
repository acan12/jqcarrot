(function($class, $color) {
  
  var carrot = {
      init: function(options){
        $class = '.'+options.class_name;
        this.mouseEnter(options);
        this.mouseLeave(options);
        this.mouseClick(options);
      },
      
      mouseEnter: function(options){
        
        $(options.element).bind('mouseenter', function(){
            $($class).css({'background-color': ''})
            carrot.show_rating_colors(this, options.data_rating_colors);
            options.hover_callback();
        })
      },
      
      mouseLeave: function(options){
        $(options.element).bind('mouseout', function(){
            carrot.reset_all_ratings();
            options.mouseleave_callback();
        })
      },
      mouseClick: function(options){
        $(options.element).bind('click', function(){
            // reset class to default
            $(this).nextAll().removeClass('crh-rating-sel');
          
            color = $(this).css('background-color');
            count = $(this).prevAll().andSelf().length
            $color =  color;
            carrot.set_rating_colors(this, carrot.makeArrayOf(color, count))
            

            options.click_callback(this);
        });
      },
      makeArrayOf: function(value, length){
        var arr = [], i = length;
        while (i--) { arr[i] = value; }
        return arr;
      },
      
      
      // private 
      set_rating_colors: function(elem, colors){
        $(elem).prevAll().andSelf().each(function(i){
          $(this).addClass('crh-rating-sel').css({'background-color': colors[i]});
        });
      },
      
      show_rating_colors: function(elem, colors){
        $(elem).prevAll().andSelf().each(function(i){
          $(this).css({'background-color': colors[i]});
        });
      },
      
      reset_all_ratings: function(){
        $('.crh-rating-sel').css({'background-color': $color})
        $($class).not('.crh-rating-sel').css({'background-color': ''})
        
      }
      
  };
  
  $.fn.cRateHover = function(options) {
      var defaults = {
        element : undefined,
        class_name : 'bar',
    		data_rating_values : [1,2,3,4,5,6,7,8,9],
    		data_rating_colors : ['#CB202D', '#DE1D0F', '#FF7800', '#ffba00', '#edd614', '#9acd32', '#5ba829', '#3f7e00', '#305d02'],
    		hover_callback  : function(){},
    		mouseleave_callback  : function(){},
    		click_callback  : function(){}
    	}
      var options = $.extend(defaults, options);
      
      
      return this.each(function(){
          options.element = this;
          carrot.init(options);
      })
  };
})(jQuery);