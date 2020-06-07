$(document).ready(function() {
    $('a').click(() => {
       $("#navbar").collapse("hide");
       const href = $(this).attr('href');
       $([document.documentElement, document.body]).animate({
            scrollTop: $(href).offset().top 
        }, 2000);
       return false;
    });
});
