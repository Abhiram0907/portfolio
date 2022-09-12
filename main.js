$(document).ready(function(){

    $(window).scroll(function(){
        // navbar scroll
        if(this.scrollY > 25){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // menuIcn
    $('.menuICN').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menuICN i').toggleClass("active");
    });
});