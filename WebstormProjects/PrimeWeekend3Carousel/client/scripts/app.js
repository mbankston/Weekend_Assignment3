
$(document).ready(main);
var main = function() {
    $.ajax({
        url: "/data",
        success: function(data){
            console.log(data.person1.name);
            //$('.slider').prepend('<div class="slide active-slide"> <div class="container"> <div class="row"> <div class="col-md-10">'+'<h1>'+data.person1.name + '</h1>' + '<p>' + data.person1.desc + data.person1.thanks + '</p></div></div></div></div>');
            $.each(data, function (){
                $('.carousel').append('<div class="slide"><div class="container"> <div class="row"> <div class="col-md-10"><h1>'+this.name + '</h1>' + '<h2>My personal definition of me in one paragraph:</h2><p>' +this.desc + '</p><h2>Someone said <b>this</b> about <i>me</i>?! </h2><p>' + this.thanks+'</p></div></div></div></div>');
            });
            $('.slide:first-child').addClass("active-slide");
        }
    });

    $('.arrow-next').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if(nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });


    $('.arrow-prev').click(function() {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();

        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if(prevSlide.length === 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }

        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');

        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
    //add in arrow keyboard scrolling functionality
    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
                var currentSlide = $('.active-slide');
                var prevSlide = currentSlide.prev();

                var currentDot = $('.active-dot');
                var prevDot = currentDot.prev();

                if(prevSlide.length === 0) {
                    prevSlide = $('.slide').last();
                    prevDot = $('.dot').last();
                }

                currentSlide.fadeOut(600).removeClass('active-slide');
                prevSlide.fadeIn(600).addClass('active-slide');

                currentDot.removeClass('active-dot');
                prevDot.addClass('active-dot');
                break;

            case 38: // up
                break;

            case 39: // right
                var currentSlide = $('.active-slide');
                var nextSlide = currentSlide.next();

                var currentDot = $('.active-dot');
                var nextDot = currentDot.next();

                if(nextSlide.length === 0) {
                    nextSlide = $('.slide').first();
                    nextDot = $('.dot').first();
                }

                currentSlide.fadeOut(600).removeClass('active-slide');
                nextSlide.fadeIn(600).addClass('active-slide');

                currentDot.removeClass('active-dot');
                nextDot.addClass('active-dot');
                break;

            case 40: // down
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

}

$(document).ready(main);

