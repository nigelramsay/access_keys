;$(function($){
  
  $.extend($.fn, {
    
    show_access_keys: function() {
    	var self = this;

      self.empty();
      $('<h3>').text('Access Keys').appendTo(self)

      $('body').find('*[accessKey]').each( function(i, key) {
        $('<li>')
          .text($(key).attr('accessKey') + " - " + $(key).val() + $(key).text())
          .appendTo(self);
      })

    }
    
  })
  
})

