var AccessKeys = {
  generate: function(){
    var access_keys = [];
    
    $$('a').each(function(link){
      if(link.accessKey){
        access_keys.push([link.accessKey, link.innerHTML]);
      }
    });
    
    $$('input[type=button]', 'input[type=submit]').each(function(button){
      if(button.accessKey){
        access_keys.push([button.accessKey, button.value]);
      }
    });
    
    if(access_keys.size() > 0)
    {
      var html = '<h3>Access Keys</h3><ul>';
      
      access_keys.each(function(ak){
        html += "<li>" + ak[0].toUpperCase() + ' - ' + ak[1] + '</li>';
      });
      
      html += '</ul>';

      AccessKeys.insert(html);
    }
  },
  insert: function(html){
    var target = $('access_keys');
    if(target==null)
    {
      target = $$('body')[0];
      html = "<div id='access_keys'>" + html + "</div";
    }
    target.insert(html);
  }
}

document.observe('dom:loaded', AccessKeys.generate);
