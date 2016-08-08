$(document).ready(function () { $('body').hide().fadeIn(2500).delay(50000)});


$(document).ready(function () {
      setTimeout(function () {
        $('.apartment').each(function () {
            var imagex = $(this);
            var imgOriginal = imagex.data('original');
            $(imagex).attr('src', imgOriginal);
        });
    }, 4000);
});

$(document).ready(function () {
      setTimeout(function () {
        $('.scene2content_asherspeech1').each(function () {
            var imagex = $(this);
            var imgOriginal = imagex.data('original');
            $(imagex).attr('src', imgOriginal);
        });
    }, 4000);
});

$(document).ready(function () {
      setTimeout(function () {
        $('.scene2content_asherspeech2').each(function () {
            var imagex = $(this);
            var imgOriginal = imagex.data('original');
            $(imagex).attr('src', imgOriginal);
        });
    }, 4200);
});

$(document).ready(function () {
      setTimeout(function () {
        $('.scene2content_asherspeech3').each(function () {
            var imagex = $(this);
            var imgOriginal = imagex.data('original');
            $(imagex).attr('src', imgOriginal);
        });
    }, 4600);
});

$(document).ready(function () {
      setTimeout(function () {
        $('.scene2content_asherspeech4').each(function () {
            var imagex = $(this);
            var imgOriginal = imagex.data('original');
            $(imagex).attr('src', imgOriginal);
        });
    }, 4800);
});

$(document).ready(function () {
      setTimeout(function () {
        $('.scene2content_asher').each(function () {
            var imagex = $(this);
            var imgOriginal = imagex.data('original');
            $(imagex).attr('src', imgOriginal);
        });
    }, 0);
});

$("#contact").click(function () {
    tp = $(this).css('top') == '250px' ? '250px' : '100px';
    $(this).animate( {top: tp }, 1400);
    
});



jQuery(document).ready(function() 
{
	$('#parallax .parallax-layer')
	.parallax({
		mouseport: $('#parallax')
	});
});

