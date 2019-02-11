jQuery(document).ready(function() {
    jQuery(document).scroll(function() {
        var t = jQuery(this).scrollTop();
        t > 100 ? jQuery("#back-to-top").show() : jQuery("#back-to-top").hide()
    }) && jQuery("#back-to-top").click(function() {
        jQuery("html, body").animate({
            scrollTop: 0
        }, "fast")
    })
});