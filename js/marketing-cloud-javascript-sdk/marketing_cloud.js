(function($) {
  window.MarketingCloud = {
    env:   {},
    wsse:  new Wsse(),

    /** Make the api request */
    /* callback should follow standard jQuery request format:
     *    function callback(data)
     */
    makeRequest: function (username, secret, method, params, endpoint, callback)
    {
		//console.log('Inside make Request function: ' + username + secret + method + params + endpoint);
        var headers = MarketingCloud.wsse.generateAuth(username, secret);
        var url = 'https://'+endpoint+'/admin/1.4/rest/?method='+method;
		//console.log("url:  " + url);
        $.ajax(url, {
            type:'POST',
            data: params,
            complete: callback,
            dataType: "json",
            headers: {
                'X-WSSE': headers['X-WSSE']
            }
        });
		//console.log('After ajax call');
    }
  };
})(jQuery);
