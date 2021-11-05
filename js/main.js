$(document).ready(function(){

    $('.project-button button').click(function(e){

        $(".project-button button").removeClass("active");
        e.target.classList.add("active");

        $(".all-projects").isotope({
            filter:$(e.target).attr("data-filter")
        })
        return false;
    })
    $("#btn1").trigger("click");


    // Magnific popup

    $(".popup").magnificPopup({
        type:"image",
        gallery:{enabled:true}
    })


})


// owl carousel 

$(".owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
             items:1
        },
        544:{
            items:2
        }
    }
})

// typed js

let typed = new Typed('.element',{ strings: ["React Developer", "Node Js Developer", "Full Stack Developer","Freelancer","Web Designer"],
    smartBackspace: true,
    typeSpeed:60,
    backSpeed:60,
    loop:true,
});

window.onscroll = function(){
    var top = window.scrollY;

    if( top >= 100 ){
        $('.menubar').addClass("header");
    }else{
        $('.menubar').removeClass("header");
    }
}
