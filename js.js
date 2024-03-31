$(document).ready(function () {
    $(".open-popup-link").click(function (element) {
        element.preventDefault();
        $(".video").fadeIn();
        $("body").addClass("video-open");
    });

    function closeVideo() {
        $(".video").fadeOut();
        $("body").removeClass("video-open");
    }

    $(".close").click(function () {
        closeVideo();
    });

    //click icon moon
    var isLight = false;

    $(".moon-icon").click(function () {
        if (isLight) {
            $(this).html('<i class="fa-regular fa-moon"></i>');
            $(".form-control").css("background-color", "white");
            $("#search::placeholder").css("color", "grey");
            $(".glass-icon").css("color", "grey");
            $(".aboutus").css("background-color", "white");
            $(".aboutus").css("color", "black");
            $(".news").css("background-color", "#f7f7f7");
            $(".news").css("color", "black");
            $(".cate").css("background-color", "white");
            $(".intro-number-item").css("background-color", "white");
            $(".intro-number-item-content").css("color", "black");
            $(".video-class").css("background-color", "white");
            $(".blog").css("background-color", "#f7f7f7");
            $(".blog").css("color", "black");
            $(".blog-btn button").css("color", "white");
            $("body").css("background-color", "white");
            $(".cmt").css("color", "black");
            $(".cmt").css("background-color", "white");
            $(".social-media i").css("background-color", "white");
            $(".social-media i:hover").css("background-color", "#f76401");
            $(".social-media i").removeClass("hover");
            // about us page
            $(".aboutUs-story").css("color", "black");
            $(".skill").css("background-color", "#f7f7f7");
            $(".skill").css("color", "black");
            $(".chefs").css("background-color", "white");
            $(".chefs").css("color", "black");
            // service page
            $(".plan").css("color", "black");
        } else {
            $(this).html('<i class="fa-regular fa-sun"></i>');
            $("body").css("background-color", "#232220");
            $(".form-control").css("background-color", "#232220");
            $("#search::placeholder").css("color", "white");
            $(".glass-icon").css("color", "white");
            $(".aboutus").css("background-color", "#232220");
            $(".aboutus").css("color", "white");
            $(".news").css("background-color", "#282828");
            $(".news").css("color", "white");
            $(".cate").css("background-color", "#232220");
            $(".intro-number-item").css("background-color", "#232220");
            $(".intro-number-item-content").css("color", "white");
            $(".video-class").css("background-color", "#232220");
            $(".blog").css("background-color", "#282828");
            $(".blog").css("color", "white");
            $(".blog-btn button").css("color", "white");
            $(".cmt").css("color", "white");
            $(".cmt").css("background-color", "#232220");
            $(".social-media i:hover").css("background-color", "#f76401");
            $(".social-media i").css("background-color", "#232220");
            $(".social-media i").addClass("hover");
            // about us page
            $(".aboutUs-story").css("color", "white");
            $(".skill").css("background-color", "#282828");
            $(".skill").css("color", "white");
            $(".chefs").css("background-color", "#232220");
            $(".chefs").css("color", "white");
            // service page
            $(".plan").css("color", "white");
        }

        // Chuyển đổi trạng thái
        isLight = !isLight;
    });
});

$(document).ready(function () {
    $(".bar-icon").click(function () {
        $(".bar-menu").toggleClass("active");
    });
});
