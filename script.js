$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        //verticalCentered: false,
        slidesNavigation: true,
        scrollOverflow: true
    });

    //methods
    // $.fn.fullpage.setAllowScrolling(false);
    
    $('.table-slider-content').slick({
        accessibility: false,
        slidesToShow: 1,
        initialSlide: 1,
        focusOnSelect: false,
        arrows: false,
        infinite: false,
        fade: true,
        speed: 100
    });

    $('.table-slider-content').on("afterChange", function (event, slick, currentSlide) {
        if (currentSlide == 0) {
            $("#othersTitle").removeClass("table-title-inactive");
            $("#weTitle").addClass("table-title-inactive");
        } else {
            $("#othersTitle").addClass("table-title-inactive");
            $("#weTitle").removeClass("table-title-inactive");
        }
    })

    $("#othersTitle").click(function () {
        $('.table-slider-content').slick("slickGoTo", 0);
    });

    $("#weTitle").click(function () {
        $('.table-slider-content').slick("slickGoTo", 1);
    });

    $('.emoji-slider').slick({
        accessibility: false,
        centerMode: true,
        slidesToShow: 1,
        arrows: true,
        infinite: true,
        initialSlide: 0,
        focusOnSelect: false,
        prevArrow: "<div class='arrow-left'></div>",
        nextArrow: "<div class='arrow-right'></div>",
        centerPadding: '250px',
        lazyLoad: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".emoji").hover(hoverVideo, hideVideo);

    $("#tkb-review-link").click(function () {
        $("#tkb-review").modal({
            closeClass: 'icon-remove',
            closeText: ''
        });
    });

    $("#alean-review-link").click(function () {
        $("#alean-review").modal({
            closeClass: 'icon-remove',
            closeText: ''
        });
    });

    $("#donplafon-review-link").click(function () {
        $("#donplafon-review").modal({
            closeClass: 'icon-remove',
            closeText: ''
        });
    });

    $("#tkb-review-link-xs").click(function () {
        $("#tkb-review").modal({
            closeClass: 'icon-remove',
            closeText: ''
        });
    });

    $("#alean-review-link-xs").click(function () {
        $("#alean-review").modal({
            closeClass: 'icon-remove',
            closeText: ''
        });
    });

    $("#donplafon-review-link-xs").click(function () {
        $("#donplafon-review").modal({
            closeClass: 'icon-remove',
            closeText: ''
        });
    });

    $('.customer-reviews-xs').slick({
        accessibility: false,
        centerMode: true,
        slidesToShow: 1,
        dots: true,
        infinite: true,
        initialSlide: 0,
        focusOnSelect: false,
        centerPadding: '250px',
        lazyLoad: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });

    function hoverVideo(e) {
        $(this).get(0).play();
    }

    function hideVideo(e) {
        $(this).get(0).pause();
    }
});