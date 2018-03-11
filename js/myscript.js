// 歡迎進入網站
$(document).ready(() => {
    let $fpage = $('#frontpage');
    let $wbtn = $('#welcomebtn');
    let $bpage = $('#backpage');
    let $navbar = $('#navbar');
    if ($('#frontpage').css("display") == "block") {
        $bpage.hide();
    }
    // else{
    //     $bpage.show();
    // }


    $wbtn.on('click', () => {
        $bpage.show();
        $navbar.show();
        $fpage.hide();
        initMap();
    })


    // 網站banner
    let swiper = new Swiper('#swiper-container1', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1200,
        followFinger: false,
        autoplay: {
            delay: 3300,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})




// google map
function initMap() {
    let uluru = { lat: 24.1494145797341, lng: 120.68551413624573 };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: uluru
    });
    let marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}


// 營業時間
let aboutme = new Swiper('#aboutme', {
    effect: "flip",
    loop: true,
    delay: 0,
    noSwiping: true,
    on: {
        click: function () {
            aboutme.slideNext(800)
        },
    },
})

// 菜單按鈕 
$("#button-bread").click(function () {
    $(this).addClass("active");
    $("#button-cake").removeClass("active");
    $("#button-other").removeClass("active");
});
$("#button-cake").click(function () {
    $(this).addClass("active");
    $("#button-bread").removeClass("active");
    $("#button-other").removeClass("active");
});
$("#button-other").click(function () {
    $(this).addClass("active");
    $("#button-bread").removeClass("active");
    $("#button-cake").removeClass("active");
});

// 麵包菜單
let swiper_bread = new Swiper('#swiper-container-bread', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    freeMode: true,
    breakpoints: {
        992: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    }
});

// 蛋糕菜單
let swiper_cake = new Swiper('#swiper-container-cake', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    freeMode: true,
    breakpoints: {
        992: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    }
});

// 其他菜單
let swiper_other = new Swiper('#swiper-container-other', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    freeMode: true,
    breakpoints: {
        992: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    }
});

// 按鈕的js
$(document).ready(() => {
    let $button1 = $('#button-bread');
    let $button2 = $('#button-cake');
    let $button3 = $('#button-other');
    let $button4 = $('#month-bread');
    let $button5 = $('#month-cake');
    let $button6 = $('#month-other');
    let $swiper1 = $('#swiper-bread');
    let $swiper2 = $('#swiper-cake');
    let $swiper3 = $('#swiper-other');
    $swiper2.hide();
    $swiper3.hide();

    $button1.on('click', () => {
        $swiper1.show();
        $swiper2.hide();
        $swiper3.hide();
    })

    $button2.on('click', () => {
        $swiper2.show();
        $swiper1.hide();
        $swiper3.hide();
    })

    $button3.on('click', () => {
        $swiper3.show();
        $swiper1.hide();
        $swiper2.hide();
    })

    $button4.on('click', () => {
        $swiper1.show();
        $swiper2.hide();
        $swiper3.hide();
    })

    $button5.on('click', () => {
        $swiper2.show();
        $swiper1.hide();
        $swiper3.hide();
    })

    $button6.on('click', () => {
        $swiper3.show();
        $swiper1.hide();
        $swiper2.hide();
    })
})

// 櫻花
$(function () {
    $('body').sakura();
});
// $(window).load(function () {
//     $('body').sakura();
// });

//圖片連續旋轉
var angle = 0;
setInterval(function () {
    angle += 0.5;
    $("#mycircle").rotate(angle);
}, 30);

// scroll smooth
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 600, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// 啟動aos
AOS.init();

$(document).ready(() => {
    $(function () {
        $('body').click(function (evt) {
            if ($(evt.target).parents("#cardcontent1").length == 0 &&
                evt.target.id != "cardbutton1" && evt.target.id != "cardcontent1") {
                $('#cardcontent1').hide();
            }
            if ($("#cardcontent1").css("display") == "none" && $("#cardcontent2").css("display") == "none" && $("#cardcontent3").css("display") == "none") {
                $('#card1').fadeIn();
                $('#card2').fadeIn();
                $('#card3').fadeIn();
            }
        });
    });
    $(function () {
        $('body').click(function (evt) {
            if ($(evt.target).parents("#cardcontent2").length == 0 &&
                evt.target.id != "cardbutton2" && evt.target.id != "cardcontent2") {
                $('#cardcontent2').hide();
            }
            if ($("#cardcontent1").css("display") == "none" && $("#cardcontent2").css("display") == "none" && $("#cardcontent3").css("display") == "none") {
                $('#card1').fadeIn();
                $('#card2').fadeIn();
                $('#card3').fadeIn();
            }
        });
    });
    $(function () {
        $('body').click(function (evt) {
            if ($(evt.target).parents("#cardcontent3").length == 0 &&
                evt.target.id != "cardbutton3" && evt.target.id != "cardcontent3") {
                $('#cardcontent3').hide();
            }
            if ($("#cardcontent1").css("display") == "none" && $("#cardcontent2").css("display") == "none" && $("#cardcontent3").css("display") == "none") {
                $('#card1').fadeIn();
                $('#card2').fadeIn();
                $('#card3').fadeIn();
            }
        });
    });

    let $cardbutton1 = $('#cardbutton1');
    let $cardbutton2 = $('#cardbutton2');
    let $cardbutton3 = $('#cardbutton3');
    let $cardcontent1 = $('#cardcontent1');
    let $cardcontent2 = $('#cardcontent2');
    let $cardcontent3 = $('#cardcontent3');
    let $card1 = $('#card1');
    let $card2 = $('#card2');
    let $card3 = $('#card3');
    $cardcontent1.hide();
    $cardcontent2.hide();
    $cardcontent3.hide();

    $cardbutton1.on('click', () => {
        $cardcontent1.fadeIn();
        $cardcontent2.hide();
        $cardcontent3.hide();
        $card1.hide();
        $card2.hide();
        $card3.hide();
    })

    $cardbutton2.on('click', () => {
        $cardcontent2.fadeIn();
        $cardcontent1.hide();
        $cardcontent3.hide();
        $card1.hide();
        $card2.hide();
        $card3.hide();
    })

    $cardbutton3.on('click', () => {
        $cardcontent3.fadeIn();
        $cardcontent1.hide();
        $cardcontent2.hide();
        $card1.hide();
        $card2.hide();
        $card3.hide();
    })
    $cardcontent1.on('click', () => {
        $cardcontent1.hide();
        $card1.fadeIn();
        $card2.fadeIn();
        $card3.fadeIn();
    })
    $cardcontent2.on('click', () => {
        $cardcontent2.hide();
        $card1.fadeIn();
        $card2.fadeIn();
        $card3.fadeIn();
    })
    $cardcontent3.on('click', () => {
        $cardcontent3.hide();
        $card1.fadeIn();
        $card2.fadeIn();
        $card3.fadeIn();
    })
}); 