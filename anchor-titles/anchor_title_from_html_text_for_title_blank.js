jQuery.each(jQuery('a'), function(index, value) {
    if (jQuery(value).attr('title') == undefined || jQuery(value).attr('title') == '') {
        jQuery(value).attr('title', $(value).text());
    }
});
    
    // escape &amp; html elements
    // escape <img> tags
    // escape & in link href
