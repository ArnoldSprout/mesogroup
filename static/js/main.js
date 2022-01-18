$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

        /* Partner slide */
$('.customer-logos').slick({
    slidesToShow:4,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    dots:false,
    pauseOnHover:true,
    reponsive:[{
        breakpoint:768,
        setting: {
            slidesToShow:3,
        }
    }, {
        breakpoint: 520,
        setting: {
            slidesToShow:3
        }
    }]
});

});

$(window).on('scroll load', function(){
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
});

/*

$(document).ready(function(){
$('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
});

$(window).on('scroll load', function(){
    if($(window).scrollTop() > 25){
        $('.header').hide();
    }else{
        $('.header').show();
    }
    $('bi').removeClass('bi-x-square-fill');
    $('.navbar').removeClass('nav-toggle')
})
});*/

/**Read More Button */
const readMoreBtn = document.querySelector('.btn-read-more');
const text = document.querySelector('.text');
//function When we click the readnore btn
readMoreBtn.addEventListener('click', (e)=>{
text.classList.toggle('show-more');
if (readMoreBtn.innerText === 'Read More'){
    readMoreBtn.innerText = 'Read Less';
}else {
    readMoreBtn.innerText = 'Read More';
}

});


$(document).ready(function(){

})