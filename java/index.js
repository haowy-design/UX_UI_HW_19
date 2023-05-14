$(document).ready(function(){

    //Loading Screen
    setTimeout(function(){
        $("#nameLogo").animate({left:"+=30%"}, 900);
        $("#loading-screen").fadeOut(850);
    }, 2100);

    //Page Links

    //Graphic Link
    $("#graphicText").hover(function(){
        $("body").addClass("change-background");
        $(".descriptionArea,.nameArea > p").addClass("change-element-color");
        $(".hpbutton").addClass("inverted-button-colors");
        $(".nameArea").addClass("graphicImage");
    }, function(){
        $("body").removeClass("change-background");
        $(".descriptionArea,.nameArea > p").removeClass("change-element-color");
        $(".hpbutton").removeClass("inverted-button-colors");
        $(".nameArea").removeClass("graphicImage");
    });

    //UX/UI Link
    $("#uxText").hover(function(){
        $("body").addClass("change-background");
        $(".descriptionArea,.nameArea > p").addClass("change-element-color");
        $(".hpbutton").addClass("inverted-button-colors");
        $(".nameArea").addClass("uxImage");
    }, function(){
        $("body").removeClass("change-background");
        $(".descriptionArea,.nameArea > p").removeClass("change-element-color");
        $(".hpbutton").removeClass("inverted-button-colors");
        $(".nameArea").removeClass("uxImage");
    });

    //Designer Link
    $("#designerText").hover(function(){
        $("body").addClass("change-background");
        $(".descriptionArea,.nameArea > p").addClass("change-element-color");
        $(".hpbutton").addClass("inverted-button-colors");
        $(".nameArea").addClass("designerImage");
    }, function(){
        $("body").removeClass("change-background");
        $(".descriptionArea,.nameArea > p").removeClass("change-element-color");
        $(".hpbutton").removeClass("inverted-button-colors");
        $(".nameArea").removeClass("designerImage");
    });
    
});
